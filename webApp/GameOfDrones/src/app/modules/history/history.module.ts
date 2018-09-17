import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history/history.component';
import { HistoryRoutingModule } from './history-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HistoryRoutingModule,
    FormsModule
  ],
  declarations: [HistoryComponent]
})
export class HistoryModule { }
