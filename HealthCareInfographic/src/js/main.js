// window.onload = function() {
// 	var waypoint = new Waypoint({
// 		element: document.getElementById('per-capita'),
// 		handler: function(direction) {
// 			notify('25px from top')
// 	  },
// 	  offset: 25
// 	});
// }
	// var pillRotationWaypoint = new Waypoint({
	// 	element: document.getElementById('pills'),
	// 	handler: function(direction) {
	// 		document.querySelector(".pill-one").classList.add("pill-animated")
	// 		document.querySelector(".pill-two").classList.add("pill-animated")
	// 		document.querySelector(".pill-three").classList.add("pill-animated")
	// 		document.querySelector(".pill-four").classList.add("pill-animated")
	// 		console.log("40% from the top")
	//   },
	//   offset:"20%;"
	// });


// 	var pillRowTwoRotationWaypoint = new Waypoint({
// 		element: document.getElementById('pills-two'),
// 		handler: function(direction) {
// 			document.querySelector(".second-pill-one").classList.add("pill-animated")
// 			document.querySelector(".second-pill-two").classList.add("pill-animated")
// 			document.querySelector(".second-pill-three").classList.add("pill-animated")
// 			document.querySelector(".second-pill-four").classList.add("pill-animated")
// 			console.log("40% from the top")
// 	  },
// 	  offset: "20%;"
// 	});

// }

var elem = document.querySelector('.pill-one');
window.addEventListener('scroll', function() {
	var value = window.scrollY * 0.25;
	elem.style.transform = `translatex(-50%) translatey(-50%) rotate(${value}deg)`; 
});

var elem2 = document.querySelector('.pill-two');
window.addEventListener('scroll', function() {
	var value = window.scrollY * 0.25;
	elem2.style.transform = `translatex(-50%) translatey(-50%) rotate(${value}deg)`; 
});

var elem3 = document.querySelector('.pill-three');
window.addEventListener('scroll', function() {
	var value = window.scrollY * 0.25;
	elem3.style.transform = `translatex(-50%) translatey(-50%) rotate(${value}deg)`; 
});

var elem4 = document.querySelector('.pill-four');
window.addEventListener('scroll', function() {
	var value = window.scrollY * 0.25;
	elem4.style.transform = `translatex(-50%) translatey(-50%) rotate(${value}deg)`; 
});


var elem5 = document.querySelector('.second-pill-one');
window.addEventListener('scroll', function() {
	var value = window.scrollY * 0.25;
	elem5.style.transform = `translatex(-50%) translatey(-50%) rotate(${value}deg)`; 
});

var elem6 = document.querySelector('.second-pill-two');
window.addEventListener('scroll', function() {
	var value = window.scrollY * 0.25;
	elem6.style.transform = `translatex(-50%) translatey(-50%) rotate(${value}deg)`; 
});

var elem7 = document.querySelector('.second-pill-three');
window.addEventListener('scroll', function() {
	var value = window.scrollY * 0.25;
	elem7.style.transform = `translatex(-50%) translatey(-50%) rotate(${value}deg)`; 
});

var elem8 = document.querySelector('.second-pill-four');
window.addEventListener('scroll', function() {
	var value = window.scrollY * 0.25;
	elem8.style.transform = `translatex(-50%) translatey(-50%) rotate(${value}deg)`; 
});