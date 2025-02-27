<script setup lang="ts">
	import Task from "../../utils/task";
	defineProps<{ task: Task }>();
	const emit = defineEmits(["toggle", "delete"]);
</script>

<template>
	<div class="task" :class="{ task_completed: task.completed }">
		<button class="button button_checkbox" @click="emit('toggle', task.id)">
			<img
				class="button__icon"
				src="/src/assets/icon_checkmark.svg"
				alt="Complete task"
			/>
		</button>
		<span class="task__text">{{ task.taskText }}</span>
		<button class="button button_delete" @click="emit('delete', task.id)">
			<img
				src="/src/assets/icon_bin.svg"
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

	.button_checkbox {
		background-color: var(--checkbox-bg-color);
	}

	.button_checkbox .button__icon {
		display: none;
	}

	.task_completed .button_checkbox .button__icon {
		display: block;
	}

	.task[data-completed="true"] .task__text {
		text-decoration: line-through;
		color: var(--task-completed-color);
	}

	.button__icon {
		width: 28px;
	}

	.button_checkbox:hover,
	.button_checkbox:focus {
		background-color: var(--checkbox-hover-bg-color);
	}

	.button_checkbox:active {
		background-color: var(--checkbox-active-bg-color);
	}

	.button_delete {
		margin-left: auto;
		background: none;
		width: 40px;
		height: 40px;
	}

	.button_delete:hover,
	.button_delete:focus {
		background-color: var(--button-hover-bg-color);
	}

	.button_delete:active {
		background-color: var(--button-active-bg-color);
	}
</style>
