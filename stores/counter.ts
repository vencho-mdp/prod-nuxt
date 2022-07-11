import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
	state: () => ({ count: 0 }),
	getters: {
		counter(state) {
			return state.count;
		},
	},
	actions: {
		increment() {
			this.count++;
		},
	},
});
