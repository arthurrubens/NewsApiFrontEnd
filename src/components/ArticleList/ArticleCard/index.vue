<template>
  <v-layout>
    <v-flex>
      <v-card
        style="margin-bottom: 20px;"
      >
        <a :href="url" target="_blank">
          <v-parallax
            class="white--text"
            height="200"
            :src="cpImageUrl"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">{{title}}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-parallax>
          <v-card-title>
            <div>
              <span>{{publishedAt.toUTCString()}}</span><br>
              <span>{{description}}</span><br>
              <span class="grey--text">{{author}}</span><br>
            </div>
          </v-card-title>
          </a>
          <BottomToolbar flat/>
        </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import BottomToolbar from './BottomToolbar'
export default {
  name: 'ArticleCard',
  components: {
    BottomToolbar
  },
  props: {
    url: String,
    title: String,
    imgUrl: String,
    author: String,
    description: String,
    publishedAt: Date,
    content: String
  },
  computed: {
    getArticles() {
      return this.$store.getters.articles;
    },
    cpImageUrl() {
      var imgUrl = this.imgUrl;
      if(imgUrl === null) {
        imgUrl = 'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg';
      }
      return imgUrl;
    }
  }
}
</script>
<style scoped>
.headline {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
