var Templates = require('./Templates');
var Storage = require('./Storage');

var $advert_list = $('#advert_list');

var Advert = [];

function addAdvert(advert){
    Advert.push({
        advert:advert
    });
    update();
}

function update(){
    $advert_list.html("");
    function addOneItem(advert){
        var html_code = Templates.Advertisement_OneItem(advert);
        var $node = $(html_code);
        $node.find(".btn-details").click(function(){
            window.location = 'advert.html';
            $(".category-details").text(advert.category);
            $(".name-details").text(advert.name);
            $(".description-details").text(advert.description);
            $(".address-details").text(advert.address);
            $(".date-details").text(advert.date);
            $(".personName-details").text(advert.personName);
            $(".number-details").text(advert.number);
            
        });
        $advert_list.append($node);
}
    Advert.forEach(addOneItem);
    Storage.set("advert", Advert);
}

function initialiseAdvert() {
    var savedAdvert = Storage.get("advert");
    if (savedAdvert) {
        Advert = savedAdvert;
    }
    update();
}

function getAllAdverts() {
    return Advert;
}

function filter(filter){
    var advert_shown = [];
    Advert.forEach(function(advert){
       if(advert.category == filter){
           advert_shown.push(advert);
       }
    });
    $advert_list.html("");
    function addOneItem(advert){
        var html_code = Templates.Advertisement_OneItem(advert);
        var $node = $(html_code);
        $node.find(".btn-details").click(function(){
            window.location = 'advert.html';
            $(".category-details").text(advert.category);
            $(".name-details").text(advert.name);
            $(".description-details").text(advert.description);
            $(".address-details").text(advert.address);
            $(".date-details").text(advert.date);
            $(".personName-details").text(advert.personName);
            $(".number-details").text(advert.number);            
        });
        $advert_list.append($node);
}
    advert_shown.forEach(addOneItem); 
}

exports.filter = filter;
exports.addAdvert = addAdvert;
exports.update = update;
exports.initialiseAdvert = initialiseAdvert;
exports.getAllAdvert = getAllAdverts;