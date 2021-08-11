import { Component, Input, OnChanges } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-stops',
  templateUrl: './stops.component.html',
  styleUrls: ['./stops.component.scss']
})
export class StopsComponent implements OnChanges {

  public stops: any = [];

  @Input() filter: any;

  constructor(private dataService: DataService) { }

  ngOnChanges() {
    if (this.filter.search) {
      this.dataService.getStops(this.filter.search).subscribe((result: any) => {
        this.stops = result;
      });
    }
  }

  showTransport(id: any, index: any): any {
    if (this.stops[index]['transportInfo']) {
      delete this.stops[index]['transportInfo'];
    } else {
      this.dataService.getPlan(id).subscribe((result: any) => {
        this.stops[index]['transportInfo'] = result;
      }, (error) => {
        this.stops[index]['error'] = error.error;
      });
    }
  }

}
