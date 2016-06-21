$(function(){
    var Advertisements = require('./Advertisements');
    
    require('./googleMap');
    
    $('#btn-advert-add').click(function(){
        Advertisements.showAdvert();
    });
    
    $('#btn-main-page').click(function(){
        window.location ='index.html';
    });
});