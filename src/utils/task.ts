export default class Task {
    id;
    text;
    completed;
    static idCounter = 0;

  constructor(text: string) {
    this.id = ++Task.idCounter;
    this.text = text;
    this.completed = false;
  }
}
