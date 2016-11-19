/**
 * Created by ruslansalahov on 18/11/2016.
 */

import angular from 'angular';

import HeaderComponent from './header.component';

const module = angular
  .module('app.components.header', []);

module
  .component('dfHeader', HeaderComponent);

export default module.name;