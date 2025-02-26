// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello.component';
import { ListComponent } from './list.component';

const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'list', component: ListComponent },
  { path: '', redirectTo: '/hello', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
