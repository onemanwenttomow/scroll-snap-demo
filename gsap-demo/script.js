// gsap.registerPlugin(ScrollTrigger);

// gsap.to(".panel:not(:last-child)", {
//     yPercent: -100, 
//     ease: "none",
//     stagger: 0.5,
//     scrollTrigger: {
//         trigger: "#container",
//         start: "top top",
//         end: "+=300%",
//         scrub: true,
//         pin: true,
//         // markers: true
//     }
// });

// console.log('test: ');



// gsap.set(".panel", {zIndex: (i, target, targets) => targets.length - i});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".panel").forEach((panel, i) => {
    ScrollTrigger.create({
        trigger: panel,
        start: "top top", 
        pin: true, 
        pinSpacing: false 
    });
});


// ScrollTrigger.create({
//     snap: 1 / 4 // snap whole page to the closest section!
// });