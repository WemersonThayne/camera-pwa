# camera-pwa

Create project:
		-> ng new open-camera-pwa
Install dependenci http-server:
		-> npm install -g http-server

build app mode prod with:
		->ng build --prod
run app with 
	ng serve --host=ip or http-server dist/open-camera-pwa

For that you need to check two files in the folder one is "ngsw-config.json" , "manifest.json"

There is a  "ngsw-config.json" files that specifies which files and data URLs 
the Angular service worker should cache and how it 
should update the cached files and data. The file will include configurations mentioned in the below code:
 {
  "index": "/index.html",
  "assetGroups": [
    {
      "name": "app",
      "installMode": "prefetch",
      "resources": {
        "files": [
          "/favicon.ico",
          "/index.html",
          "/*.css",
          "/*.js"
        ]
      }
    }, {
      "name": "assets",
      "installMode": "lazy",
      "updateMode": "prefetch",
      "resources": {
        "files": [
          "/assets/**"
        ]
      }
    }
  ]
}

create file manifest.json on src with content
{
  "name": "pwa-example",
  "short_name": "pwa-example",
  "theme_color": "#1976d2",
  "background_color": "#fafafa",
  "display": "standalone",
  "scope": "/",
  "start_url": "/",
  "icons": [
    {
      "src": "assets/icons/icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    {
      "src": "assets/icons/icon-96x96.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "assets/icons/icon-128x128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "assets/icons/icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "assets/icons/icon-152x152.png",
      "sizes": "152x152",
      "type": "image/png"
    },
    {
      "src": "assets/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "assets/icons/icon-384x384.png",
      "sizes": "384x384",
      "type": "image/png"
    },
    {
      "src": "assets/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}

Add in index.html the line:   <link rel="manifest" href="manifest.json">

Add in angular.json on assents add line: "src/manifest.json"
 


npm install --save @capacitor/core @capacitor/cli
npx cap init


npm install -g firebase-tools

firebase login
firebase init
firebase deploy
	
