import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewPage} from './Newpage/newpage.component'
import {HomeComponent} from './Home/home.component'
import {LoginComponent} from './Login/login.component'

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch:'full'},
    { path: 'newpage', component: NewPage },
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent}
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
      RouterModule
   ] 
})
export class RoutingModule { };