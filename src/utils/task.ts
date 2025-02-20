export default class Task {
    id;
    text;
    completed;

  constructor(text: string) {
    this.id = Date.now();
    this.text = text;
    this.completed = false;
  }
}
