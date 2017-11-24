importScripts('serviceworker-cache-polyfill.js');

// self.onfetch = (e)=> {
// 	e.respondWith(new Response('hello sw'))
// }


var CACHE_NAME = 'my-site-cache-v1';
// The files we want to cache
var urlsToCache = [
  '/',
  '/style.css'
];

// Set the callback for the install step
self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
	    caches.open(CACHE_NAME)
	      .then(function(cache) {
	        console.log('Opened cache');
	        return cache.addAll(urlsToCache);
	      })
    );
});