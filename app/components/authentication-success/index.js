/**
 * Created by ruslansalahov on 19/11/2016.
 */

import angular from 'angular';

import AuthenticationSuccessComponent from './authentication-success.component';

const module = angular
  .module('app.components.authenticationSuccess', []);

module
  .component('dfAuthenticationSuccess', AuthenticationSuccessComponent);

export default module.name;