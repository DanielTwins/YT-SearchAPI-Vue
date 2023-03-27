<template>
  <div>
    <h1>Some technologies I have used for this small project.</h1>
    <ul>
      <li>
        <p>
          <strong>Vue.js:</strong> a popular JavaScript framework for building
          web applications with reactive user interfaces and a virtual DOM.
        </p>
      </li>
      <li>
        <p>
          <strong>Vue Router:</strong> a Vue.js plugin that provides client-side
          routing capabilities for building single-page applications with
          multiple views.
        </p>
      </li>
      <li>
        <p>
          <strong>Axios:</strong> a popular JavaScript library for making HTTP
          requests from a web application.
        </p>
      </li>
      <li>
        <p>
          <strong>YouTube Search Results API:</strong> a third-party API that
          provides access to YouTube search results. In this application, we use
          it to fetch YouTube video data based on user search queries. The query
          number has a hard limit. 
        </p>
      </li>
      <li>
        <p>
          <strong>Tailwind CSS</strong> - a utility-first CSS framework used for
          styling the application.
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TechnologiesPage",
};
</script>

<style scoped>

h1 {
  margin: 3rem 0;
  font-size: 2rem;
  font-weight: 500;
}
li {
margin-bottom: 1rem;
}
</style>
