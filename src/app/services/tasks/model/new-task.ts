export class NewTask {
  constructor(
    public content: string,
    public lastUpdate: Date) {
  }

  asObject(): any {
    return Object.assign({}, this);
  }
}
