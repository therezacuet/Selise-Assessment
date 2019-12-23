import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TreeComponentComponent} from './tree-component/tree-component.component';


const routes: Routes = [
  {
    path:'',
    redirectTo: 'tree',
    pathMatch:'full'
  },
  {
    path:'tree',
    component: TreeComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
