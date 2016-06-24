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
    
    
    Advertisements.initialiseAdvert();
    
    $('#btn-main-page').click(function(){
        window.location ='index.html';
    });
    
    $('#add-advert').click(function(){
        window.location = 'addAdvert.html';
    });
    
    $('#btn-back').click(function(){
        window.location ='index.html';
    });
    
    $("#lost").click(function(){
        Advertisements.filter("Загубив");
        $(".page-header").text("Втрати");
    });
    
    $("#found").click(function(){
        Advertisements.filter("Знайшов");
        $(".page-header").text("Знахідки");
    });
    
    $("#brand-name").click(function(){
        window.location = "index.html";
        Advertisements.initialiseAdvert();
        $(".page-header").text("Усі");
    });
    
    var nameForm = $(".name-form");
    var numberForm = $(".number-form");
    var personNameForm = $(".person-name-form");
    var addressForm = $(".address-form");
    
    $("#name").on('input', function (event) {
        if ($("#name").val() == "") {
            nameForm.find(".has-error").attr("class", "status");
            nameForm.find(".has-success").attr("class", "status");
            nameForm.find(".status").attr("class", "has-error");
            nameForm.find(".help-block").css("display", "inline");
        } else {
            nameForm.find(".has-error").attr("class", "status");
            nameForm.find(".has-success").attr("class", "status");
            nameForm.find(".help-block").css("display", "none");
            nameForm.find(".status").attr("class", "has-success");
        }
    });
    
    $("#personName").on('input', function (event) {
        if ($("#personName").val() == "" || /[0-9]/.test($("#personName").val())) {
            personNameForm.find(".has-error").attr("class", "status");
            personNameForm.find(".has-success").attr("class", "status");
            personNameForm.find(".status").attr("class", "has-error");
            personNameForm.find(".help-block").css("display", "inline");
        } else {
            personNameForm.find(".has-error").attr("class", "status");
            personNameForm.find(".has-success").attr("class", "status");
            personNameForm.find(".help-block").css("display", "none");
            personNameForm.find(".status").attr("class", "has-success");
        }
    });
    
    $("#number").on('input', function () {
        if ($("#number").val() == "" || !($("#number").val().includes("+380")) || $("#number").val().length != 13) {
            numberForm.find(".has-error").attr("class", "status");
            numberForm.find(".has-success").attr("class", "status");
            numberForm.find(".status").attr("class", "has-error");
            numberForm.find(".help-block").css("display", "block");
        } else {
            numberForm.find(".has-error").attr("class", "status");
            numberForm.find(".has-success").attr("class", "status");
            numberForm.find(".help-block").css("display", "none");
            numberForm.find(".status").attr("class", "has-success");
        }
    });
    
    $('#btn-add-advert').click(function(){
        var error = false;
        if($("#name").val() == "" || $("#personName").val() == "" || /[0-9]/.test($("#personName").val()) || $("#number").val() == "" || !($("#number").val().includes("+380")) || $("#number").val().length != 13){
            error = true;
        }
        if (!($("#name").val())) {
            nameForm.find(".has-error").attr("class", "status");
            nameForm.find(".has-success").attr("class", "status");
            nameForm.find(".status").attr("class", "has-error");
            nameForm.find(".help-block").css("display", "inline");
            error = true;
        }
        if(!($("#address").val())){
            addressForm.find(".has-error").attr("class", "status");
            addressForm.find(".has-success").attr("class", "status");
            addressForm.find(".status").attr("class", "has-error");
            addressForm.find(".help-block").css("display", "inline");
            error = true;
        }
        if (!($("#number").val())) {
            numberForm.find(".has-error").attr("class", "status");
            numberForm.find(".has-success").attr("class", "status");
            numberForm.find(".status").attr("class", "has-error");
            numberForm.find(".help-block").css("display", "inline");
            error = true;
        }
        if (!($("#personName").val())) {
            personNameForm.find(".has-error").attr("class", "status");
            personNameForm.find(".has-success").attr("class", "status");
            personNameForm.find(".status").attr("class", "has-error");
            personNameForm.find(".help-block").css("display", "inline");
            error = true;
        }
        if(!error){
        var advert = {
            category: $("#category").val(),
            name: $("#name").val(),
            description: $("#description").val(),
            address: $("#address").val(),
            date: $("#date").val(),
            personName: $("#personName").val(),
            number: $("#number").val()
        }
        Advertisements.addAdvert(advert);
        window.location = 'index.html';
        }
    });
});