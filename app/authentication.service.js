/**
 * Created by ruslansalahov on 18/11/2016.
 */

class AuthenticationService {
  constructor ($http, $localStorage) {
    'ngInject';

    this.api = 'https://gdg-event-app.herokuapp.com';
    this.$http = $http;
    this.$localStorage = $localStorage;
  }

  register(email) {
    return this.$http
      .get(`${this.api}/find`, {
        params: { email: email },
        dataType: 'jsonp'
      })
      .then(this._setAuthToken.bind(this));
  }

  _setAuthToken () {
    this.$localStorage.auth = 'successful';
  }

  isRegistered () {
    return this.$localStorage.auth;
  }
}

export default AuthenticationService;