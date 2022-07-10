<script setup lang="ts">
import { useUiStore } from "../../stores/ui";
import IconMoon from "~icons/fa-solid/moon";
import IconSun from "~icons/fa-solid/sun";
import IconBars from "~icons/fa-solid/bars";

const uiStore = useUiStore();
const { signOut, isLoggedIn } = useAuth();
</script>

<template>
	<nav class="h-16">
		<div class="flex items-center nav">
			<div class="logo px-5 text-xl">iDispense</div>
			<div class="flex flex-auto">
				<icon-bars class="icon justify-start" @click="uiStore.toggleSidebar" />
				<ul id="nav-mobile" class="nav-ul flex-auto justify-end">
					<transition name="fade" mode="out-in">
						<icon-moon
							v-if="uiStore.theme === 'light'"
							class="icon justify-start"
							@click="uiStore.toggleTheme"
						/>
						<icon-sun
							v-else
							class="icon justify-start"
							@click="uiStore.toggleTheme"
						/>
					</transition>
					<li class="nav-li">
						<NuxtLink to="/contact">Contact</NuxtLink>
					</li>
					<li class="nav-li">
						<NuxtLink to="/settings">Settings</NuxtLink>
					</li>
					<li class="nav-li" v-if="isLoggedIn()">
						<NuxtLink to="/auth" @click="signOut">Sign Out</NuxtLink>
					</li>
					<li class="nav-li" v-if="!isLoggedIn()">
						<NuxtLink to="/auth">Sign In</NuxtLink>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<style scoped>
.logo {
	font-size: 2.3rem;
	@apply cursor-pointer text-primary dark:text-darkSecondary hover:dark:text-darkPrimary trans;
}
.nav {
	@apply text-primary dark:text-darkSecondary;
}
.nav-wrapper {
	height: 50px;
}

.nav-ul {
	display: flex;
	list-style: none;
}

.nav-li {
	padding: 20px;
	@apply hover:text-hover hover:dark:text-darkPrimary cursor-pointer trans;
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
