$(document).ready(function () {
	$(".dropdown-button").dropdown();
	// Add smooth scrolling to all links
	$("a").on('click', function (event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top - 63
			}, 800, function () {

				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // End if
	});
});

document.addEventListener('DOMContentLoaded', function () {
	Typed.new('.element', {
		strings: ["a Software Developer", "a Web Developer", "innovative", "creative", "a quick learner"],
		typeSpeed: 0.5,
		backDelay: 2000,
		cursorChar: "<span style=\"color: #cc00ff; font-weight: 900\">_</span>",
		loop: true,
	});
	Typed.new('.email', {
		strings: ["contact<span style=\"color: #cc00ff;\">@</span>andresrodh<span style=\"color: #cc00ff; font-weight: 900;\">.</span>com"],
		typeSpeed: 0.5,
		backDelay: 5000,
		cursorChar: "<span style=\"color: #cc00ff; font-weight: 900;\">_</span>",
		loop: true,
	});
});