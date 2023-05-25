export class OwnDate {

  private readonly _date: string;

  constructor(date: Date) {
    const month: number = (date.getUTCMonth() + 1);
    const fixedMonth: string = month < 10 ? '0' + month : '' + month;
    this._date = date.getUTCDate() + '-' + fixedMonth + '-' + date.getUTCFullYear();
  }

  static today(): OwnDate {
    return new OwnDate(new Date());
  }

  get date(): string {
    return this._date;
  }
}
