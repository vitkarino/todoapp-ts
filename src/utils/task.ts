export default class Task {
    id: string;
    taskText: string;
    completed: boolean;

    constructor(taskText: string) {
      this.id = crypto.randomUUID();
      this.taskText = taskText;
      this.completed = false;
    }
}