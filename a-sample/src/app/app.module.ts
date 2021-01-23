import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParseformComponent } from './components/parseform/parseform.component';
import { SecondformComponent } from './components/secondform/secondform.component';
import { HomeComponent } from './components/home/home.component';
import { NavMenuComponent } from './components/_layout/nav-menu/nav-menu.component';
import { FooterComponent } from './components/_layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ParseformComponent,
    SecondformComponent,
    HomeComponent,
    NavMenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
