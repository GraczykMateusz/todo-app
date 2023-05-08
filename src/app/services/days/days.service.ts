import {Injectable} from '@angular/core';
import {Day, DAYS_OF_THE_WEEK_NAMES} from './days';
import {NgbSlideEventDirection} from '@ng-bootstrap/ng-bootstrap';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DaysService { /// todo refactor

  private readonly daysOfTheWeek: DAYS_OF_THE_WEEK_NAMES[] = Object.values(DAYS_OF_THE_WEEK_NAMES);
  private readonly currentDate: Date = new Date();

  private readonly currentDay: Day = this.getCurrentDay();
  private currentDayNameToDisplay = this.currentDay.name;

  private readonly currentDisplayedDay$ = new BehaviorSubject(this.currentDay.name);
  private readonly daysInOrder: Day[] = this.getDaysInOrder();

  public getCurrentDay(): Day {
    const dayName: DAYS_OF_THE_WEEK_NAMES = this.daysOfTheWeek[this.currentDate.getDay()];
    return new Day(dayName, this.currentDate);
  }

  public getDaysInOrder(): Day[] {
    let daysInOrder: Day[] = [];

    daysInOrder.push(this.currentDay);

    const first = this.daysOfTheWeek.filter(dayName => this.daysOfTheWeek.indexOf(this.currentDay.name) < this.daysOfTheWeek.indexOf(dayName));
    const second = this.daysOfTheWeek.filter(dayName => this.daysOfTheWeek.indexOf(this.currentDay.name) > this.daysOfTheWeek.indexOf(dayName));

    const days: Day[] = first.concat(second).map((dayName: DAYS_OF_THE_WEEK_NAMES, i: number) => new Day(dayName, this.getNextDate(i)));
    daysInOrder = daysInOrder.concat(days);

    return daysInOrder;
  }

  public getNextDate(index: number): Date {
    const tomorrow: Date = new Date()
    tomorrow.setDate(this.currentDate.getDate() + index + 1)
    return tomorrow;
  }

  public getDayNameToDisplay() {
    return this.currentDisplayedDay$.asObservable();
  }

  public changeDay(direction: NgbSlideEventDirection) {
    const number = this.daysOfTheWeek.indexOf(this.currentDayNameToDisplay);
    if (direction === 'end') {
      this.currentDayNameToDisplay = this.daysOfTheWeek[number - 1];
      this.currentDisplayedDay$.next(this.daysOfTheWeek.at(number - 1)!);
    } else if (direction === 'start') {
      this.currentDayNameToDisplay = this.daysOfTheWeek[number + 1];
      this.currentDisplayedDay$.next(this.daysOfTheWeek.at(number + 1)!);
    }
  }
}
