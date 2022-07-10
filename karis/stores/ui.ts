import { defineStore } from "pinia";
// figure out how to typescript this
interface UIStore {
	sidebarState: boolean;
	theme: string;
	loading: boolean;
}

export const useUiStore = defineStore("ui", {
	state: () => ({
		sidebarState: true,
		theme: "light",
		loading: false,
	}),
	getters: {
		sidebar(state) {
			return state.sidebarState;
		},
	},
	actions: {
		setTheme(theme) {
			document.documentElement.classList.add(theme);
			localStorage.theme = theme;
			this.theme = theme;
		},
		toggleTheme() {
			if (this.theme === "dark") {
				document.documentElement.classList.remove("dark");
				localStorage.theme = "light";
				this.theme = "light";
			} else if (this.theme === "light") {
				document.documentElement.classList.add("dark");
				localStorage.theme = "dark";
				this.theme = "dark";
			}
		},
		toggleSidebar() {
			this.sidebarState = !this.sidebarState;
		},
		toggleLoading(loading) {
			this.loading = loading;
		},
	},
});
