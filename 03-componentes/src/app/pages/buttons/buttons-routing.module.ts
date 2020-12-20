import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

import { ButtonsPage } from './buttons.page';

const routes: Routes = [
  {
    path: '',
    component: ButtonsPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  exports: [RouterModule],
})
export class ButtonsPageRoutingModule {}
