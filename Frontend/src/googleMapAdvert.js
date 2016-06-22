$(function () {
    
   
    function initialize() {
        var mapProp = {
            center: new google.maps.LatLng(50.464379, 30.519131), 
            zoom: 13
        };
        var html_element = document.getElementById("googleMapAdvert");
        var map = new google.maps.Map(html_element, mapProp);

        var point = new google.maps.LatLng(50.464379, 30.519131);
        var marker = new google.maps.Marker({
            position: point,
            map: map,
            animation: google.maps.Animation.DROP,
        });  
    }

    google.maps.event.addDomListener(window, 'load', initialize);

});