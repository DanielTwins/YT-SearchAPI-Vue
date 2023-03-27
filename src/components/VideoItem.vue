<template>
  <div class="mb-10">
    <a :href="video.url" target="_blank">
      <div class="video-item">
        <img
          v-if="video && video.bestThumbnail"
          :src="video.bestThumbnail.url"
          alt="{{ video.name }}"
        />
        <button class="play-button">
          <img src="../images/play-icon.png" alt="Play" />
        </button>
      </div>
    </a>
    <h2>{{ video.name }}</h2>
    <p>{{ video.title }}</p>
    <p>{{ video.views }} <strong>Views</strong> for {{ video.uploadedAt }}</p>
    <a :href="video.url" target="_blank">Watch video</a>
  </div>
</template>

<script>
export default {
  name: "VideoItem",
  props: {
    video: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
.video-item {
  position: relative;
  background: red;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.play-button img {
  width: 50%;
  height: 50%;
}
</style>
