export enum DAYS_OF_THE_WEEK_NAMES {
  SUNDAY = "SUNDAY",
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY"
}

export class Day {
  constructor(
    public name: DAYS_OF_THE_WEEK_NAMES,
    public date: Date) {
  }
}
