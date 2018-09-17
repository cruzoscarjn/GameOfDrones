import { Component, OnInit } from '@angular/core';
import { ScoreServicesService } from '../../../core/services/scoreServices/score-services.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  data: any[];
  name: string;
  page: number;
  constructor(private scores: ScoreServicesService) {
    this.data = [];
    this.page = 1;
   }

  ngOnInit() {
  }

  search(): void {
    this.scores.getScores(this.name.toLocaleLowerCase(), this.page).subscribe(r => {
      this.data = r.result;
    });
  }

}
