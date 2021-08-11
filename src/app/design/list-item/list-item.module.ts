import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransportComponent } from './components/transport/transport.component';



@NgModule({
  declarations: [
    TransportComponent
  ],
  exports: [
    TransportComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ListItemModule { }
