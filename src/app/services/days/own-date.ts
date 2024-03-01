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
    const d1Date = d1._dateObj;
    const d2Date = d2._dateObj;
    
    const d1Day = d1Date.getDate();
    const d1Month = d1Date.getMonth();
    const d1Year = d1Date.getFullYear();
    
    const d2Day = d2Date.getDate();
    const d2Month = d2Date.getMonth();
    const d2Year = d2Date.getFullYear();
    
    // Compare year
    if (d1Year !== d2Year) {
      return d1Year < d2Year;
    }
    
    // Compare month
    if (d1Month !== d2Month) {
      return d1Month < d2Month;
    }
    
    // Compare day
    return d1Day < d2Day;
  }

  get date(): string {
    return this._date;
  }
}
