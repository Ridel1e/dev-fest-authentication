/**
 * Created by ruslansalahov on 18/11/2016.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'ngstorage';
import ngMessages from 'angular-messages';
import angularMaterial from 'angular-material';

import Config from './app.config';
import Routes from './app.routes';
import InitActions from './app.run';
import AuthenticationService from './authentication.service';
import AppComponent from './app.component';

import ComponentsModule from './components';

const module = angular
  .module('app', [
    uiRouter,
    ngMessages,
    'ngStorage',
    angularMaterial,
    ComponentsModule
  ]);

module
  .component('dfApp', AppComponent)
  .service('authenticationService', AuthenticationService)
  .config(Config)
  .config(Routes)
  .run(InitActions);

export default module.name;