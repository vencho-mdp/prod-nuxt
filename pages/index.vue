<template>
	<div>
		<div class="bg-blue-500">{{ counter.count }}</div>
		<button @click="counter.increment">Add 1</button>
	</div>
</template>

<script setup lang="ts">
import { useCounterStore } from "../stores/counter";
const counter = useCounterStore();
</script>
