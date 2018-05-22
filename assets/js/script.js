const RandomCountryUrl = "RandomCountry.html";

// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker
//         .register('./service-worker.js', {scope : './../'})
//         .then(function (registration) {
//             console.log("Service Worker Registered", registration);
//         })
//         .catch(function (err) {
//             console.log("Service Worker Failed to Register", err);
//         })
// }
if (navigator.serviceWorker.controller) {
    console.log('[PWA Builder] active service worker found, no need to register')
} else {

//Register the ServiceWorker
    navigator.serviceWorker.register('pwabuilder-sw.js', {
        scope: './'
    }).then(function (reg) {
        console.log('Service worker has been registered for scope:' + reg.scope);
    });
}

// .catch(function (error) {
//     console.log(JSON.stringify(error));
// });

// var geefLand = function (e) {
//     //var RandomNumber = Math.floor((Math.random()*300)+1);
//     const url = 'https://restcountries.eu/rest/v2/callingcode/'+372;
//     fetch(url)
//         .then(function(response) {
//            console.log(JSON.parse(response));
//             console.log(response);
//             //console.log(myJson[0].name);
//             $('#Country').append("The great " + myJson[0].name);
//         })
//         .catch(function() {
//             console.log("Error")
//         });
// };
//
// geefLand();
// var geefLand= function() {
//     var RandomNumber = Math.floor((Math.random()*195)+1);
//     var landeke = countries[RandomNumber];
//     fetch("https://restcountries.eu/rest/v2/name/"+landeke)
//         .then(handleErrors)
//         .then(function (response) {
//             console.log(response);
//             console.log(response.type);
//             var myJson =response.json();
//             console.log(myJson);
//             console.log(myJson[0].name);
//         }).catch(function (error) {
//             console.log("error");
//             //geefLand();
//     });
// };


var handleErrors = function (response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
};


var geefLand = function () {
    var RandomNumber = Math.floor((Math.random() * 999) + 1);
    fetch("https://restcountries.eu/rest/v2/callingcode/" + RandomNumber)
        .then(handleErrors)
        .then(response => response.json())
        .then(res => {
            console.log(res);
            console.log(res[0].name);
            $('#Country').append("The great " + res[0].name);
            $('#name').append(res[0].name);
            $('#capital').append(res[0].capital);
            $('#flag').append("<img src=' " + res[0].flag + " ' alt='Country flag'>");
            $('#population').append(res[0].population);
            $('#region').append(res[0].region);
            let $resultaatString = res[0].currencies[0].name;
            const currenciesSymbol = res[0].currencies[0].symbol;
            if (currenciesSymbol != null) {
                $resultaatString += ` ( ${currenciesSymbol} )`;
            }
            $('#currencies').append($resultaatString);
            var code = res[0].alpha2Code;
            $('#tickets').append("<button class='button-one' onclick=' location.href= \" https://www.skyscanner.net/transport/flights/brus/SG/180526/180602/?adults=1&children=0&adultsv2=1&childrenv2=&infants=0&cabinclass=economy&rtn=1&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false&ref=home \" '>Look for tickets</button>")
            var locatie1 = "https://www.google.com/maps/embed/v1/place?q=" + res[0].latlng[0] + "%2C" + res[0].latlng[1] + "&key=AIzaSyB2VV0_vn7reEhn-N6ULWQKB8sxJzl_-zQ";
            $('#locatie').attr("src", locatie1);
        }).catch(error => {
        // console.error(error);
        // console.log("lol");
        geefLand();
    })
};


$('document').ready(function () {
    if (document.URL.indexOf(RandomCountryUrl) > 1) {
        geefLand();
    }
});
// var toonQuote = function (e) {
//     e.preventDefault();
//     $('#quote').empty();
//     $.ajax({
//         type: "GET", //-> http werkwoord
//         url: 'https://restcountries.eu/rest/v2/all'
//
//     }).done(function (data, textStatus, jqXHR) {
//         var zin = data.value;
//         $('#quote').append(zin);
//     }).fail(function (jqXHR, textStatus, errorThrown) {
//         $('#quote').append("Chuck Norris just encountered his first problem, please contact us so we can improve our site.");
//     });
// };
//
//
// var toonCategorieQuote = function (e) {
//     e.preventDefault();
//     $('#categorieQuote').empty();
//     var categorieke = $('#categories').val();
//     $.ajax({
//         type: "GET", //-> http werkwoord
//         url: 'https://api.chucknorris.io/jokes/random?category=' + categorieke
//
//     }).done(function (data, textStatus, jqXHR) {
//         var zin = data.value;
//         $('#categorieQuote').append("In the category ' " + categorieke + " ' we found this quote: <br> '" + zin + "'");
//     }).fail(function (jqXHR, textStatus, errorThrown) {
//         $('#categorieQuote').append("Chuck Norris just encountered his first problem, please contact us so we can improve our site.");
//     });
// };
//
//
// var toonFotos = function (e) {
//     e.preventDefault();
//     $('#foto').empty();
//     $('#info').empty();
//     var zoekTerm = $('#zoekterm').val().toLowerCase();
//     $('#opzoeking').html("U zocht op: " + zoekTerm + " Chuck Norris");
//     $.ajax({
//         url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=f91331ed66c0eb9e256e1068014cd5fe&text=chuck+norris+" + zoekTerm + "&has_geo=1&format=json&nojsoncallback=1",
//         dataType: "json"
//     }).done(function (data) {
//         var lengte = data.photos.total;
//         var randomGetal = Math.floor((Math.random() * lengte));
//         var foto = data.photos.photo[randomGetal].id;
//
//
//
//         $.ajax({
//             url: "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=f91331ed66c0eb9e256e1068014cd5fe&photo_id=" + foto + "&format=json&nojsoncallback=1"
//         }).done(function (data) {
//             $('#foto').append("<img src=' "+ data.sizes.size[1].source + " ' alt='Chuck Norris'>");
//         });
//         $.ajax({
//             url: "https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=f91331ed66c0eb9e256e1068014cd5fe&photo_id=" + foto + "&format=json&nojsoncallback=1"
//         }).done(function (data) {
//             var author = data.photo.owner.realname;
//             var titel = data.photo.title._content;
//             var lat = data.photo.location.latitude;
//             var long = data.photo.location.longitude;
//             var views = data.photo.views;
//
//
//             $('#info').html("Author: " + author + "<br>" + "Title: " + titel + "<br>" + "Times viewed: " + views + "<br>" + "Location: ");
//             var locatie1 = "https://www.google.com/maps/embed/v1/place?q=" + lat + "%2C" + long + "&key=AIzaSyB2VV0_vn7reEhn-N6ULWQKB8sxJzl_-zQ";
//             $('#locatie').attr("src", locatie1);
//         })
//
//
//     })
//         .fail(function (jqXHR, textStatus, errorThrown) {
//             $('#image').append("Chuck Norris just encountered his first problem, please contact us so we can improve our site.");
//         });
// };
//
//
// $(document).ready(function () {
//     $('#generate').on('click', toonQuote);
//     $('#submitQuote').on('click', toonCategorieQuote);
//     $('#submitFlickr').on('click', toonFotos);
// });