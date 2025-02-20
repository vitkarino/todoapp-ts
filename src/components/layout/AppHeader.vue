<script setup lang="ts">
import { ref } from 'vue';
import { useTasks } from '../../composables/useTasks';

const { addTask } = useTasks(); 
const taskText = ref("");

const handleSubmit = () => {
  if (taskText.value.trim()) {
    addTask(taskText.value);
    taskText.value = "";
  }
}

</script>

<template>
  <header class="todo-app__header">
    <h1 class="todo-app__title">To-Do App</h1>
    <form class="todo-app__form" @submit.prevent="handleSubmit">
      <input type="text" class="todo-app__input" placeholder="Add task" v-model="taskText" />
      <button type="submit" class="todo-app__button todo-app__add-task-button">
        +
      </button>
    </form>
  </header>
</template>

<style scoped>
.todo-app__header {
  padding: 30px 0;
}

.todo-app__title {
  margin: 0 0 10px 0;
  text-align: center;
}

.todo-app__form {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.todo-app__input {
  height: 40px;
  font-size: 18px;
  background: var(--input-bg-color);
  color: var(--input-color);
  padding: 0 20px;
  border: none;
  border-radius: 50px;
  outline: none;
  position: relative;
}

.todo-app__input:focus {
  background-color: var(--input-active-bg-color);
}

.todo-app__add-task-button {
  background-color: var(--button-bg-color);
  color: var(--button-color);
}

.todo-app__add-task-button:hover,
.todo-app__add-task-button:focus {
  color: var(--input-color);
  background-color: var(--button-active-bg-color);
}

.todo-app__add-task-button:active {
  color: var(--button-hover-color);
  background-color: var(--button-hover-bg-color);
}
</style>
