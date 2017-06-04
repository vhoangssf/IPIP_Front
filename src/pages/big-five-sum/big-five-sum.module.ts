import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BigFiveSumPage } from './big-five-sum';

@NgModule({
  declarations: [
    BigFiveSumPage,
  ],
  imports: [
    IonicPageModule.forChild(BigFiveSumPage),
  ],
  exports: [
    BigFiveSumPage
  ]
})
export class BigFiveSumPageModule {}
