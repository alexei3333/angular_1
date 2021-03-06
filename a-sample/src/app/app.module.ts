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
import { ChildOneContainerComponent } from './components/sub/child-one-container/child-one-container.component';
import { ContainerHolderComponent } from './components/container-holder/container-holder.component';
import { AjaxlistComponent } from './components/crud/ajaxlist/ajaxlist.component';
import { AjaxdetailComponent } from './components/crud/ajaxdetail/ajaxdetail.component';
import { HttpClientModule } from '@angular/common/http';
import { AjaxDetailItemComponent } from './components/crud/ajax-detail-item/ajax-detail-item.component';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParseformComponent,
    SecondformComponent,
    HomeComponent,
    NavMenuComponent,
    FooterComponent,
    AutoformComponent,
    ChildOneComponent,
    ChildOneContainerComponent,
    ContainerHolderComponent,
    AjaxlistComponent,
    AjaxdetailComponent,
    AjaxDetailItemComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
