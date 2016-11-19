/**
 * Created by ruslansalahov on 18/11/2016.
 */

const routes = ($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider
    .otherwise('/');

  $stateProvider
    .state('main', {
      url: '/',
      component: 'dfAuthenticationForm'
    })
    .state('authSuccess', {
      url: '/auth-success',
      component: 'dfAuthenticationSuccess'
    })
    .state('authError', {
      url: '/auth-error',
      component: 'dfAuthenticationError'
    })
};

export default routes;