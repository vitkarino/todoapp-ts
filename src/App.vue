<script setup lang="ts">
import TodoApp from './controllers/TodoApp';
import AppHeader from './components/layout/AppHeader.vue';
import TaskList from './components/ui/TaskList.vue';

const todoApp = new TodoApp()
</script>

<template>
    <AppHeader />
    <TaskList :todo="todoApp.tasks" />
  </div>
</template>

<style scoped></style>
