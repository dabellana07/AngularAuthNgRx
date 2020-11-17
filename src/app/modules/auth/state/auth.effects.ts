import { Injectable } from "@angular/core";
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthApiActions, AuthPageActions } from './actions';
import { AuthService } from 'src/app/core/service/auth.service';
import { from, Observable, of } from 'rxjs';
import { Router } from '@angular/router';

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

    completeLogin$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthPageActions.completeLogin),
            mergeMap(() => from(this.authService.completeLogin()).pipe(
                map(_ => AuthApiActions.completeLoginSuccess()),
                catchError(error => of(AuthApiActions.completeLoginFailure(error))))
            )
        );
    });

    completeLoginSuccess = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthApiActions.completeLoginSuccess),
            tap(_ => this.router.navigate(['/']))
        )
    }, {dispatch: false});
}