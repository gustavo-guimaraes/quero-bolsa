var app = angular.module('app',['angular-iosui']);

app.controller('AppCtrl', function ($scope) {

    $scope.mapRadius = 10;

    // if HTML DOM Element that contains the map is found...
    if (document.getElementById('map-canvas')){

        // Coordinates to center the map
        var myLatlng = new google.maps.LatLng(-23.220697,-45.891254);

        // Other options for the map, pretty much selfexplanatory
        var mapOptions = {
            zoom: 8,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        // Attach a map to the DOM Element, with the defined settings
        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

        var marker=new google.maps.Marker({
            position:myLatlng,
        });

        marker.setMap(map);

        var circle = new google.maps.Circle({
            center:myLatlng,
            radius:10000,
            strokeColor:"#0000FF",
            strokeOpacity:0.8,
            strokeWeight:2,
            fillColor:"#0000FF",
            fillOpacity:0.1,
            map: map
        });

    }

    $scope.changeRadius = function () {
        circle.setRadius($scope.mapRadius*1000);
    }

});
