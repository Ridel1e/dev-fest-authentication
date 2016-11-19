/**
 * Created by ruslansalahov on 18/11/2016.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import AuthenticationFormComponent from './authentication-form.component';

const module = angular
  .module('app.components.authentication-form', [
    uiRouter
  ]);

module
  .component('dfAuthenticationForm', AuthenticationFormComponent);

export default module.name;