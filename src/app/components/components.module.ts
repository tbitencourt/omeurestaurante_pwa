import { NgModule } from '@angular/core';
import { MoneyPipe } from './pipes/money.pipe';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [MoneyPipe],
  imports: [CommonModule],
  entryComponents: [
    MoneyPipe
  ],
  exports: [MoneyPipe]
})
export class ComponentsModule { }