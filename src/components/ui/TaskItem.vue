<script setup lang="ts">
const props = defineProps(["task"]);
const emit = defineEmits(["toggle", "delete"]);

const toggleTask = () => emit("toggle", props.task.id);
const deleteTask = () => emit("delete", props.task.id);
</script>

<template>
  <div class="task" :data-id="task.id" :data-completed="task.completed">
    <button class="button button--checkbox" @click="toggleTask">
      <img
        class="button__icon"
        src="/src/assets/icon--checkmark.svg"
        alt="Complete task"
      />
    </button>
    <span class="task__text">{{ task.text }}</span>
    <button class="button button--delete" @click="deleteTask">
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

.button--checkbox {
  background-color: var(--checkbox-bg-color);
}

.button--checkbox .button__icon {
  display: none;
}

.task[data-completed="true"] .button--checkbox .button__icon {
  display: block;
}

.task[data-completed="true"] .task__text {
  text-decoration: line-through;
  color: var(--task-completed-color);
}

.button__icon {
  width: 28px;
}

.button--checkbox:hover,
.button--checkbox:focus {
  background-color: var(--checkbox-hover-bg-color);
}

.button--checkbox:active {
  background-color: var(--checkbox-active-bg-color);
}

.button--delete {
  margin-left: auto;
  background: none;
  width: 40px;
  height: 40px;
}

.button--delete:hover,
.button--delete:focus {
  background-color: var(--button-hover-bg-color);
}

.button--delete:active {
  background-color: var(--button-active-bg-color);
}
</style>
