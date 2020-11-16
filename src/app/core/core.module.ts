import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { throwIfAlreadyLoaded } from './guard/module-import.guard';
import { AuthGuard } from './guard/auth.guard';
import { AuthService } from './service/auth.service';



@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    SharedModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
