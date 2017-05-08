// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('app', ['ionic', 'app.controllers', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('login', {
    url: '/login',
    controller: 'loginCtrl',
    templateUrl: 'templates/login.html'
  })
  .state('signup', {
    url: '/signup',
    controller: 'signupCtrl',
    templateUrl: 'templates/signup.html'
  })
  .state('listkid', {
    url: '/listkid',
    controller: 'listKidCtrl',
    templateUrl: 'templates/listKid.html'
  })
  .state('addkid', {
    url: '/addkid',
    controller: 'addKidCtrl',
    templateUrl: 'templates/addKid.html'
  })
  .state('home', {
    url: '/home',
    controller: 'homeCtrl',
    templateUrl: 'templates/home.html'
  })
  .state('task', {
    url: '/task',
    controller: 'taskCtrl',
    templateUrl: 'templates/task.html'
  })
  .state('registered', {
    url: '/registered',
    controller: 'registeredCtrl',
    templateUrl: 'templates/registered.html'
  })
  .state('profile', {
    url: '/profile',
    controller: 'profileCtrl',
    templateUrl: 'templates/profile.html'
  })
  $urlRouterProvider.otherwise('/login');

})