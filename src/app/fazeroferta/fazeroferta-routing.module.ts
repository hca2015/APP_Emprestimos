import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FazerofertaPage } from './fazeroferta.page';

const routes: Routes = [
  {
    path: '',
    component: FazerofertaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FazerofertaPageRoutingModule {}
