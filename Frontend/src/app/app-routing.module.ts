import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// importancion de los componentes
import{Modulo1Component}from './components/modulo1/modulo1.component';
import {Page404Component} from './components/page404/page404.component';

const routes: Routes = [

  { path:'perfiles',component:Modulo1Component },
  {path:'404',component:Page404Component},
  {path:'**',redirectTo: '404',pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
