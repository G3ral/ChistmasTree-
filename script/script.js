MorphSVGPlugin.convertToPath('polygon');
var xmlns = "http://www.w3.org/2000/svg",
xlinkns = "http://www.w3.org/1999/xlink",
select = function(s) {
    return document.querySelector(s);
},
selectAll = function(s){
    return document.querySelectorAll(s);
},
pContainer = select('.pContainer'),
mainSVG = select('.mainSVG'),
star = select('#star'),
sparkle = select('.sparkle'),
tree = select('#tree'),
showParticle = true,
particleColorArray = ['#E8F6F8', '#ACE8F8', '#F6FBFE','#A2CBDC','#B74551', '#5DBA72', '#910B28', '#910B28', '#446D39'],
particleTypeArray = ['#star','#circ','#cross','#heart'],
// particleTypeArray = ['#star'],
particlePool = [],
particleCount = 0,
numParticle = 201

gsap.set('svg', {
    visibility: 'visible'
})
gsap.set(sparkle,{
    transformOrigin: '50% 50%',
    y: -100
})

let getSVGPoints = (path) => {
    let arr = []
    var rawPath = MotionPathPlugin.getRawPath(path)[0]; rawPath.forEach((el, value) => {
        let obj = {}
        obj.x = rawPath[value * 2]
        obj.y = rawPath[(value * 2)+1]
        if (value % 2){
            arr.push(obj)
        }
        //console.log(value)
    });
    return arr;
}

let treePath = getSVGPoints('.treePath'),
treeBottomPath = getSVGPoints('.treeBottomPath'),
mainTL = gsap.timeline({delay:0, repeat:0 }), starTL;

function flicker(p){
    gsap.killTweensOf(p, {opacity:true});
    gsap.fromTo(p, {opacity:1}, {duration: 0.07, opacity:Math.random(), repeat:-1})
}

