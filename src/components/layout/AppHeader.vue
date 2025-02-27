<script setup lang="ts">
	import { defineProps, defineEmits } from "vue";

	defineProps<{ modelValue: string }>();
	const emit = defineEmits(["update:modelValue", "add"]);
</script>

<template>
	<header class="header">
		<h1 class="header__title">To-Do App</h1>
		<form class="header__form" @submit.prevent="emit('add')">
			<input
				type="text"
				class="form__input"
				placeholder="Add a task"
				:value="modelValue"
				@input="
					emit('update:modelValue', ($event.target as HTMLInputElement).value)
				"
			/>
			<button type="submit" class="button button_submit">
				<img
					src="/src/assets/icon_plus.svg"
					class="button__icon"
					alt="Add a task"
				/>
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

	.button_submit {
		background-color: var(--button-bg-color);
		color: var(--button-color);
	}

	.button_submit:hover,
	.button_submit:focus {
		color: var(--input-color);
		background-color: var(--button-active-bg-color);
	}

	.button_submit:active {
		color: var(--button-hover-color);
		background-color: var(--button-hover-bg-color);
	}
</style>
