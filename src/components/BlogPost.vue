<template>
	<div class="flex flex-col pt-8">
		<h2 class="text-white sm:text-md md:text-lg lg:text-xl pb-5">Blog Posts</h2>
		<div v-for="(post, index) in feedData" :key="index">
			<a
				:href="post.link"
				target="_blank"
				rel="noopener noreferrer"
				class="text-white hover:text-green-500"
			>
				<p>{{ post.pubDate }}</p>
				<p>
					{{ post.title }}
				</p>
			</a>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue'
import { onMounted } from '@vue/runtime-core'

export default {
	setup() {
		const feedData = ref([])

		const getFeed = () => {
			return fetch(
				'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40zhenkit'
			).then((response) => response.json())
		}
		onMounted(async () => {
			const data = await getFeed()
			feedData.value = data.items
		})
		return {
			feedData,
		}
	},
}
</script>

<style>
</style>