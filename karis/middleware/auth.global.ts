export default defineNuxtRouteMiddleware((to, from) => {
	const { isLoggedIn } = useAuth();
	if (!isLoggedIn()) {
		if (to.path !== "/auth") {
			return navigateTo("/auth");
		}
	}
});
