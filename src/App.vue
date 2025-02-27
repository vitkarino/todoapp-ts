<script setup lang="ts">
	import { reactive } from "vue";
	import TodoApp from './controllers/TodoApp';
	import AppHeader from './components/layout/AppHeader.vue';
	import TaskList from './components/ui/TaskList.vue';

	const todoApp = reactive(new TodoApp());
</script>

<template>
	<div class="todo-app">
		<AppHeader v-model="todoApp.state.taskText" @add="todoApp.addTask()" />
		<TaskList 
			:tasks="todoApp.state.tasks" 
			@delete="todoApp.removeTask" 
			@toggle="todoApp.toggleTaskCompletion" 
		/>
	</div>
</template>

<style scoped></style>
