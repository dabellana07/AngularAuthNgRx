import { Injectable } from '@angular/core';
import { constants } from 'buffer';
import { UserManager } from 'oidc-client';

@Injectable()
export class AuthService {
  private userManager: UserManager;

  constructor() {
    const stsSettings = {
      authority: 'https://localhost:5001',
      client_id: 'interactive',
      redirect_uri: 'http://localhost:4200/signin-callback',
      scope: 'openid profile scope2',
      response_type: 'code',
      post_logout_redirect_uri: 'http://localhost:4200/signout-callback'
    };
    this.userManager = new UserManager(stsSettings);
  }

  isLoggedIn() {
    return this.userManager.getUser().then(user => {
      return !!user && !user.expired;
    });
  }

  login() {
    return this.userManager.signinRedirect();
  }

  logout() {
    this.userManager.signoutRedirect();
  }

  completeLogin() {
    return this.userManager.signinRedirectCallback();
  }

  completeLogout() {
    return this.userManager.signoutRedirectCallback();
  }

  getAccessToken() {
    return this.userManager.getUser().then(user => {
      if (!!user && !user.expired) {
        return user.access_token;
      } else {
        return null;
      }
    });
  }
}
