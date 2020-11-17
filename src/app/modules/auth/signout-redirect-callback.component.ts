import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/core/service/auth.service';
import { AuthPageActions } from './state/actions';
import { State } from './state/auth.reducer';

@Component({
    selector: 'auth-signout-callback',
    template: `<div></div>`
})
export class SignOutRedirectCallbackComponent implements OnInit {
    constructor(private store: Store<State>) {}

    ngOnInit() {
        this.store.dispatch(AuthPageActions.completeLogout());
    }
}