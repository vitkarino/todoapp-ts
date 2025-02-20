import { ref, watchEffect } from "vue";
import Task from "../utils/task";

const tasks = ref<Task[]>(loadTasks());

function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    try {
      const parsedTasks = JSON.parse(storedTasks) as any[];
      return parsedTasks.map((taskData) => {
        const task = new Task(taskData.text);
        task.id = taskData.id;
        task.completed = taskData.completed;
        return task;
      });
    } catch (error) {
      console.error("Error parsing tasks from localStorage:", error);
      return [];
    }
  } return [];
}

export function useTasks() {
  const addTask = (text: string) => {
    const newTask = new Task(text);
    tasks.value.push(newTask);
  };

  const removeTask = (id: number) => {
    tasks.value = tasks.value.filter((task) => task.id !== id);
  };

  const toggleTaskCompletion = (id: number) => {
    const task = tasks.value.find((task) => task.id === id);
    if (task) task.completed = !task.completed;
  };

  watchEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks.value));
  });

  return {
    tasks,
    addTask,
    removeTask,
    toggleTaskCompletion
  };
}