<template>
  <v-card width="300px" style="max-height: 600px">
    <v-toolbar color="#424242" dark>
      <v-toolbar-side-icon>
        <v-icon color="red">fa-exclamation-circle</v-icon>
      </v-toolbar-side-icon>
      <v-toolbar-title color="red">Top News</v-toolbar-title>
    </v-toolbar>

      <v-container
        style="position: absolute; width: 100%; height: calc(100% - 64px);"
        class="scroll-y"
        pa-0
      >
        <v-card
          v-for="(article, index) in getArticles"
            :key="index"
            style="margin: 5px;"
        >
          <v-card-title primary-title>
            <div>
              <h3 style="margin-bottom: 5px;">{{article.title}}</h3>
              <div class="caption">{{article.description}}</div>
            </div>
          </v-card-title>
        </v-card>
      </v-container>
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
