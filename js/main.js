

function initialise () {
	scrollToFixed();
	smoothScroll();
	pullDownMenu();
	drawSixtyFour();

}

function scrollToFixed() {
	$('#main-nav').scrollToFixed({
		minWidth: 768,
        });
	$('#pulldown-menu').scrollToFixed({
		maxWidth: 767,
        });
	$('#contact').scrollToFixed({
		bottom: 0,
        });
}

function smoothScroll(){
		$('a.menu').smoothScroll({
		easing: 'swing',
		speed: 600,
	});
}

function pullDownMenu () {
	var pull = $('#pulldown-menu');
	menu = $('nav');
	$(pull).on('click', function(e){
		menu.slideToggle();
	});
}

// --- DRAW --- //

function drawSixtyFour() {
	var participants = {
		teams : [
			["Master", "Jasmine"],
			["Amy", "Willow"],
			["Angel", "Spike"],
			["Veruca", "Tara"],
			["Cecily", "Anya"],
			["Giles", "Wesley"],
			["Sweet", "Skip"],
			["Connor", "Dawn"],
			["Kennedy", "Adam"],
			["Oz", "Xander"],
			["Parker", "Rona"],
			["Rack", "Doc"],
			["Eve", "Marcus"],
			["Riley", "Silas"],
			["Wilkins", "Chao-ahn"],
			["Forrest", "Caleb"],
			["Amanda", "Vi"],
			["Doyle", "Cordelia"],
			["Willy", "Whistler"],
			["Gunn", "Cassie"],
			["Jonathon", "Andrew"],
			["Ford", "Larry"],
			["Clem", "Lorne"],
			["Sunday", "Ethan"],
			["Lilah", "Lindsey"],
			["Buffy", "Faith"],
			["Harmony", "Darla"],
			["Joyce", "Jenny"],
			["Glory", "Kendra"],
			["Illyria", "Fred"],
			["Drusilla", "Angelus"],
			["Snyder", "Robert"]
			],
		results : [[
			[[3, 5], [2, 4], [6, 3], [2, 3], [1, 5], [5, 3], [7, 2], [1, 2],[3, 5], [2, 4], [6, 3], [2, 3], [1, 5], [5, 3], [7, 2], [1, 2],[3, 5], [2, 4], [6, 3], [2, 3], [1, 5], [5, 3], [7, 2], [1, 2], [3, 5], [2, 4], [6, 3], [2, 3], [1, 5], [5, 3], [7, 2], [1, 2]],
				[[3, 8],[5, 3], [7, 2], [1, 2],[3, 8],[5, 3], [7, 2], [1, 2],[3, 8],[5, 3], [7, 2], [1, 2], [3, 8], [5, 3], [7, 2], [1, 2]],
				[[5, 3], [2, 1], [5, 3], [2, 1], [5, 3], [2, 1], [5, 3], [2, 1]],
				[[7, 2], [2, 1], [5, 3], [2, 1]],
				[[7, 2], [2, 1]],
				[[2, 1], [7, 6]]
			]]
		};
		$('#bracket').bracket({init: participants});
	}


$(document).ready(initialise);


// --- GOOGLEMAP --- //

var myLatLng = new google.maps.LatLng(-33.880446, 151.200346);

function googleMapStyles() {
	var styles = [
	{
		"stylers": [
		{ "hue": "#ff0000" },
		{ "saturation": 100 },
		{ "gamma": 0.7 }
		]
	}
	];
	var styledMap = new google.maps.StyledMapType(styles,
		{name: "Styled Map"});
	var mapOptions = {
		center: myLatLng,
		zoom: 16,
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

