$(function(){
    /*var mongoos = require('mongoose');
    mongoose.connect('mongodb://localhost:5050/DBName');
    
    var db = mongoose.connection;
    db.on('error',	 function	 (err)	{
        console.log('connection	error:',	 err.message);
    });
    db.once('open',	 function	 callback	 ()	{
        console.log("Connected	to	DB!");
    });*/
    
    var Advertisements = require('./Advertisements');
    
    require('./googleMap');
    require('./googleMapAdvert');
    
    $('#btn-add-advert').click(function(){
        window.location = 'index.html';
        Advertisements.showAdvert();
    });
    
    $('#btn-main-page').click(function(){
        window.location ='index.html';
    });
    
    $('#add-advert').click(function(){
        window.location = 'addAdvert.html';
    });
});