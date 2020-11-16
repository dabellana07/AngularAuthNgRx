import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
    selector: 'auth-signin-callback',
    template: `<div></div>`
})
export class SignInRedirectCallbackComponent implements OnInit {
    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    ngOnInit() {
        this.authService.completeLogin().then(_ =>
            this.router.navigate(['/'], { replaceUrl: true}));
    }
}