/**
 * Created by ruslansalahov on 19/11/2016.
 */

const InitActions = ($transitions, authenticationService) => {
  'ngInject';

  const registeredUsersHook = ($transition$) => {
    if(authenticationService.isRegistered()) {
      const $state = $transition$.router.stateService;

      return $state.target('authSuccess');
    }
  };

  $transitions.onStart({ to: 'main' }, registeredUsersHook);
  $transitions.onStart({ to: 'authError' }, registeredUsersHook);

  $transitions.onStart({ to: 'authSuccess' }, ($transition$) => {
    if(!authenticationService.isRegistered()) {
      const $state = $transition$.router.stateService;

      return $state.target('main');
    }
  })
};

export default InitActions;