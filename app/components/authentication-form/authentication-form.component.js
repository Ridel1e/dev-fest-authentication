/**
 * Created by ruslansalahov on 18/11/2016.
 */

import template from './authentication-form.html';
import './authentication-form.less';

const component = {
  template,
  controller: class AuthenticationFormController {
    constructor($state, authenticationService) {
      'ngInject';
      this.$state = $state;
      this.authenticationService = authenticationService;
    }

    register(email) {
      this.authenticationService
        .register(email)
        .then((response) => console.log(response))
        .then(this._registerSuccess.bind(this))
        .catch(this._registerError.bind(this));
    }

    _registerSuccess () {
      this.$state.go('authSuccess');
    }

    _registerError () {
      this.$state.go('authError');
    }
  }
};

export default component;