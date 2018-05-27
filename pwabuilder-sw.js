"use strict";var precacheConfig=[["CountryHistory.html","6bd147cd6fc5993de6603673e65037a6"],["RandomCountry.html","07c4d13102a99c17901ac7c7b2362f4d"],["assets/css/reset.css","7ae9e88c9dc645e9999e4e3071dbf4a4"],["assets/css/screen.css","8a23807d4a67b22782389bac4547d280"],["assets/js/jquery-3.1.1.min.js","5b5a269bd363e0886c17d855c2aab241"],["assets/js/script.js","d99b35b20cccb6eef3a11c2a7ffa40a8"],["images/favicon/android-icon-144x144.png","c8863e0895c95b5ed4e59d559fc2a492"],["images/favicon/android-icon-192x192.png","8b61df496e606373ec3ebb839a32c363"],["images/favicon/android-icon-36x36.png","1619216fb6c92350349546163933a665"],["images/favicon/android-icon-48x48.png","2d4c47644f3d2d33f778797828072f2d"],["images/favicon/android-icon-72x72.png","012d63dd049b0fce02aa3a82154091f2"],["images/favicon/android-icon-96x96.png","3312722d96d39cd45d6b93e6fd3f394c"],["images/favicon/apple-icon-114x114.png","bfe169f301cdadafd8598627247bc0d1"],["images/favicon/apple-icon-120x120.png","dd2691af33744eba9ff0aca6d556fccb"],["images/favicon/apple-icon-144x144.png","c8863e0895c95b5ed4e59d559fc2a492"],["images/favicon/apple-icon-152x152.png","0b3ef11136a10828cee33e526c26df14"],["images/favicon/apple-icon-180x180.png","77622693ec11d93ffc57123600bcb4b5"],["images/favicon/apple-icon-57x57.png","6627c50cf9c40ba1ca74f7688b35a852"],["images/favicon/apple-icon-60x60.png","b263f15139063e8d79526d1d682829aa"],["images/favicon/apple-icon-72x72.png","012d63dd049b0fce02aa3a82154091f2"],["images/favicon/apple-icon-76x76.png","bdfce5bcc7991857e5f96485e1b0f787"],["images/favicon/apple-icon-precomposed.png","3c94cda6148833ccdbd9b7d9c495f2a0"],["images/favicon/apple-icon.png","3c94cda6148833ccdbd9b7d9c495f2a0"],["images/favicon/favicon-16x16.png","7e58a640016372d1e3e895ec767d226a"],["images/favicon/favicon-32x32.png","dfcfbf4ac6aa8e5fa90b0ea3a4b1e99e"],["images/favicon/favicon-96x96.png","3312722d96d39cd45d6b93e6fd3f394c"],["images/favicon/favicon.ico","f8a745c5b70a6d306fe2685363ef5ad1"],["images/favicon/icon-128x128.png","de6c3968063517843e3b4b0323ad6e92"],["images/favicon/icon-144x144.png","6336ebc05fd1a07c3694506eb1718567"],["images/favicon/icon-152x152.png","531bed113f4e97b800e397b9b9e900b7"],["images/favicon/icon-192x192.png","f8618ae1bf0ab2673986cd5bd7107165"],["images/favicon/icon-384x384.png","3974e265912cf60b273e3d884765e24c"],["images/favicon/icon-512x512.png","dfd6fa9c3439d0ee351aec710cb63d06"],["images/favicon/icon-72x72.png","aa1486f150669b56373b1d204beca6d9"],["images/favicon/icon-96x96.png","b02de1ea539a7bf3ee62f6e441bd80f1"],["images/favicon/ms-icon-144x144.png","c8863e0895c95b5ed4e59d559fc2a492"],["images/favicon/ms-icon-150x150.png","a2e684b2dab9015be86e645bcf764b9f"],["images/favicon/ms-icon-310x310.png","2a9ea87521eb61c6937a8f4aef6aadbc"],["images/favicon/ms-icon-70x70.png","07e6bc87f9bb05c4a2749aedba792009"],["index.html","883755e9b154a25a14c9547747f3d38f"]],cacheName="sw-precache-v3-TheGreatUnknown-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,s){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=s),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(s){return new Response(s,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,s,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(s)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,s){if(0===e.length)return!0;var a=new URL(s).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,s){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return s.every(function(s){return!s.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var s=e[0],a=e[1],c=new URL(s,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(s){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!s.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(s){if(!s.ok)throw new Error("Request for "+a+" returned a response with status "+s.status);return cleanResponse(s).then(function(s){return e.put(a,s)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var s=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!s.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var s,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(s=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),s=urlsToCacheKeys.has(a));!s&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(a=new URL("/index.html",self.location).toString(),s=urlsToCacheKeys.has(a)),s&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(s){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,s),fetch(e.request)}))}});
self.addEventListener('fetch', function(event) {
    if (event.request.method === 'GET') {
        event.respondWith(
            caches.open('sw-precache-v3-TheGreatUnknown').then(function(cache) {
                return cache.match(event.request).then(function (response) {
                    return response || fetch(event.request).then(function(response) {
                            cache.put(event.request, response.clone());
                            return response;
                        });
                });
            })
        );
    }
});