import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infobar',
  templateUrl: './infobar.component.html',
  styleUrls: ['./infobar.component.scss']
})
export class InfobarComponent implements OnInit {

  game_date: Date;

  constructor() { }

  ngOnInit(): void {
    this.game_date = new Date("2020-01-01T00:00:00");
  }

}
