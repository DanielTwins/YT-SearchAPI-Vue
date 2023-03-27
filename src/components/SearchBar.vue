<template>
  <form class="search-form" @submit.prevent="search">
    <input
      type="text"
      v-model="query"
      placeholder="Search for videos"
    />
    <button type="submit">Search</button>
  </form>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    search() {
      this.$emit("search", this.query);
    },
  },
};
</script>

<style scoped>
.search-form {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

input[type="text"] {
  padding: 10px;
  border: none;
  border-radius: 5px 0 0 5px;
}

button[type="submit"] {
  background-color: #4caf50;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}
</style>
