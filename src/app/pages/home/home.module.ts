import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StopsComponent } from './components/stops/stops.component';
import { ListItemModule } from '../../design/list-item/list-item.module';
import { SearchComponent } from './components/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        StopsComponent,
        SearchComponent
    ],
  exports: [
    StopsComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    ListItemModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
