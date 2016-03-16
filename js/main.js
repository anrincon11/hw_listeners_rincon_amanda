/*Listener Branch*/

var heading = document.getElementsByTagName( 'h1' )[ 0 ];
var x = 1;

heading.addEventListener( 'click', function() {
	var myElement = document.createElement( 'article' );

	myElement.innerHTML = '<p>This is click number ' + x++ + '</p>';
	document.getElementsByClassName( 'container' )[ 0 ].appendChild( myElement );
} );
