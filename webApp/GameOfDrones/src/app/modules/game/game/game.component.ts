import { Component, OnInit } from '@angular/core';
import { MovementServicesService } from '../../../core/services/movementServices/movement-services.service';
import { ScoreServicesService } from '../../../core/services/scoreServices/score-services.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  player: number;
  playerName: string;
  movement: string;
  playerMoves: any;
  moves: any [];
  wins: any;
  done: boolean;

  constructor( private movements: MovementServicesService, private scores: ScoreServicesService) {
    this.playerMoves = {};
    this.moves = [];
   }

  ngOnInit() {

    this.movements.getMovements().subscribe(r => {
      this.moves = r.result;
    });
    this.askForPlayer(1);
  }

  askForPlayer(number: number): void {
    this.movement = null;
    this.playerName = null;
    this.player = number;
  }

  makeChoice(choice: any): void {
    this.movement = choice;
  }

  save(): void {
    this.playerMoves[this.playerName.toLowerCase()] = this.movement;
    if ( this.player === 1 ) {
      this.askForPlayer(2);
    } else {
      this.calculateResult();
      this.saveState();
    }
  }

  replay(): void {
    this.done = false;
    this.playerMoves = {};
    this.askForPlayer(1);
  }

  calculateResult(): void  {
    const keys = Object.keys(this.playerMoves);
    const playersNames = {p1: keys[0], p2: keys[1]};
    const p1 =  this.playerMoves[playersNames.p1];
    const p2 =  this.playerMoves[playersNames.p2];
    if (p1.lose_with === p2.value) {
      this.wins = p2;
      this.wins.pname = keys[1];
      this.wins.playersNames = playersNames;
    } else if ( p2.lose_with === p1.value ) {
      this.wins = p1;
      this.wins.pname = keys[0];
      this.wins.playersNames = playersNames;
    } else if ( p1.value === p2.value) {
      this.wins = null;
    }
    this.done = true;
  }

  saveState(): void {
    const body = {
      wins_with: this.wins.name,
      player_1: this.wins.playersNames.p1,
      player_2: this.wins.playersNames.p2,
      winer: this.wins.pname,
    };
    this.scores.postScore(body)
      .subscribe();
  }
}
