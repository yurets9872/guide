function initialize() {
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
          center: new google.maps.LatLng(48.2920787, 25.9358367),
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          scrollwheel: false    
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
      }
      google.maps.event.addDomListener(window, 'load', initialize);