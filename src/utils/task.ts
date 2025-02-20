export default class Task {
    id;
    text;
    completed;

  constructor(text: string) {
    this.id = Date.now();
    // Я вирішив використати саме цей метод, оскільки немає БД, з якого можна було б витягнути унікальний ідентифікатор.
    
    this.text = text;
    this.completed = false;
  }
}
