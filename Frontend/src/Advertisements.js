var Templates = require('./Templates');

var $advert_list = $('#advert_list');

function showAdvert(){
    var html_code = Templates.Advertisement_OneItem();
    var $node = $(html_code);
    
    $node.find(".btn-advert-details").click(function(){
        window.location = 'advert.html';
    });
    $advert_list.append($node);
}

exports.showAdvert = showAdvert;