import { ref } from 'vue';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const tasks = ref<Task[]>([]);

export function useTasks() {
  const addTask = (text: string) => {
    tasks.value.push({
      id: Date.now(),
      text,
      completed: false,
    });
  };

  const removeTask = (id: number) => {
    tasks.value = tasks.value.filter(task => task.id !== id);
  };

  const toggleTaskCompletion = (id: number) => {
    const task = tasks.value.find(task => task.id === id);
    if (task) {
      task.completed = !task.completed;
    }
  };

  return {
    tasks,
    addTask,
    removeTask,
    toggleTaskCompletion,
  };
}
