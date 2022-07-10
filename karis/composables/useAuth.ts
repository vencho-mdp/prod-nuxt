const useAuth = () => {
	const { supabase } = useSupabase();
	const user = useState("user", () => null);
	const authError = ref("");
	const router = useRouter();

	supabase.auth.onAuthStateChange((e, session) => {
		user.value = session?.user || null;
	});

	const signUp = async ({ email, password, ...metadata }) => {
		try {
			const { user: u, error } = await supabase.auth.signUp(
				{
					email,
					password,
				},
				{
					data: metadata,
					redirectTo: `${window.location.origin}/?source=email`,
				}
			);
			if (error) throw error;
			return u;
		} catch (err) {
			authError.value = err.message;
		}
	};

	const signIn = async ({ email, password }) => {
		try {
			const { user: u, error } = await supabase.auth.signIn({
				email,
				password,
			});
			if (error) throw error;
			return u;
		} catch (error) {
			authError.value = error.message;
		}
	};

	const signOut = async () => {
		try {
			const { error } = await supabase.auth.signOut();
			if (error) throw error;
		} catch (error) {
			authError.value = error.message;
			throw error;
		}
		router.push("/");
	};

	const isLoggedIn = () => {
		return !!user.value;
	};

	return {
		user,
		signUp,
		signIn,
		signOut,
		authError,
		isLoggedIn,
	};
};

export default useAuth;
