<template>
  <div class="flex items-center justify-center mt-32 text-tiny gap-12">
    <div>{{ counter.count }}</div>
    <button
      class="shadow rounded bg-purple-200 py-2 px-4"
      @click="counter.increment"
    >
      Add 1
    </button>
    <span> From API: {{ data.users }} </span>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "../stores/counter";
const { data } = await useFetch("/api/users");
const counter = useCounterStore();
</script>
