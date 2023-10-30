export class OwnDate {

  private readonly _date: string;
  private readonly _dateObj: Date;

  constructor(date: Date) {
    const day: number = date.getUTCDate();
    const fixedDay: string =  day < 10 ? '0' + day : '' + day;

    const month: number = (date.getUTCMonth() + 1);
    const fixedMonth: string = month < 10 ? '0' + month : '' + month;

    this._dateObj = new Date(date);
    this._date = fixedDay + '-' + fixedMonth + '-' + date.getUTCFullYear();
  }
  
  static fromString(date: string): OwnDate {
    const dateComponents = date.split('-');
    const day = parseInt(dateComponents[0], 10);
    const month = parseInt(dateComponents[1], 10) - 1; // Months are zero-based (0-11)
    const year = parseInt(dateComponents[2], 10);
    
    return new this(new Date(year, month, day));
  }

  static today(): OwnDate {
    return new OwnDate(new Date());
  }
  
  static compare(d1: OwnDate, d2: OwnDate): boolean {
    return d1._dateObj.toLocaleDateString() < d2._dateObj.toLocaleDateString();
  }

  get date(): string {
    return this._date;
  }
}
