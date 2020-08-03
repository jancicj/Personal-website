const tl = new TimelineMax();

tl.fromTo('.links', 1, { x: "120%" }, {x: "0%", ease: Power2.easeInOut})
.fromTo('.logo', 1, {x: "-200%", opacity: "0"}, {x: '0%', opacity: "1", ease: Power2.easeInOut}, "-=1")
.fromTo('.blue', 4, {x: "-200%", opacity: "0"}, {x: '200%', opacity: "1", ease: Power2.easeInOut}, "-=2.7")
.fromTo('.orange', 4, {x: "-200%", opacity: "0"}, {x: '200%', opacity: "1", ease: Power2.easeInOut}, "-=3.65")
.fromTo('.options', 3, {x: "-200%", opacity: "0"}, {x: '0%', opacity: "1", ease: Power2.easeInOut}, "-=4.45")
.fromTo('.photography', 3, {x: "-200%", opacity: "0"}, {x: '0%', opacity: "1", ease: Power2.easeInOut}, "-=3.9")
