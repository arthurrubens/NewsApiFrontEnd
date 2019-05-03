<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase">
      <v-toolbar-side-icon>
        <v-icon
          small
          @click="onToggleNavigationIconClick"
        >fa-bars</v-icon>
        
      </v-toolbar-side-icon>
      <span>News</span>
      <span class="font-weight-light">API</span>
      <span style="color: red;"> Front-End</span>
    </v-toolbar-title>
    <v-spacer/>
    <v-text-field
      color="#424242"
      label="Search"
      prepend-inner-icon="search"
      v-model="searchText"
      v-on:keyup.enter="onSearchFieldEnterKeyUp"
    />
  </v-toolbar>
</template>

<script>
export default {
  name: 'TopToolbar',
  props: {
    imgUrl: String
  },
  data() {
    return {
      searchText: this.$store.getters.searchText
    }
  },
  methods: {
    onToggleNavigationIconClick() {
      this.$emit('ToggleNavigationDrawer');
    },
    onSearchFieldEnterKeyUp() {
      this.$store.commit('searchText', this.searchText);
      this.$store.dispatch('loadCategoryHeadlines');
    }
  },
  computed: {
    getArticles() {
      return this.$store.getters.articles;
    }
  }
}
</script>
<style scoped>
</style>
