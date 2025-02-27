<script setup lang="ts">
	import TaskItem from "./TaskItem.vue";
	import Task from "../../utils/task";
	defineProps<{ tasks: Task[] }>();
	const emit = defineEmits(["toggle", "delete"]);
</script>

<template>
	<div class="task-list">
		<TaskItem
			v-for="task in tasks"
			:key="task.id"
			:task="task"
			@delete="emit('delete', task.id)"
			@toggle="emit('toggle', task.id)"
		/>
	</div>
</template>

<style scoped>
	.task-list {
		list-style: none;
	}
</style>
