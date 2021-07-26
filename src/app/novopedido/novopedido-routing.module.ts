import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovopedidoPage } from './novopedido.page';

const routes: Routes = [
  {
    path: '',
    component: NovopedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovopedidoPageRoutingModule {}
