gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();

gsap.from(".transition1", {
    scrollTrigger: {
        trigger: '.transition1',
        start: "top bottom"
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: .1
})
gsap.from(".transition2", {
    scrollTrigger: {
        trigger: '.transition2',
        start: "top bottom"
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: .2
})
gsap.from(".transition3", {
    scrollTrigger: {
        trigger: '.transition3',
        start: "top bottom"
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: .3
})