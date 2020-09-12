import { Component, OnInit } from '@angular/core';

import { GameDataService } from '../game-data.service';

@Component({
  selector: 'app-infobar',
  templateUrl: './infobar.component.html',
  styleUrls: ['./infobar.component.scss']
})
export class InfobarComponent implements OnInit {

  game_date: Date;

  constructor(private game_data_service: GameDataService) {
    this.game_data_service.getGameDateObservable().subscribe((new_date) => {
      this.game_date = new_date;
    });
  }

  ngOnInit(): void {
  }

}
