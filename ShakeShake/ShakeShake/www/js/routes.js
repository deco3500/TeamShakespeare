angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('homepage', {
    url: '/page7',
    templateUrl: 'templates/homepage.html',
    controller: 'homepageCtrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.login'
      2) Using $state.go programatically:
        $state.go('tabsController.login');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab3/page10
      /page1/tab6/page10
  */
  .state('tabsController.login', {
    url: '/page10',
    views: {
      'tab3': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      },
      'tab6': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.shakingPage'
      2) Using $state.go programatically:
        $state.go('tabsController.shakingPage');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page12
      /page1/tab3/page12
      /page1/tab6/page12
  */
  .state('tabsController.shakingPage', {
    url: '/page12',
    views: {
      'tab2': {
        templateUrl: 'templates/shakingPage.html',
        controller: 'shakingPageCtrl'
      },
      'tab3': {
        templateUrl: 'templates/shakingPage.html',
        controller: 'shakingPageCtrl'
      },
      'tab6': {
        templateUrl: 'templates/shakingPage.html',
        controller: 'shakingPageCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.top5'
      2) Using $state.go programatically:
        $state.go('tabsController.top5');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page8
      /page1/tab3/page8
      /page1/tab6/page8
  */
  .state('tabsController.top5', {
    url: '/page8',
    views: {
      'tab2': {
        templateUrl: 'templates/top5.html',
        controller: 'top5Ctrl'
      },
      'tab3': {
        templateUrl: 'templates/top5.html',
        controller: 'top5Ctrl'
      },
      'tab6': {
        templateUrl: 'templates/top5.html',
        controller: 'top5Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.newsA'
      2) Using $state.go programatically:
        $state.go('tabsController.newsA');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page9
      /page1/tab4/page9
      /page1/tab3/page9
      /page1/tab6/page9
  */
  .state('tabsController.newsA', {
    url: '/page9',
    views: {
      'tab2': {
        templateUrl: 'templates/newsA.html',
        controller: 'newsACtrl'
      },
      'tab4': {
        templateUrl: 'templates/newsA.html',
        controller: 'newsACtrl'
      },
      'tab3': {
        templateUrl: 'templates/newsA.html',
        controller: 'newsACtrl'
      },
      'tab6': {
        templateUrl: 'templates/newsA.html',
        controller: 'newsACtrl'
      }
    }
  })

  .state('tabsController.accountSettings', {
    url: '/page11',
    views: {
      'tab3': {
        templateUrl: 'templates/accountSettings.html',
        controller: 'accountSettingsCtrl'
      }
    }
  })

  .state('tabsController.favourite', {
    url: '/page13',
    views: {
      'tab4': {
        templateUrl: 'templates/favourite.html',
        controller: 'favouriteCtrl'
      }
    }
  })

  .state('page', {
    url: '/page14',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

$urlRouterProvider.otherwise('/page7')

  

});