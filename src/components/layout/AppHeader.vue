<script setup lang="ts">
import { ref } from "vue";
import TodoApp from '@/controllers/TodoApp';

</script>

<template>
  <header class="header">
    <h1 class="header__title">To-Do App</h1>
    <form class="header__form" @submit.prevent="handleSubmit">
      <input type="text" class="form__input" placeholder="Add a task" v-model="taskText" />
      <button type="submit" class="button button--submit">
        <img src="/src/assets/icon--plus.svg" class="button__icon" alt="Add a task" />
      </button>
    </form>
  </header>
</template>

<style scoped>
.header {
  padding: 30px 0;
}

.header__title {
  margin: 0 0 10px 0;
  text-align: center;
}

.header__form {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.form__input {
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

.form__input:focus {
  background-color: var(--input-active-bg-color);
}

.button--submit {
  background-color: var(--button-bg-color);
  color: var(--button-color);
}

.button--submit:hover,
.button--submit:focus {
  color: var(--input-color);
  background-color: var(--button-active-bg-color);
}

.button--submit:active {
  color: var(--button-hover-color);
  background-color: var(--button-hover-bg-color);
}
</style>
