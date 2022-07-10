<template>
	<nav class="w-48 h-screen flex flex-col bg-primary dark:bg-black">
		<ul class="">
			<li class="li"><NuxtLink to="/home">Home</NuxtLink></li>
			<li class="li"><NuxtLink to="/patients">Patients</NuxtLink></li>
			<li class="li"><NuxtLink to="/dispense">Dispense</NuxtLink></li>
			<li class="li">
				<NuxtLink to="/product-information">Product Information</NuxtLink>
			</li>
			<li class="li">
				<NuxtLink to="/prescription-log">Prescription Log</NuxtLink>
			</li>
			<li class="li"><NuxtLink to="/customers">Customers</NuxtLink></li>
			<li class="li"><NuxtLink to="/credentialing">Credentialing</NuxtLink></li>
			<li class="li"><NuxtLink to="/doctors">Doctors</NuxtLink></li>
			<li class="li"><NuxtLink to="/help">Help</NuxtLink></li>
		</ul>
	</nav>
</template>

<script></script>

<style scoped>
* {
	margin: 0;
	padding: 0;
}
li {
	font-size: 1.2rem;
	@apply rounded-3xl;
}
li:hover {
	cursor: pointer;
	@apply bg-hover dark:bg-darkPrimary rounded-full py-1;
}
a {
	text-decoration: none;
	color: white;
	display: inline-block;
	width: 100%;
	padding: 0.75rem 0 0.75rem 0;
}
a.active,
a.router-link-exact-active {
	color: white;
}
</style>
