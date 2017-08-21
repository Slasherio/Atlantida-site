/********FILTRATION(MIXITUP)********/
var containerEl = document.querySelector('.mix-content');

var mixer = mixitup(containerEl, {
    animation: {
        enable: true,
        effects: 'scale fade',
        duration: 1000
    }
});
/********SLIDER********/

var swiper = new Swiper('.swiper-container', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 1,
    loop: true
});

/********GOOGLE MAP API********/
function initMap() {

    // Create a new StyledMapType object, passing it an array of styles,
    // and the name to be displayed on the map type control.
    var styledMapType = new google.maps.StyledMapType(
        [{
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{
                    color: '#e9e9e9'
                }, {
                    lightness: 17
                }]
            },
            {
                featureType: 'landscape',
                elementType: 'geometry',
                stylers: [{
                    color: '#f5f5f5'
                }, {
                    lightness: 20
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.fill',
                stylers: [{
                    color: '#b5b5b5'
                }, {
                    lightness: 17
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#b5b5b5'
                }, {
                    lightness: 29
                }, {
                    weight: 0.2
                }]
            },
            {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [{
                    color: '#ffffff'
                }, {
                    lightness: 18
                }]
            },
            {
                featureType: 'road.local',
                elementType: 'geometry',
                stylers: [{
                    color: '#ffffff'
                }, {
                    lightness: 16
                }]
            },
            {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{
                    color: '#f5f5f5'
                }, {
                    lightness: 21
                }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{
                    color: '#dedede'
                }, {
                    lightness: 21
                }]
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [{
                    visibility: 'on'
                }, {
                    color: '#ffffff'
                }, {
                    lightness: 16
                }]
            },
            {
                elementType: 'labels.text.fill',
                stylers: [{
                    saturation: 36
                }, {
                    color: '#333333'
                }, {
                    lightness: 40
                }]
            },
            {
                elementType: 'labels.icon',
                stylers: [{
                    visibility: 'off'
                }]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{
                    color: '#f2f2f2'
                }, {
                    lightness: 19
                }]
            },
            {
                featureType: 'administrative',
                elementType: 'geometry.fill',
                stylers: [{
                    color: '#fefefe'
                }, {
                    lightness: 20
                }]
            },
            {
                featureType: 'administrative',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#fefefe'
                }, {
                    lightness: 17
                }, {
                    weight: 1.2
                }]
            }
        ], {
            name: 'Styled Map'
        });

    // Create a map object, and include the MapTypeId to add
    // to the map type control.
    var uluru = {
        lat: 51.5220535,
        lng: 0.0419289
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        center: uluru,
        zoom: 15,
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                'styled_map'
            ]
        }
    });

    //Add marker
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: '../img/icons/location-icon.png'
    });

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
}

/********SMOOTH SCROLL********/
$(document).ready(function() {
    $('.top-panel__navigation a').click(function(e) {
        var link = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(link).offset().top
        }, 2000);
        e.preventDefault();
    });
});