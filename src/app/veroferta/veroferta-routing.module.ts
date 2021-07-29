import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerofertaPage } from './veroferta.page';

const routes: Routes = [
  {
    path: '',
    component: VerofertaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerofertaPageRoutingModule {}
