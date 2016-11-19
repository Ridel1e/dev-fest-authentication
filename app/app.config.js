/**
 * Created by ruslansalahov on 18/11/2016.
 */

const config = ($mdThemingProvider, $locationProvider, $httpProvider) => {
  'ngInject';

  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');

  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];

  $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
    .accentPalette('red');
};

export default config;