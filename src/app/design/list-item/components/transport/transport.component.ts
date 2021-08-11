import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.scss']
})
export class TransportComponent implements OnChanges {

  @Input() stopInfo: any;

  ngOnChanges() {
  }

}
