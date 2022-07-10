<template>
	<div>
		<label class="label">{{ label }}</label>
		<input class="input" :type="type" :placeholder="placeholder" />
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	type: {
		type: String,
		default: "text",
	},
	placeholder: {
		type: String,
		default: "",
	},
	label: {
		type: String,
		default: "",
	},
});
</script>

<style scoped>
.input {
	border: 1px solid #ccc;
	border-radius: 3px;
	padding: 0.4rem;
	width: 100%;
}
.label {
	display: inline;
	margin: 0.5rem 0;
	text-align: center;
}
</style>
