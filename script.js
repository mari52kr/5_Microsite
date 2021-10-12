gsap.registerPlugin(ScrollTrigger);

gsap.from("#produkter", {
  y: 300,
  duration: 2,
  scrollTrigger: {
    trigger: "#produkter",
    start: "top 100%",
    end: "",
    markers: false,
  },
});

/* const section = document.querySelector("#produkter");

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: section,
    start: "start 50%",
    end: "+=200px",
    scrub: true,
  },
});
gsap.from(section, {
  duration: 2,
  opacity: 0,
  ease: "none",
  stagger: 1,
}); */
