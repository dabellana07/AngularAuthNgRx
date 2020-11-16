import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
    selector: 'auth-signout-callback',
    template: `<div></div>`
})
export class SignOutRedirectCallbackComponent implements OnInit {
    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    ngOnInit() {
        this.authService.completeLogout().then(_ =>
            this.router.navigate(['/'], { replaceUrl: true }));
    }
}