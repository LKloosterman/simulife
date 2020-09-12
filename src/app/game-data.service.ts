import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  private game_date: Subject<Date>;

  constructor() {
    this.game_date = new Subject<Date>();
  }

  public getGameDateObservable(): Observable<Date> {
    return this.game_date.asObservable();
  }

  public setGameDate(new_date: Date): void {
    this.game_date.next(new Date(new_date));
  }

}
