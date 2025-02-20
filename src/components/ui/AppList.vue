<script setup lang="ts">
import { useTasks } from '../../composables/useTasks';
import AppTask from "./AppTask.vue";

const { tasks, removeTask, toggleTaskCompletion } = useTasks();
</script>

<template>
  <div class="todo-app__task-list">
    <AppTask
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @toggle="toggleTaskCompletion"
      @delete="removeTask"
    />
  </div>
</template>

<style scoped>
.todo-app__task-list {
  list-style: none;
}
</style>
