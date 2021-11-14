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
				<Introduction />
				<BlogPost />
			</div>
		</div>
	</div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import Introduction from '../components/Introduction.vue'
import BlogPost from '../components/BlogPost.vue'

export default {
	name: 'Home',
	components: {
		Navigation,
		Introduction,
		BlogPost,
	},
}
</script>