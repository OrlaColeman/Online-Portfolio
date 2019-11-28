import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponentsModule } from './body-components/body-components.module';
import { BodyModule } from './body/body.module';
import { LoaderModule } from './loader/loader.module';
import { LoadingScreenComponent } from './loader/loading-screen/loading-screen.component';
import { SocialModule } from './social/social.module';

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
    LoaderModule,,
    SocialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
