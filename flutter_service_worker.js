'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c1056392edf2b48585794613d99152e7",
"assets/AssetManifest.bin.json": "958c46a173a53be5e3a19257745b7cfd",
"assets/AssetManifest.json": "b05c33548c5f188af7d1f7577eef4958",
"assets/assets/icons/5stars.png": "64414a46cea205e814c51063cd1a2d7c",
"assets/assets/icons/ama.webp": "2ec44153834bec9dc9d7d3646dd06537",
"assets/assets/icons/artboard___16.jpg": "9d7a9564be5ed4caed4053ffa97508e3",
"assets/assets/icons/artboard___20.jpg": "b01bdb6567bc7967e59d2ce458e00ecb",
"assets/assets/icons/bit.png": "a8ce668e4968530e3dbcfabc703ab457",
"assets/assets/icons/etoro-1.png": "e0cbad2faa2caf3c596913c843d78039",
"assets/assets/icons/Group-10.png": "f88074ce29332512bf1767b4ad1e9d4e",
"assets/assets/icons/Group-11.png": "0b38986f61ace68bed31a862381e7cd9",
"assets/assets/icons/Group-2.png": "74ec017aa609ee01e2d8f4a7a6256195",
"assets/assets/icons/Group-26.png": "106f6525f1dca9bb64f0357993b7434c",
"assets/assets/icons/Group-3.png": "270694f37f3be80233efb77f4b81b9e9",
"assets/assets/icons/Group-4.png": "16feff738a9418de8b97a881dbb4818c",
"assets/assets/icons/Group-5.png": "f8c71a418df7c569ec85245a700ac584",
"assets/assets/icons/Group-50.png": "da7d068fd6233e7d3cb3d9d730752736",
"assets/assets/icons/home.png": "4453bb7f355ca8d9433667a2f535e5bb",
"assets/assets/icons/logo.png": "eb647d16296956c9a6918ed2a679b65d",
"assets/assets/icons/meta.jpg": "b8156cadd22a846169772b3d4b46d6d6",
"assets/assets/icons/micro.png": "86cba80b9893741fe9a7924314dccbc6",
"assets/assets/icons/OBO.png": "498cb3b3b81bba33da12d9bef0861851",
"assets/assets/icons/paypal.png": "5ea09af89f61e7ba40d0d82c6f36dbf3",
"assets/assets/icons/plus.png": "dbbb4f92d7b49c682fc5529ba08d2bb3",
"assets/assets/icons/skrill.png": "3af27aaccb7082280ec1e77d5fed927a",
"assets/assets/icons/Tesla.png": "5685416d205acbf6ec7d3d840b9538fb",
"assets/assets/icons/wire-transfer.png": "d6404662c5b68815a6d66603ff5134e6",
"assets/assets/svg/amazon-2.svg": "2daf1c380372cf270a4ffe48e6bdde03",
"assets/assets/svg/Meta.svg": "df4f1209d373e4365ac749fe88bcbd11",
"assets/assets/svg/microsoft-2.svg": "0ef26346dc9ca56565a3e5c2426cf3d1",
"assets/assets/svg/tesla-2.svg": "56cef9002685f7b215b684526f5781f8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a7e8777eb147624b84a30c2e9259b512",
"assets/NOTICES": "79f34f22014319016cd40c5538758905",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "eb647d16296956c9a6918ed2a679b65d",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "672555f442c1148212837454109458dc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "41be1c7ad2c5e9e497b697e21d3e1b1f",
"/": "41be1c7ad2c5e9e497b697e21d3e1b1f",
"main.dart.js": "a50b17b1f3027adb3a99414d28d5074e",
"manifest.json": "2c4514abe85f0f23aa07707928415f4f",
"version.json": "357bec810869c44b0c2b1576283e1169"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
