const RandomCountryUrl = "RandomCountry.html";
let countries = [];



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



let handleErrors = function (response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
};


let giveRandomCountry = function () {
    let RandomNumber = Math.floor((Math.random() * 999) + 1);
    fetch("https://restcountries.eu/rest/v2/callingcode/" + RandomNumber)
        .then(handleErrors)
        .then(response => response.json())
        .then(res => {
            console.log(res);
            let landeke = {};
            landeke.naam = res[0].name;
            landeke.capital = res[0].capital;
            landeke.population = res[0].population;
            landeke.region = res[0].region;
            console.log(res[0].name);
            $('#Country').append("The great " + res[0].name);
            saveCountry(landeke);
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
            let countryCode = res[0].alpha2Code;
            document.getElementById("tickets").onclick = function () {
                let numberOfAdults = document.getElementById('numberOfAdults').value;
                let numberOfChildren = document.getElementById('numberOfChildren').value;
                let dateDeparture = document.getElementById('dateDeparture').value;

                let dateArrival = document.getElementById('dateArrival').value;
                location.href = "https://www.skyscanner.net/transport/flights/brus/" + countryCode + "/" + dateDeparture + "/" + dateArrival + "/?adults=" + numberOfAdults + "&children=" + numberOfChildren + "&adultsv2=" + numberOfAdults + "&childrenv2=" + numberOfChildren + "&infants=0&cabinclass=economy&rtn=1&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false&ref=home";
            };



            let locatie1 = "https://www.google.com/maps/embed/v1/place?q=" + res[0].latlng[0] + "%2C" + res[0].latlng[1] + "&key=AIzaSyB2VV0_vn7reEhn-N6ULWQKB8sxJzl_-zQ";
            $('#locatie').attr("src", locatie1);
        }).catch(error => {
        giveRandomCountry();
    })
};


let saveCountry = function (country) {
     if((typeof Storage) !== void(0)) {
        countries.push(country);
        localStorage.setItem('countries', JSON.stringify(countries));
     }
};


let getCountry = function(){
    if((typeof Storage)  !== void(0)) {
        let localCountries = JSON.parse(localStorage.getItem('countries'));

        if( localCountries  !== null) {
            countries = localCountries;
            displayCountries();
        }
    }

};

let displayCountries = function () {
    let numberOfRandomCountries = countries.length;
    if(numberOfRandomCountries > 0){
        let list = '<ul>';
        for(let i =0; i < numberOfRandomCountries; i++) {
            list += '<section id="historyList"> <h3>'+ countries[i].naam +'</h3>' +
                '<li> ==> Capital: '+ countries[i].capital + '</li>' +
                '<li> ==> Region: '+ countries[i].region + '</li>' +
                '<li> ==> Population: '+ countries[i].population + '</li></section>';
        }

        list += '</ul>';
        $('#historyList').append(list);
    }
};


$('document').ready(function () {
    //createANewStorage();
    getCountry();
    if (document.URL.indexOf(RandomCountryUrl) > 1) {
        giveRandomCountry();
    }

});