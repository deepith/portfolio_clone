const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


document.querySelectorAll(".element").forEach((elem) => {

    var rotate = 0;
    var diffrot = 0;
    var prev_pos = 0;

    elem.addEventListener("mouseleave", (dets) => {

        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration: .5,
        })

        gsap.to(elem.querySelector("h5"), {
            opacity: 1,
            ease: Power3,
            duration: .5,
        })

        gsap.to(elem.querySelector("h1"), {
            x: 0,
            opacity: 1,
            ease: Power3,
            duration: .5,
        })



    } )


    elem.addEventListener("mousemove", (dets) => {

        var diff = dets.clientY - elem.getBoundingClientRect().top;

        diffrot = dets.clientX - prev_pos;
        prev_pos = dets.clientX;

        rotate = gsap.utils.clamp(-20, 20, diffrot)

        console.log(rotate)


        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate: rotate,
        })

        gsap.to(elem.querySelector("h5"), {
            opacity: 0.3,
            ease: Power3,
            duration: .5,
        })

        gsap.to(elem.querySelector("h1"), {
            x: 50,
            opacity: 0.3,
            ease: Power3,
            duration: .5,
        })


    } )



})






function firstPageAnim() {
    var tl = gsap.timeline();
 
    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to(".elem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: .2
    })
    .from("#hero-footer", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    })


}


var timeout;

function circleSqueeze() {

    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", (dets) => {

        clearTimeout(timeout);

        var xdif = dets.clientX - xprev;
        var ydif = dets.clientY - yprev;

        xprev = dets.clientX;
        yprev = dets.clientY;

        xscale = gsap.utils.clamp(0.8,1.2,xdif);
        yscale = gsap.utils.clamp(0.8,1.2,ydif);

        moveCircleMouse(xscale, yscale);
        

        timeout = setTimeout(() => {
            document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
        }, 100);

    })
}

circleSqueeze();
    


function moveCircleMouse(xscale, yscale) {
    window.addEventListener("mousemove", (dets) => {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    })

}

moveCircleMouse();

firstPageAnim();