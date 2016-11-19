/**
 * Created by ruslansalahov on 18/11/2016.
 */

import angular from 'angular';

import HeaderModule from './header';
import AuthenticationFormModule from './authentication-form';
import AuthenticationSuccessModule from './authentication-success';
import AuthenticationErrorModule from './authentication-error';

const module = angular
  .module('app.components', [
    HeaderModule,
    AuthenticationFormModule,
    AuthenticationSuccessModule,
    AuthenticationErrorModule
  ]);

export default module.name;