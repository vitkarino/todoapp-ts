<script setup lang="ts">
import AppHeader from "./components/layout/AppHeader.vue";
import TaskList from "./components/ui/TaskList.vue";
import { useTasks } from "./composables/useTasks";

const { tasks, addTask, removeTask, toggleTaskCompletion } = useTasks();
</script>

<template>
  <div class="todo-app">
    <AppHeader :addTask="addTask" />
    <TaskList
      :tasks="tasks"
      :removeTask="removeTask"
      :toggleTaskCompletion="toggleTaskCompletion"
    />
  </div>
</template>

<style scoped></style>
