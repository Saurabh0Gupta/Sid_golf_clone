var crs=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crs.style.left=dets.x+"px"
    crs.style.top=dets.y+"px"
    blur.style.left=dets.x-250+"px"
    blur.style.top=dets.y-250+"px"
})
var h4all=document.querySelectorAll("#nav a")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crs.style.scale=3
        crs.style.border="1px solid #fff"
        crs.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crs.style.scale=1
        crs.style.border="0px solid #95C11E"
        crs.style.backgroundColor="#95C11E"
    })
})
gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"170px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:" top -11%",
        scrub:1
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    }
})
gsap.from("#svg1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 40%",
        scrub:4
    }
})
gsap.from("#svg2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 40%",
        scrub:4
    }
})
gsap.from("#about-us",{
    y:100,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        stagger:0.9,
        trigger:"#about-us",
        // markers:true,
        start:"top 70%",
        end:"top 40%",
        scrub:1,
    }
})
gsap.from(".box",{
    scale:0.3,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        stagger:0.9,
        trigger:"#page2-last",
        markers:true,
        start:"top 70%",
        end:"top 40%",
        scrub:1,
        // pin:true
    }
})