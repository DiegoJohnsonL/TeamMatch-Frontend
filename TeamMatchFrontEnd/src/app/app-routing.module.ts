import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrganizersComponent} from './page/organizers/organizers.component';

const routes: Routes = [
  { path: 'organizers', component: OrganizersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [OrganizersComponent];
