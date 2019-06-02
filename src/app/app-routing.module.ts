import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IconComponent } from './icon/icon.component';
import { ButtonComponent } from './button/button.component';

const routes: Routes = [
  {
    path: '',
    component: ButtonComponent,
    data: {title: 'Buttons'}
  },
  {
    path: 'icons',
    component: IconComponent,
    data: {title: 'Icons'}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
