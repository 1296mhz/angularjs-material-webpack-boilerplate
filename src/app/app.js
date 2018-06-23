import angular from 'angular';
import '@uirouter/angularjs';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';

import '../../node_modules/angular-material/angular-material.css';
import '../style/app.css';
import app from './components/app/app.directive';
import AppCtrl from './components/app/app.controller';

import HomeModule from './components/home/home.module';
import UserCardModule from './components/userCard/userCard.module';

const MODULE_NAME = 'app';

AppCtrl.$inject = ['$mdSidenav'];

const deps = ['ui.router', 'ngMaterial', 'ngMessages', 'ngAnimate', 'ngAria', 'HomeModule', 'UserCardModule']

angular.module(MODULE_NAME, deps)
  .directive('app', app)
  .controller('AppCtrl', AppCtrl)
  .config((
    $stateProvider,
    $urlRouterProvider,
    $mdThemingProvider,
    $mdIconProvider) => {

    $urlRouterProvider.otherwise('/');
  
    $mdThemingProvider.theme('indigo')
      .primaryPalette('brown')
      .accentPalette('green');

    let rootState = {
      name: 'root',
      url: '/',
      template: require('./components/root/root.component.html')
    }

    let homeState = {
      name: 'home',
      url: '/home',
      component: 'homeComponent'
    }

    let aboutState = {
      name: 'about',
      url: '/about',
      template: '<h3>Its the UI-Router hello world app!</h3>'
    }

    $stateProvider.state(rootState);
    $stateProvider.state(homeState);
    $stateProvider.state(aboutState);

  });

export default MODULE_NAME;