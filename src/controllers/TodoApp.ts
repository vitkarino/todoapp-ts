import Task from "../utils/task";
import LocalStorage from "../utils/localStorage";

export default class TodoApp {
    private UI: HTMLElement;
    private taskList: HTMLElement;
    private taskTemplate: HTMLTemplateElement;
    private tasks: Task[];
    private taskText: string = "";
    
    constructor(sSelector: string) {
        this.UI = document.querySelector(sSelector) as HTMLElement;
        this.taskList = this.find(".app__task-list") as HTMLElement;
        this.taskTemplate = this.find("#task-template") as HTMLTemplateElement;
        this.tasks = LocalStorage.get<Task[]>("tasks") || [];
    
        this.taskList.addEventListener("click", this.handleClick.bind(this));
		this.find(".header__form")?.addEventListener("submit", this.handleSubmit.bind(this));
    
        this.renderTasks();
    }
    
    private find(selector: string): HTMLElement | null {
        return this.UI.querySelector(selector);
    }
    
    private handleClick(event: Event): void {
        const target = event.target as HTMLElement;
        const taskElement = target.closest(".task") as HTMLElement;
        if (!taskElement) return;
    
        const taskId = parseInt(taskElement.dataset.id || "", 10);
    
        if (target.closest(".button_delete")) {
            this.removeTask(taskId);
        } else if (target.closest(".button_checkbox")) {
            this.toggleTaskCompletion(taskId);
        }
    }

    private handleSubmit(event: Event): void {
		event.preventDefault();
		const eTaskInput = this.find(".form__input") as HTMLInputElement;
		this.taskText = eTaskInput.value.trim();
		if (!this.taskText) return;

		this.addTask(this.taskText);
		eTaskInput.value = "";
	}
    
    private addTask(taskText: string): void {
        const newTask = new Task(taskText);
        this.tasks.push(newTask);
        LocalStorage.set("tasks", this.tasks);
        this.renderTask(newTask);
    }
    
    private removeTask(taskId: number): void {
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
        LocalStorage.set("tasks", this.tasks);
    
        const taskElement = this.taskList.querySelector(`.task[data-id="${taskId}"]`) as HTMLElement;
        if (taskElement) taskElement.remove();
    }
    
    private toggleTaskCompletion(taskId: number): void {
        const task = this.tasks.find((task) => task.id === taskId);
        if (task) {
            task.completed = !task.completed;
            LocalStorage.set("tasks", this.tasks);
        }
    
        const taskElement = this.taskList.querySelector(`.task[data-id="${taskId}"]`) as HTMLElement;
        if (taskElement) taskElement.dataset.completed = String(task.completed);
    }
    
    private renderTask(oTask: Task): void {
        const taskItem = document.importNode(this.taskTemplate.content, true);
        const taskElement = taskItem.querySelector(".task") as HTMLElement;
        const taskText = taskItem.querySelector(".task__text") as HTMLElement;
    
        taskText.textContent = oTask.taskText;
        taskElement.dataset.id = String(oTask.id);
        taskElement.dataset.completed = String(oTask.completed);
    
        this.taskList.appendChild(taskItem);
    }
    
    private renderTasks(): void {
        this.taskList.replaceChildren();
        this.tasks.forEach((task) => this.renderTask(task));
    }
}
