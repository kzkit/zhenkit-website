<template>
	<div>
		<h3
			class="text-center text-white pt-16 pb-5 sm:text-md md:text-lg lg:text-xl"
		>
			My NFTs
		</h3>
		<nft-card
			orientationMode="auto"
			contractAddress="0x177ef8787ceb5d4596b6f011df08c86eb84380dc"
			tokenId="8592"
		>
		</nft-card>
	</div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
export default {
	setup() {
		onMounted(() => {
			let embedNFT = document.createElement('script')
			embedNFT.setAttribute(
				'src',
				'https://unpkg.com/embeddable-nfts/dist/nft-card.min.js'
			)
			document.head.appendChild(embedNFT)
		})
	},
}
</script>

<style>
</style>