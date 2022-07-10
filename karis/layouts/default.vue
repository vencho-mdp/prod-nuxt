<template>
	<div class="bg-darkSecondary dark:bg-black h-screen">
		<UiNav class="dark:bg-darkBg dark:text-darkSecondary" />
		<div class="flex max-w-full max-h-full dark:bg-black bg-darkSecondary">
			<transition name="sidebar" mode="out-in">
				<UiSideNav v-if="uiStore.sidebar" />
			</transition>
			<div class="flex-grow max-w-full max-h-full bg-darkSecondary dark:bg-black">
				<slot />
			</div>
		</div>
		<UiFooter class="fixed bottom-0" />
	</div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useUiStore } from "../stores/ui";
const uiStore = useUiStore();

onMounted(() => {
	if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
		uiStore.setTheme("dark");
	} else {
		uiStore.setTheme("light");
	}
});
</script>

<style>
.sidebar-enter-active {
	animation: slide 0.3s;
}
.sidebar-leave-active {
	animation: slide 0.3s reverse;
}

@keyframes slide {
	from {
		opacity: 0;
		transform: translateX(-220px) scale(1);
	}
	to {
		opacity: 100;
		transform: translateX(0) scale(1);
	}
}
</style>
