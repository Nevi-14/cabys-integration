import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvoiceGeneratorPageRoutingModule } from './invoice-generator-routing.module';

import { InvoiceGeneratorPage } from './invoice-generator.page';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ComponentModule } from 'src/app/components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvoiceGeneratorPageRoutingModule,
    PipesModule,
    ComponentModule
  ],
  declarations: [InvoiceGeneratorPage]
})
export class InvoiceGeneratorPageModule {}
