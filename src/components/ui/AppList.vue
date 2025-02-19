<script setup lang="ts"></script>

<template>
  <div class="todo-app__main">
    <div class="todo-app__task-list">
      <template id="task-template">
        <div class="todo-app__task">
          <button class="todo-app__button todo-app__button--checkbox">
            <img
              class="todo-app__icon"
              src="../assets/icon--checkmark.svg"
              alt="Complete task"
            />
          </button>
          <span class="todo-app__text">Work on a project</span>
          <button class="todo-app__button todo-app__button--delete">
            <img
              src="../assets/icon--delete.svg"
              class="todo-app__icon"
              alt="Delete task"
            />
          </button>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.todo-app__task-list {
  list-style: none;
}

.todo-app__task {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 18px 0;
  width: 400px;
  font-size: 18px;
  border-bottom: 1px solid #3d3d3d;
}

.todo-app__button--checkbox {
  background-color: var(--checkbox-bg-color);
}

.todo-app__button--checkbox .todo-app__icon {
  display: none;
}

.todo-app__task[data-completed="true"]
  .todo-app__button--checkbox
  .todo-app__icon {
  display: block;
}

.todo-app__task[data-completed="true"] .todo-app__text {
  text-decoration: line-through;
  color: var(--task-completed-color);
}

.todo-app__icon {
  width: 28px;
}

.todo-app__button--checkbox:hover,
.todo-app__button--checkbox:focus {
  background-color: var(--checkbox-hover-bg-color);
}

.todo-app__button--checkbox:active {
  background-color: var(--checkbox-active-bg-color);
}

.todo-app__button--delete {
  margin-left: auto;
  background: none;
  width: 40px;
  height: 40px;
}

.todo-app__button--delete:hover,
.todo-app__button--delete:focus {
  background-color: var(--button-hover-bg-color);
}

.todo-app__button--delete:active {
  background-color: var(--button-active-bg-color);
}
</style>
