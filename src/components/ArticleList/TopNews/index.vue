<template>
  <v-card width="350px" style="max-height: 600px">
    <v-toolbar color="#424242" dark>
      <v-toolbar-side-icon>
        <v-icon color="red">fa-exclamation-circle</v-icon>
      </v-toolbar-side-icon>
      <v-toolbar-title color="red">Top News</v-toolbar-title>
    </v-toolbar>
      <v-list
        style="position: absolute; width: 100%; height: calc(100% - 64px);"
        class="scroll-y"
        pa-0
        two-line
      >
        <v-list-tile
          v-for="(article, index) in getArticles"
            :key="index"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{article.title}}</v-list-tile-title>
            <v-list-tile-sub-title>{{article.description}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
  </v-card>
</template>

<script>
export default {
  name: 'TopNews',
  mounted() {
    this.$store.dispatch('loadTopHeadlines');
  },
  computed: {
    getArticles() {
      return this.$store.getters.topHeadlines;
    }
  }
}
</script>
<style scoped>
</style>
