const useUi = () => {
	// On page load or when changing themes, best to add inline in `head` to avoid FOUC
	const toggleTheme = () => {
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			document.documentElement.classList.add("dark");
			localStorage.theme = "dark";
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.theme = "light";
		}
	};

	const toggleSidebar = () => {};
	return {
		toggleTheme,
		toggleSidebar,
	};
};

export default useUi;
