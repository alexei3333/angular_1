import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ParseformComponent } from './components/parseform/parseform.component';
import { SecondformComponent } from './components/secondform/secondform.component';
import { AutoformComponent } from './components/autoform/autoform.component';
import { ContainerHolderComponent } from './components/container-holder/container-holder.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'parseform', component: ParseformComponent },
  { path: 'secondform', component: SecondformComponent },
  { path: 'autoform', component: AutoformComponent },
  { path: 'containers', component: ContainerHolderComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
