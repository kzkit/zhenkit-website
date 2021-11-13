<template>
	<div class="h-screen min-h-full flex flex-col">
		<div
			class="
				font-sans
				bg-gray-900
				text-white
				min-h-full
				flex flex-col flex-grow
				transition-colors
				duration-200
			"
		>
			<div class="mx-auto w-full max-w-2xl space-y-2 p-4">
				<Navigation />
				<h1 class="text-white sm:text-lg md:text-xl lg:text-4xl">
					Kong Zhen Kit
				</h1>
				<p class="text-white pt-5 sm:text-md md:text-lg lg:text-xl">
					Developer & Web 3 Enthusiast 🚀
				</p>
				<p class="text-white pt-5">
					Exploring Solidity and smart contracts. Based in Kuala Lumpur, MY.
				</p>
				<NFT />
			</div>
		</div>
	</div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import NFT from '../components/NFT.vue'

export default {
	name: 'Home',
	components: {
		Navigation,
		NFT,
	},
	setup() {},
}
</script>

<style>
</style>