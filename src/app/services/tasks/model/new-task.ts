import { OwnDate } from '../../days/own-date';

export class NewTask {

  private readonly _content: string;
  private readonly _isCompleted: boolean;
  private readonly _ownDate: OwnDate;

  constructor(content: string) {
    this._content = content;
    this._isCompleted = false;
    this._ownDate = OwnDate.today();
  }

  asObject(): any {
    return Object.assign({}, {
      content: this._content,
      isCompleted: this._isCompleted,
      date: this._ownDate.date
    });
  }
}
