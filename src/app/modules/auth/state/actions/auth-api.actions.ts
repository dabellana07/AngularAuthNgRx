import { createAction, props } from '@ngrx/store';

export const completeLoginSuccess = createAction(
    '[Auth Service] Complete Login Success'
);

export const completeLoginFailure = createAction(
    '[Auth Service] Complete Login Failure',
    props<{ error: string }>()
);

export const completeLogoutSuccess = createAction(
    '[Auth Service] Complete Logout Success'
);

export const completeLogoutFailure = createAction(
    '[Auth Service] Complete Logout Failure',
    props<{ error: string }>()
);