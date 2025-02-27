export default class Task {
	id;
	taskText;
	completed;
	static idCounter = 0;

	constructor(text: string) {
		this.id = ++Task.idCounter;
		this.taskText = text;
		this.completed = false;
	}
}
