import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdenesInternacionalesPageRoutingModule } from './ordenes-internacionales-routing.module';

import { OrdenesInternacionalesPage } from './ordenes-internacionales.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdenesInternacionalesPageRoutingModule,
    PipesModule
  ],
  declarations: [OrdenesInternacionalesPage]
})
export class OrdenesInternacionalesPageModule {}
