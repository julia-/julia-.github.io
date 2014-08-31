

function initialise () {
	scrollToFixed();
	// smoothScroll();
	pullDownMenu();
}

function scrollToFixed() {
	$('#main-nav').scrollToFixed({
		minWidth: 768,
        });
	$('#pulldown-menu').scrollToFixed({
		maxWidth: 767,
        });
}

// function smoothScroll(){
// 		$('a.menu').smoothScroll({
// 		easing: 'swing',
// 		speed: 600,
// 	});
// }

function pullDownMenu () {
	var pull = $('#pulldown-menu');
	menu = $('#main-nav');
	$(pull).on('click', function(e){
		menu.slideToggle();
	});
}

$(document).ready(initialise);


// --- GOOGLEMAP --- //

var myLatLng = new google.maps.LatLng(-33.863903, 151.20845);

function googleMapStyles() {
	var styles = [
    {
        "stylers": [
            {
                "hue": "#dd0d0d"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 100
            },
            {
                "visibility": "simplified"
            }
        ]
    }
    ];
	var styledMap = new google.maps.StyledMapType(styles,
		{name: "Styled Map"});
	var mapOptions = {
		center: myLatLng,
		zoom: 16,
		disableDefaultUI: true,
		navigationControl: false,
		mapTypeControl: false,
		scaleControl: false,
		draggable: false,
		scrollwheel: false,
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map-style']
		}
	};
	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		icon: 'images/bat.png'
	});

	var map = new google.maps.Map(document.getElementById('map-canvas'),
		mapOptions);
	map.mapTypes.set('map-style', styledMap);
	map.setMapTypeId('map-style');
	marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', googleMapStyles);



