const tl = new TimelineMax();

tl.fromTo('h2', 1, { x: "-200%" }, {x: "0%", ease: Power2.easeInOut})
.fromTo('p', 1, {y: "200%", opacity: "0"}, {y: '0%', opacity: "1", ease: Power2.easeInOut}, "-=1")
.fromTo('h1', 1, { x: "200%", opacity: "0" }, {x: "0%", opacity: "1", ease: Power2.easeInOut}, "-=1")
.fromTo('#swing', 1, {opacity: "0" }, {opacity: "1", ease: Power2.easeInOut}, "-=1")
.fromTo('.links', 1, { x: "200%", opacity: "0" }, {x: "0%", opacity: "1", ease: Power2.easeInOut}, "-=1")
