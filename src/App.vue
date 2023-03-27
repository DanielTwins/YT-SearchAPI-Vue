 <template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/technologies">Technologies</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import HomePage from './views/HomePage.vue';

export default {
  name: 'App',
  components: {
    HomePage,
  },
};
</script>

<style scoped>
#app {
  padding: 60px;
} 
nav {
  display: flex;
  justify-content: space-between;
  max-width: 20%;
  font-size: 1rem;
  font-weight: bold;
}
</style>
