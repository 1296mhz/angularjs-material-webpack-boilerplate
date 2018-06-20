import angular from 'angular';
import '@uirouter/angularjs';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';

import '../../node_modules/angular-material/angular-material.css';
import '../style/app.css';
import HomeModule from './components/home/home.module';
import app from './app.directive.js';
import AppCtrl from './app.controller.js';

const MODULE_NAME = 'app';
AppCtrl.$inject = ['$mdSidenav'];

angular.module(MODULE_NAME, ['ui.router', 'ngMaterial', 'ngMessages', 'ngAnimate', 'ngAria', 'HomeModule'])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl)
  .config(($stateProvider) => {

    let rootState = {
      name: 'root',
      url: '/',
      template: '<a>root</a>'
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

  })

export default MODULE_NAME;