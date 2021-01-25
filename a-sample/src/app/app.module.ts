import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParseformComponent } from './components/parseform/parseform.component';
import { SecondformComponent } from './components/secondform/secondform.component';
import { HomeComponent } from './components/home/home.component';
import { NavMenuComponent } from './components/_layout/nav-menu/nav-menu.component';
import { FooterComponent } from './components/_layout/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoformComponent } from './components/autoform/autoform.component';
import { ChildOneComponent } from './components/sub/child-one/child-one.component';

@NgModule({
  declarations: [
    AppComponent,
    ParseformComponent,
    SecondformComponent,
    HomeComponent,
    NavMenuComponent,
    FooterComponent,
    AutoformComponent,
    ChildOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
