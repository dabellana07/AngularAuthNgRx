import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/core/service/auth.service';
import { AuthPageActions } from '../state/actions';
import { State } from '../state/auth.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  login() {
    this.store.dispatch(AuthPageActions.login());
  }

}
