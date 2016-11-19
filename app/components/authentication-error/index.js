/**
 * Created by ruslansalahov on 19/11/2016.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import AuthenticationErrorComponent from './authentication-error.component';

const module = angular
  .module('app.components.authenticationError', [
    uiRouter
  ]);

module
  .component('dfAuthenticationError', AuthenticationErrorComponent);

export default module.name;