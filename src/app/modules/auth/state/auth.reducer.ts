import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { AuthApiActions } from './actions';
import * as AppState from '../../../state/app.state';

export interface State extends AppState.State {
    auth: AuthState;
}

export interface AuthState {
    isLoggedIn: boolean;
    error: string;
}

const initialState: AuthState = {
    isLoggedIn: false,
    error: ''
};

const getAuthFeatureState = createFeatureSelector<AuthState>('auth');

export const getIsLoggedIn = createSelector(
    getAuthFeatureState,
    state => state.isLoggedIn
);

export const authReducer = createReducer<AuthState>(
    initialState
);