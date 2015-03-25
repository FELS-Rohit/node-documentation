// Ionic Starter App
var appVersion = '0.0.0';

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.hide();
    }
    // get application version
    //if (window.cordova && window.cordova.plugins.AppVersion) {
    cordova.getAppVersion(function(version) {
      appVersion = version;
    });
    //}

    if (window.Connection) {

      if (navigator.connection.type !== Connection.NONE) {
        if (window.plugins && window.plugins.AdMob) {
          var admob_key = device.platform == 'Android' ? 'ca-app-pub-2015513932539714/8188095420' : 'IOS_PUBLISHER_KEY';
          var admob = window.plugins.AdMob;
          admob.createBannerView(
            {
              'publisherId': admob_key,
              'adSize': admob.AD_SIZE.BANNER,
              'bannerAtTop': false
            },
            function() {
              admob.requestAd(
                { 'isTesting': false },
                function() {
                  admob.showAd(true);
                },
                function() { console.log('failed to request ad'); }
              );
            },
            function() { console.log('failed to create banner view'); }
          );
        }
      }
      else {
        window.plugins.AdMob.destroyBannerView();
      }
    }

  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('app', {
    url: '/app',
    abstract: true,
    controller: 'AppCtrl',
    templateUrl: 'templates/menu.html',
  })
  .state('app.stable', {
    url: '/stable',
    views: {
      'menuContent': {
        templateUrl: 'templates/stable/index.html'
      }
    }
  })
  .state('app.stable_page', {
    url: '/stable/:page',
    views: {
      'menuContent': {
        templateUrl: 'templates/page.html',
        controller: 'stableCtrl'
      }
    }
  })
  .state('app.style_guide', {
    url: '/style_guide',
    views: {
      'menuContent': {
        templateUrl: 'templates/style_guide.html'
      }
    }
  })

  .state('app.about', {
    url: '/about',
    views: {
      'menuContent': {
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/stable');
});
