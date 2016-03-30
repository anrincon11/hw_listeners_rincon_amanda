var form = document.getElementById( 'contact-form' );

form.addEventListener( 'click', function( event ) {
	event.preventDefault();
	console.log( 'The firstName is: ' + document.getElementById( 'First' ).value );
	console.log( 'The LastName is: ' + document.getElementById( 'Last' ).value );
	console.log( 'The email is: ' + document.getElementById( 'Email' ).value );
	console.log( 'The message is: ' + document.getElementById( 'Message' ).value );
} );
