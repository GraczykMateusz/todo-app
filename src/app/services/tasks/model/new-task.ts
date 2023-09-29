import { OwnDate } from '../../days/own-date';

export class NewTask {
  
  private readonly _content: string;
  private readonly _isCompleted: boolean;
  private readonly _ownDate: OwnDate;
  private readonly _user: string;

  constructor(content: string, user: string, ownDate: OwnDate) {
    this._content = content;
    this._isCompleted = false;
    this._ownDate = ownDate;
    this._user = user;
  }

  asObject(): any {
    return Object.assign({}, {
      content: this._content,
      isCompleted: this._isCompleted,
      date: this._ownDate.date,
      user: this._user
    });
  }
}
