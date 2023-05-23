import { Injectable } from '@angular/core';
import { Day, DAYS_OF_THE_WEEK_NAMES } from './days';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DaysService {

  private readonly _days: Day[] = [
    this.convertToDay(new Date(), 0),
    this.convertToDay(new Date(), 1),
    this.convertToDay(new Date(), 2),
    this.convertToDay(new Date(), 3),
    this.convertToDay(new Date(), 4),
    this.convertToDay(new Date(), 5),
    this.convertToDay(new Date(), 6)
  ];

  private readonly _currentDay$: any = new BehaviorSubject(this._days[0]);

  get days(): Day[] {
    return this._days;
  }

  get currentDay(): Observable<Day> {
    return this._currentDay$.asObservable();
  }

  public changeDay(current: string): void {
    const index: number = +current.charAt(current.length - 1);
    this._currentDay$.next(this.days.at(index));
  }

  private convertToDay(date: Date, index: number): Day {
    date.setDate(date.getDate() + index);
    const dayName: DAYS_OF_THE_WEEK_NAMES = Object.values(DAYS_OF_THE_WEEK_NAMES)[date.getDay()];
    return new Day(dayName, date);
  }
}
