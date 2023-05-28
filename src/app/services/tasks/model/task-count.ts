export class TaskCount {

  private readonly _completed: number;
  private readonly _all: number;

  constructor(
    completed: number,
    all: number
  ) {
    this._completed = completed;
    this._all = all;
  }

  get completed(): number {
    return this._completed;
  }

  get all(): number {
    return this._all;
  }

  public completedPercent(): number {
    return (this.completed / this.all) * 100;
  }
}
