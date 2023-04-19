import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddGiftComponent } from './add-gift/add-gift.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddGiftComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AddGiftComponent
  ]
})
export class GiftsModule { }
