<template>
  <div class="flex items-center justify-center mt-32 text-tiny gap-12">
    <div>{{ counter.count }}</div>
    <button
      class="shadow rounded bg-purple-200 py-2 px-4"
      @click="counter.increment"
    >
      Add 1
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "../stores/counter";
const counter = useCounterStore();
</script>
