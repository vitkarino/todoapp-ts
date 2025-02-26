<script setup lang="ts">
import { useTasks } from '../../composables/useTasks';
import TaskItem from "./TaskItem.vue";
import TodoApp from '../../controllers/TodoApp';

const { tasks, removeTask, toggleTaskCompletion } = useTasks();
</script>

<template>
  <div class="task-list">
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @toggle="TodoApp.toggleTaskCompletion(task.id)"
      @delete="TodoApp.removeTask(task.id)"
    />
  </div>
</template>

<style scoped>
.task-list {
  list-style: none;
}
</style>
