/* Description: Custom JS file */

/* Navigation*/
// Collapse the navbar by adding the top-nav-collapse class
window.onscroll = function () {
	scrollFunction();
	scrollFunctionBTT(); // back to top button
};

function scrollFunction() {
	let intViewportWidth = window.innerWidth;
	if (
		document.body.scrollTop > 30 ||
		(document.documentElement.scrollTop > 30) & (intViewportWidth > 991)
	) {
		document.getElementById("navbar").classList.add("top-nav-collapse");
	} else if (
		document.body.scrollTop < 30 ||
		(document.documentElement.scrollTop < 30) & (intViewportWidth > 991)
	) {
		document.getElementById("navbar").classList.remove("top-nav-collapse");
	}
}

// Navbar on mobile
let elements = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");

for (let i = 0; i < elements.length; i++) {
	elements[i].addEventListener("click", () => {
		document.querySelector(".offcanvas-collapse").classList.toggle("open");
	});
}

/*document.querySelector(".navbar-toggler").addEventListener("click", () => {
  	document.querySelector(".offcanvas-collapse").classList.toggle("open");
});
*/
// Hover on desktop
function toggleDropdown(e) {
	const _d = e.target.closest(".dropdown");
	let _m = document.querySelector(".dropdown-menu", _d);

	setTimeout(
		function () {
		const shouldOpen = _d.matches(":hover");
		_m.classList.toggle("show", shouldOpen);
		_d.classList.toggle("show", shouldOpen);

		_d.setAttribute("aria-expanded", shouldOpen);
		},
		e.type === "mouseleave" ? 300 : 0
	);
}

/*// On hover
document.querySelector(".dropdown").addEventListener("mouseleave", toggleDropdown);

document.querySelector(".dropdown").addEventListener("mouseover", toggleDropdown);

// On click
document.querySelector(".dropdown").addEventListener("click", (e) => {
	const _d = e.target.closest(".dropdown");
	let _m = document.querySelector(".dropdown-menu", _d);
	if (_d.classList.contains("show")) {
		_m.classList.remove("show");
		_d.classList.remove("show");
	} else {
		_m.classList.add("show");
		_d.classList.add("show");
	}
});
  */

/* Card Slider - Swiper */
var cardSlider = new Swiper('.card-slider', {
	autoplay: {
		delay: 4000,
		disableOnInteraction: false
	},
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}
});


/* Modal Button Close And Scroll To Link */
const theModal = document.getElementById('staticBackdrop');
// Needs the if otherwise it will serve error on pages without the modal like the extra pages
if (theModal !== null) { 
	const theModalGen = new bootstrap.Modal(theModal);
	const theModalCtaBtn = document.getElementById('modalCtaBtn');
	theModalCtaBtn.addEventListener('click', function () {
		theModalGen.hide(); 
	})
}
