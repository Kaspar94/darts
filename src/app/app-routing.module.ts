import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';

const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch:"full" },
  { path: 'home', component: HomeComponentComponent },
  { path: 'players', component: UserManagementComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
