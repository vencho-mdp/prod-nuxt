import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
	state: () => ({ count: 0 }),
	getters: {
		// use getters to retrieve state, that you want to manipulate before returning to component, example if you wanted to filter by id or something
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

// import { ref } from "vue";
// export const useCounterStore = defineStore("counter", () => {
// 	const count = ref(0);
// 	function increment() {
// 		count.value++;
// 	}

// 	return { count, increment };
// });
