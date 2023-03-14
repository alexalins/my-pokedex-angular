import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PageRoutingModule } from './routing.module';
import { DetailsComponent } from './details/details.component';
import { ErrorComponent } from './error/error.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [HomeComponent, DetailsComponent, ErrorComponent],
  imports: [
    CommonModule,
    PageRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
