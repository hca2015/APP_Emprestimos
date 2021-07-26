import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovopedidoPageRoutingModule } from './novopedido-routing.module';

import { NovopedidoPage } from './novopedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NovopedidoPageRoutingModule
  ],
  declarations: [NovopedidoPage]
})
export class NovopedidoModule {}
