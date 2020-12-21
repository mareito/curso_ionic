import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopOverPageRoutingModule } from './pop-over-routing.module';

import { PopOverPage } from './pop-over.page';
import { PopoverInfoComponent } from 'src/app/components/popover-info/popover-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopOverPageRoutingModule,
  ],
  declarations: [PopOverPage, PopoverInfoComponent]
})
export class PopOverPageModule {}
