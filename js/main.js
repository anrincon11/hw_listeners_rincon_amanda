/* Easter Egg One */
var heading = document.getElementById( 'siteHeading' );

//listens for a click on the siteHeading id element
heading.addEventListener( 'click', function() {
	heading.style.color = 'RoyalBlue'; //changes the color of the font to blue with a single click
} );

/* Easter Egg Two */
var hover = document.getElementById( 'sidebar' );

//listens for when the mouse enters the sidebar area
hover.addEventListener( 'mouseout', function() {
	var myElement = document.createElement( 'article' );

	myElement.innerHTML = "<p>The day before my mom's birthday!</p>";
	document.getElementsByTagName( 'aside' )[ 0 ].appendChild( myElement );
} );
