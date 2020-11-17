import { Injectable } from "@angular/core";
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthApiActions, AuthPageActions } from './actions';
import { AuthService } from 'src/app/core/service/auth.service';
import { from, of } from 'rxjs';
import { Router } from '@angular/router';
import { createAction } from '@ngrx/store';

@Injectable()
export class AuthEffects {
    constructor(
        private readonly actions$: Actions,
        private readonly authService: AuthService,
        private readonly router: Router) { }

    login$ = createEffect(() => 
        this.actions$.pipe(
            ofType(AuthPageActions.login),
            tap(_ => this.authService.login())
        ), { dispatch: false }
    );

    logout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthPageActions.logout),
            tap(_ => this.authService.logout())
        ), { dispatch: false }
    );

    completeLogin$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthPageActions.completeLogin),
            mergeMap(() => from(this.authService.completeLogin()).pipe(
                map(_ => AuthApiActions.completeLoginSuccess()),
                catchError(error => of(AuthApiActions.completeLoginFailure(error))))
            )
        );
    });

    completeLogout$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthPageActions.completeLogout),
            mergeMap(() => from(this.authService.completeLogout()).pipe(
                map(_ => AuthApiActions.completeLogoutSuccess()),
                catchError(error => of(AuthApiActions.completeLogoutFailure(error))))
            )
        )
    })

    completeLoginSuccess$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthApiActions.completeLoginSuccess),
            tap(_ => this.router.navigate(['/']))
        )
    }, {dispatch: false});

    completeLogoutSuccess$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthApiActions.completeLogoutSuccess),
            tap(_ => this.router.navigate(['/auth']))
        )
    }, { dispatch: false });
}