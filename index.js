var app     = require( 'express' )();
var http    = require( 'http' ).createServer( app );
var io      = require( 'socket.io' )( http );

var CSC_Core = require(__dirname +'//model//CSC_Core');
var CIS_Core = require(__dirname +'//model//CIS_Core');
var Programmer_Analyst = require(__dirname +'//model//Programmer_Analyst');
var CSC_Con =  require(__dirname +'//model//CSC_concentration');
var Networking = require(__dirname +'//model//networking');
var Integrated_Tech = require(__dirname +'//model//integrated_tech');
var Web_Analyst = require(__dirname +'//model//web_analyst');

const PORT = 3000;

app.get( '/', function( req, res ) { 
    res.sendFile( __dirname + '/views/index.html' );
});


http.listen( PORT, function() {
    console.log( 'listening on *:' + PORT );
});


io.on( 'connection', function( socket ) {
    console.log( 'A user has connected!' );
    
    socket.emit( 'update-table', CSC_Core );
    socket.emit( 'update-buttons', ["CSC Core","CIS Core","Programmer Analyst","CSC Concentration","Networking","Integrated Tech","Web Analyst"]); // "Programmer Analyst" not working...
    
    socket.on( 'disconnect', function() {
        console.log( 'A user disconnected' );
    });
    
    socket.on( 'get-course', function( course ) {
        switch(course){
        case "CSC Core":
            socket.emit( 'update-table', CSC_Core );
            break;

        case "CIS Core":
            socket.emit( 'update-table', CIS_Core );
            break;
            
        case "Programmer Analyst":
            socket.emit( 'update-table', Programmer_Analyst ); // io for all, socket for one
            break;

        case "CSC Concentration":
            socket.emit('update-table',CSC_Con);
            break;
            
        case "Networking":
            socket.emit( 'update-table', Networking );
            break;

        case "Integrated Tech":
            socket.emit( 'update-table', Integrated_Tech );
            break;
        
        case "Web Analyst":
            socket.emit( 'update-table', Web_Analyst ); // io for all, socket for one
            break;


        default:
            console.log("Not a valid Course");
            break;
        }
    });
    
});