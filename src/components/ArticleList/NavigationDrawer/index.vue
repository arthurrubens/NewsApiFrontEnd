<template>
  <v-navigation-drawer app permanent dark width="180px">
    <v-list class="pa-1">
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <img src="https://pbs.twimg.com/profile_images/942571181051400192/rudqtcNK_400x400.jpg">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>News</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <CategoriesList/>
    <CountriesList/>
    <LanguagesList/>
  </v-navigation-drawer>
</template>

<script>
import CategoriesList from './CategoriesList'
import CountriesList from './CountriesList'
import LanguagesList from './LanguagesList'

export default {
  name: 'NavigationDrawer',
  components: {
    CategoriesList,
    CountriesList,
    LanguagesList
  },
  props: {
    drawer: Boolean
  },
  data() {
    return {
      
    }
  },
  computed: {
    categories() {
      return this.$store.getters.categories;
    }
  }
}
</script>
<style scoped>
</style>
