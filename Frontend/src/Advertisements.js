var Templates = require('./Templates');
var Storage = require('./Storage');

var $advert_list = $('#advert_list');

function advertDetails(){
    var html_code = Templates.Advertisement_OneItem();
    var $node = $(html_code);
    
    $node.find(".btn-details").click(function(){
        window.location = 'advert.html';
    });
    $advert_list.append($node);
}

var Advert = [];

function addAdvert(){
    Advert.push({
            advert: advert
        });
    update();
}

function update(){
    $advert_list.html("");
}

exports.advertDetails = advertDetails;