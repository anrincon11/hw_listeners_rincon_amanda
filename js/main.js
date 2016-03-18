/* Easter Egg One */
var heading = document.getElementById( 'siteHeading' );

//listens for a click on the siteHeading id element
heading.addEventListener( 'click', function() {
	heading.style.color = 'RoyalBlue';
} );

//changes the color of the font to blue with a single click

/* Easter Egg Two */
var hover = document.getElementById( 'sidebar' );

//listens for when the mouse enters the sidebar area
hover.addEventListener( 'mouseout', function() {
	var myElement = document.createElement( 'article' );

	myElement.innerHTML = "<p>The day before my mom's birthday!</p>";
	document.getElementsByTagName( 'aside' )[ 0 ].appendChild( myElement );
} );

//adds a paragraph element to the bottom of the sidebar

/* Easter Egg Three */
var backgroundChange = document.getElementById( 'colors' );

//listens for the press of a key on the body element
backgroundChange.addEventListener( 'keydown', function() {
	document.body.style.backgroundColor = 'Plum';
} );

//changes the background color of the page when a key is pressed on the keyboard
