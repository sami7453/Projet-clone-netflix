<template>
    <article class="mini-card" ref="cardRef" @mouseenter="onHover" @mouseleave="onLeave">
		<img :src="data.poster" :alt="data.title" class="thumb" />
		<teleport to="body">
			<transition name="fade-scale">
				<div v-if="hover" class="card-expanded" :style="fixedStyle" @mouseenter="onHover" @mouseleave="onLeave">
					<img :src="data.poster" :alt="data.title" class="preview" />
					<div class="info">
						<h3>{{ data.title }}</h3>
						<div class="meta">
							<span>{{ formatDate(data.release_date) }}</span>
							<span>+{{ data.age_limit }}</span>
							<span>{{ data.duration }}</span>
							<span>{{ data.quality }}</span>
						</div>
						<p class="description">{{ data.description }}</p>
						<div class="actions">
							<RouterLink :to="`/player/series/${props.data.id}`">
								<button class="play">▶</button>
							</RouterLink>
							<button>✔</button>
							<button>👍</button>
							<button @click="bookmarkVideo">⬇️</button>
						</div>
					</div>
				</div>
			</transition>
		</teleport>
    </article>
</template>

<script setup lang="ts">
	import { ref } from "vue";
	import type VideoInterface from "../interfaces/VideoInterface";

	interface VideoComponentProperties {
		data: VideoInterface
	}

	const props = defineProps<VideoComponentProperties>();
	
	const hover = ref(false);
	const cardRef = ref<HTMLElement | null>(null);
	const fixedStyle = ref({});
	
	const formatDate = (dateString: string) => {
		if (!dateString) { return "" };
		const date = new Date(dateString);
		return new Intl.DateTimeFormat("en-GB", {
			day: "2-digit",
			month: "long",
			year: "numeric",
		}).format(date);
	};

	const bookmarkVideo = async () => {
		try {
			const response = await fetch(`http://localhost:3000/bookmarks/${1}/${props.data.id}}`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
			});

			if (!response.ok) { throw new Error("Failed to bookmark the video") };
		} catch (error) {
			console.error("Error bookmarking video:", error);
		}
	}

	const onHover = () => {
		hover.value = true;
		if (cardRef.value) {
			const rect = cardRef.value.getBoundingClientRect();
			const cardWidth = 360;
			const spacing = 16;
			let left = rect.left + rect.width / 2 - cardWidth / 2;
		
			const maxLeft = window.innerWidth - cardWidth - spacing;
			if (left < spacing) { left = spacing }
			else if (left > maxLeft) { left = maxLeft };
		
			fixedStyle.value = {
				position: 'absolute',
				top: `${window.scrollY + rect.top - 100}px`,
				left: `${left}px`,
				zIndex: 99
			}
		}
	}
  
	const onLeave = () => {
		hover.value = false;
	}
</script>
  
<style scoped lang="css">
	.mini-card {
		position: relative;
		width: 180px;
		height: 270px;
		flex: 0 0 auto;
		overflow: visible;
		border-radius: 6px;
		cursor: pointer;
	}
	
	.thumb {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 6px;
		transition: transform 0.3s ease;
	}
	
	.card-expanded {
		width: 360px;
		height: 420px;
		background-color: #181818;
		border-radius: 8px;
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.8);
		padding-bottom: 1rem;
		transition: all 0.3s ease;
		position: absolute;
	}
	
	.preview {
		width: 100%;
		height: 180px;
		object-fit: cover;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
	}
	
	.info {
		padding: 0.75rem 1rem;
		color: white;
	}
	
	.info h3 {
		margin: 0.5rem 0;
		font-size: 1.1rem;
	}
	
	.meta span {
		margin-right: 0.5rem;
		font-size: 0.85rem;
		color: #aaa;
	}
	
	.description {
		font-size: 0.9rem;
		margin: 0.5rem 0 1rem;
	}
	
	.actions {
		display: flex;
		gap: 0.5rem;
	}
	
	.actions button {
		background: #fff;
		color: #000;
		border: none;
		border-radius: 50%;
		width: 32px;
		height: 32px;
		font-size: 1rem;
		cursor: pointer;
		transition: background 0.3s;
	}
	
	.actions .play {
		background: #e50914;
		color: white;
		font-weight: bold;
	}
	
	.fade-scale-enter-active,
	.fade-scale-leave-active {
		transition: all 0.25s ease;
	}
	
	.fade-scale-enter-from,
	.fade-scale-leave-to {
		opacity: 0;
		transform: scale(0.95);
	}
</style>
