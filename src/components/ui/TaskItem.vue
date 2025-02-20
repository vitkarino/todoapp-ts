<script setup lang="ts">
const props = defineProps(["task"]);
const emit = defineEmits(["toggle", "delete"]);

const toggleTask = () => emit("toggle", props.task.id);
const deleteTask = () => emit("delete", props.task.id);
</script>

<template>
  <div class="task" :data-id="task.id" :data-completed="task.completed">
    <button class="task__button--checkbox" @click="toggleTask">
      <img
        class="button__icon"
        src="/src/assets/icon--checkmark.svg"
        alt="Complete task"
      />
    </button>
    <span class="task__text">{{ task.text }}</span>
    <button class="task__button--delete" @click="deleteTask">
      <img
        src="/src/assets/icon--bin.svg"
        class="button__icon"
        alt="Delete task"
      />
    </button>
  </div>
</template>

<style scoped>
.task {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 18px 0;
  width: 400px;
  font-size: 18px;
  border-bottom: 1px solid #3d3d3d;
}

.task__button--checkbox {
  background-color: var(--checkbox-bg-color);
}

.task__button--checkbox .button__icon {
  display: none;
}

.task[data-completed="true"] .task__button--checkbox .button__icon {
  display: block;
}

.task[data-completed="true"] .task__text {
  text-decoration: line-through;
  color: var(--task-completed-color);
}

.button__icon {
  width: 28px;
}

.task__button--checkbox:hover,
.task__button--checkbox:focus {
  background-color: var(--checkbox-hover-bg-color);
}

.task__button--checkbox:active {
  background-color: var(--checkbox-active-bg-color);
}

.task__button--delete {
  margin-left: auto;
  background: none;
  width: 40px;
  height: 40px;
}

.task__button--delete:hover,
.task__button--delete:focus {
  background-color: var(--button-hover-bg-color);
}

.task__button--delete:active {
  background-color: var(--button-active-bg-color);
}
</style>
