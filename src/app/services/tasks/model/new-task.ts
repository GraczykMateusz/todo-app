export class NewTask {
  constructor(
    public content: string,
    public date: Date) {
  }

  asObject(): any {
    return Object.assign({}, this);
  }
}
