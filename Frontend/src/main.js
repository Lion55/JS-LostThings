$(function(){
    var Advertisements = require('./Advertisements');
    
    $('#advert-add-btn').click(function(){
        Advertisements.showAdvert();
    });
    
    $('#main-page-btn').click(function(){
        window.location ='index.html';
    });
});