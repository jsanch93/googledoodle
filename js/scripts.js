console.log('OK');



gsap.to( '#big-heart', {
    scale : 2,
    duration: 2,
    repeat: -1,
    yoyo: true
  });
  
  
  // gsap.to('.ball', {
  //   scale: 2,
  //   yoyo: true,
  //   duration:2.5,
  //   ease: "steps(12)",
  //   y: -500
  // });
  
  
  gsap.from('#bowl', {
    x: 1000,
    ease: 'bounce',
    duration: 3,
    delay: 4
    
  })
  
  gsap.from('#handle', {
    y: -550,
    ease: 'bounce',
    delay: 3,
    duration: 2,
    rotate: 360
  })
  
  gsap.from('.letter', {
    
    y: 1000, 
    ease: 'elastic',
    
    stagger: {
      each: 1,
      from: 'edges'
    }
  });