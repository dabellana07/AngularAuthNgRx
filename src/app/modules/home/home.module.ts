import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [],
  imports: [
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
