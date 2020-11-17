import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthPageActions } from '../../auth/state/actions';
import { State } from '../../auth/state/auth.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private store: Store<State>) { }

  logout() {
    this.store.dispatch(AuthPageActions.logout());
  }

}
