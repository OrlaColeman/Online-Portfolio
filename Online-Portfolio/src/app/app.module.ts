import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponentsModule } from './body-components/body-components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BodyComponentsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
