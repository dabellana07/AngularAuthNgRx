import { createAction } from '@ngrx/store';

export const login = createAction(
    '[Login Page] Login'
);

export const logout = createAction(
    '[Home Page] Logout'
);

export const completeLogin = createAction(
    '[SignInCallback Page] Complete Login'
);

export const completeLogout = createAction(
    '[SignOutCallback Page] Complete Logout'
);