var tl = gsap.timeline();

// _______________________________ wall and stone moving______________________
tl.to(".wall-shade", {
  x: -300,
  ease: "linear",
  duration: 2.5,
  repeat: -1,
});
tl.to(".stone", {
  left: -700,
  duration: 10,
  ease: "linear",
  repeat: -1,
  delay: -3,
});

// __________________________________________ Frame 1 _________________________________
//________________ Text entry___________________
tl.to(".frame-1-text", { left: 0, stagger: 0.1, delay: -9, duration: 1 });
// ______________Bike Shaking___________________
tl.to(".bike", { top: "+=1", repeat: -1, duration: 0.15 });

// ______________ Bike Entry_____________________
tl.to(".bike", { left: 100, duration: 1, delay: -1.1 });

// _____________ Text Exit_____________
tl.to(".frame-1-text", { left: 185, stagger: -0.1, duration: 1, delay: 2 });
// _____________ Bike Exit_____________
tl.to(".bike", { left: 450, duration: 2, delay: -1.35 });
