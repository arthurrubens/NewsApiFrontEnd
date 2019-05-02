<template>
  <v-app>
      <TopToolbar
        @ToggleNavigationDrawer='onToggleNavigationDrawer'
      />
      <NavigationDrawer
        :drawer="drawer"
      />
      <v-content app>
        <v-layout  style="margin: 10px;">
          <v-flex xs12 sm6 offset-sm0>
            <Paging style="margin-bottom: 5px;"/>
            <ArticleCard
              v-for="(article, index) in getArticles"
              :key="index"

              :title="article.title"
              :url="article.url"
              :imgUrl="article.urlToImage"
              :author="article.author"
              :description="article.description"
              :publishedAt="new Date(article.publishedAt)"
              :content="article.content"
            />
            <Paging/>
          </v-flex>
          <TopNews style="margin-left: 10px;"/>
        </v-layout>
      </v-content>
  </v-app>
</template>

<script>
import TopToolbar from './TopToolbar'
import NavigationDrawer from './NavigationDrawer'
import Paging from './Paging'
import ArticleCard from './ArticleCard'
import TopNews from './TopNews'

export default {
  name: 'ArticleList',
  components: {
    TopToolbar,
    NavigationDrawer,
    Paging,
    ArticleCard,
    TopNews
  },
  data: function() {
    return {
      drawer: true
    }
  },
  methods: {
    onToggleNavigationDrawer() {
      this.drawer = !this.drawer;
    }
  },
  mounted() {
    this.$store.dispatch('loadCategoryHeadlines');
  },
  computed: {
    getArticles() {
      return this.$store.getters.categoryHeadlines;
    }
  }
}
</script>
<style scoped>
</style>
