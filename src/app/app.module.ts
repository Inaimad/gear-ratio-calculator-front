import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ManualComponent } from './manual/manual.component';
import { AutomaticComponent } from './automatic/automatic.component';
import { AppRoutingModule } from './/app-routing.module';
import { ResultComponent } from './result/result.component';
import { NavbarComponent } from './navbar/navbar.component';
import {WheelService} from './service/wheel.service';
import {HttpModule} from '@angular/http';
import {ResultService} from './service/result.service';
import {CarService} from './service/car.service';

@NgModule({
  declarations: [
    AppComponent,
    ManualComponent,
    AutomaticComponent,
    ResultComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [WheelService, ResultService, CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
