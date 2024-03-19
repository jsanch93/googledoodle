console.log('OK');

var tl = gsap.timeline();
var tl1 = gsap.timeline();
var tl2 = gsap.timeline();
var tl3 = gsap.timeline();
var tl4 = gsap.timeline();
var tl5 = gsap.timeline();
var tl6 = gsap.timeline();
var tl7 = gsap.timeline();
var tl8 = gsap.timeline();
var tl9 = gsap.timeline();

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
  delay: 2.5
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
  y: -350,
  delay: 6.5
});

tl6.fromTo(
  "#come",
  {
    opacity: 0
  },
  {
    opacity: 1,
    duration: 1,
    delay: 1
  }
);

tl7.fromTo(
  "#on",
  {
    opacity: 0
  },
  {
    opacity: 1,
    duration: 1,
    delay: 3
  }
);

tl8.fromTo(
  "#you",
  {
    opacity: 0
  },
  {
    opacity: 1,
    duration: 1,
    delay: 5.5
  }
);

tl9.fromTo(
  "#irons",
  {
    opacity: 0
  },
  {
    opacity: 1,
    duration: 1,
    delay: 8
  }
);

