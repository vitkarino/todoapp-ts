<script setup lang="ts">
import { useTasks } from '../../composables/useTasks';
import TaskItem from "./TaskItem.vue";

const { tasks, removeTask, toggleTaskCompletion } = useTasks();
</script>

<template>
  <div class="task-list">
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @toggle="toggleTaskCompletion"
      @delete="removeTask"
    />
  </div>
</template>

<style scoped>
.task-list {
  list-style: none;
}
</style>
