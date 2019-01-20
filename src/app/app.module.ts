import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ManualComponent } from './manual/manual.component';
import { AutomaticComponent } from './automatic/automatic.component';
import { AppRoutingModule } from './/app-routing.module';
import { ResultComponent } from './result/result.component';
import { NavbarComponent } from './navbar/navbar.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
