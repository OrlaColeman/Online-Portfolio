import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponentsModule } from './body-components/body-components.module';
import { BodyModule } from './body/body.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LoaderModule } from './loader/loader.module';
import { LoadingScreenComponent } from './loader/loading-screen/loading-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BodyComponentsModule,
    BodyModule,
    LoaderModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
