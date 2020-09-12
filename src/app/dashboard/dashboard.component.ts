import { Component, OnInit } from '@angular/core';

import { GameDataService } from '../game-data.service';
import { getLocaleDateTimeFormat } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private game_date: Date;

  constructor(private game_data_service: GameDataService) {
    this.game_data_service.getGameDateObservable().subscribe((new_date) => {
      this.game_date = new_date;
    });
  }

  ngOnInit(): void {
    let game_date = new Date();

    game_date.setHours(0);
    game_date.setMinutes(0);
    game_date.setSeconds(0);

    game_date.setMonth(Math.floor(Math.random() * 12) + 1);
    game_date.setDate(Math.floor(Math.random() * 30) + 1);

    this.game_data_service.setGameDate(game_date);
  }

  onDayEnd(): void {
    this.game_date.setDate(this.game_date.getDate() + 1)

    this.game_data_service.setGameDate(this.game_date);
  }

}
