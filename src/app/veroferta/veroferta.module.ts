import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerofertaPageRoutingModule } from './veroferta-routing.module';

import { VerofertaPage } from './veroferta.page';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlexLayoutModule,
    VerofertaPageRoutingModule
  ],
  declarations: [VerofertaPage]
})
export class VerofertaPageModule {}
