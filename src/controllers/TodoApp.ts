import { reactive, watch } from "vue";
import Task from "../utils/task";
import LocalStorage from "../utils/localStorage";

export default class TodoApp {
	public state: {
		tasks: Task[];
		taskText: string;
	};

	constructor() {
		this.state = reactive({
			tasks: LocalStorage.get<Task[]>("tasks") || [],
			taskText: "",
		});

		watch(
			() => this.state.tasks,
			(newTasks) => {
				LocalStorage.set("tasks", newTasks);
			},
			{ deep: true }
		);

		this.addTask = this.addTask.bind(this);
		this.removeTask = this.removeTask.bind(this);
		this.toggleTaskCompletion = this.toggleTaskCompletion.bind(this);
	}

	addTask(): void {
		if (!this.state.taskText.trim()) return;
		this.state.tasks.push(new Task(this.state.taskText.trim()));
		this.state.taskText = "";
	}

	removeTask(taskId: number): void {
		const index = this.state.tasks.findIndex((task) => task.id === taskId);
		if (index !== -1) {
			this.state.tasks.splice(index, 1);
		}
	}

	toggleTaskCompletion(taskId: number): void {
		const task = this.state.tasks.find((task) => task.id === taskId);
		if (task) {
			task.completed = !task.completed;
		}
	}
}
