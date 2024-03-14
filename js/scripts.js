console.log('OK');

var tl = gsap.timeline();
var tl1 = gsap.timeline();
var tl2 = gsap.timeline();
var tl3 = gsap.timeline();
var tl4 = gsap.timeline();
var tl5 = gsap.timeline();

tl.to(".ball", {
  x: 100,
  y: -325,
  scale: -2,
  repeat: 3,
  duration: 2.5,
  rotation: 360
});

// Making the ball disappear and reappear
tl1.fromTo(
  ".ball",
  {
    opacity: 1
  },
  {
    opacity: 0,
    duration: 2.5,
    repeat: 3
  }
);

tl2.from("#c", {
  x: 1000,
  ease: "elastic.out",
  delay: 1
});

tl3.from("#o", {
  y: -500,
  duration: 2.5,
  ease: "steps(5)",
  delay: 3
});

tl4.from("#y", {
  duration: 2.5,
  ease: "back.in(1.7)",
  y: 250,
  delay: 4
});

tl5.from("#i", {
  duration: 2.5,
  ease: "back.in(1.7)",
  y: -250,
  delay: 7
});

GSDevTools.create({});
