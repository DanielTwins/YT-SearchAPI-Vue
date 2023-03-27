<template>
  <main>
    <SearchBar @search="searchVideos" />
    <section class="video-grid">
      <div v-for="video in filteredVideos" :key="video.id">
        <VideoItem
          v-if="video.title && video.bestThumbnail && video.views"
          :video="video"
        />
      </div>
    </section>
    <div class="no-videos" v-if="filteredVideos.length === 0">
      <p>No videos found.<br />Please try again!</p>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import process from 'process/browser';
import VideoItem from "../components/VideoItem.vue";
import SearchBar from "../components/SearchBar.vue";

export default {
  components: { VideoItem, SearchBar },
  name: "HomePage",
  data() {
    return {
      videos: [],
      searchQuery: "Traversy Media",
    };
  },
  mounted() {
    this.fetchVideos();
  },
  methods: {
    searchVideos(query) {
      this.searchQuery = query;
      this.fetchVideos();
    },
    fetchVideos() {
      const options = {
        method: "GET",
        url: "https://youtube-search-results.p.rapidapi.com/youtube-search/",
        params: { q: this.searchQuery },
        headers: {
          /* get some error with .env for the api key! solve it */
          "X-RapidAPI-Key": "1f7b714b59msh0780e8cd20c9a9ep148d2ajsn745a64574912",
          "X-RapidAPI-Host": process.env.RAPIDAPI_HOST,
        },
      };
      axios
        .request(options)
        .then((response) => {
          console.log(response.data.items, "hallo");
          this.videos = response.data.items;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  computed: {
    filteredVideos() {
      if (!this.searchQuery) {
        return this.videos;
      }

      return this.videos.filter(
        (video) => video.title && video.bestThumbnail && video.views
      );
    },
  },
};
</script>

<style scoped>
.video-grid {
  display: grid;
  grid-gap: 20px;
}
.no-videos {
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 3rem;
}
.no-videos p {
  font-size: 1rem;
  font-weight: bold;
}
@media (min-width: 600px) {
  .video-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 900px) {
  .video-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
