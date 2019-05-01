<template>
  <v-list  two-line subheader>
    <v-divider></v-divider>
    <v-list-group
      no-action
    >
    <template v-slot:activator>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>Local News</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>
      <v-list-tile
        v-for="(country, countryId) in countries"
        :key="countryId"
        @click="onCategoryClick(countryId)"
      >
        <v-list-tile-content pa-0 ma-0>
          <v-list-tile-title :class="{selected: (selected == countryId)}">{{country.commonName}}</v-list-tile-title>
          <v-list-tile-sub-title>{{country.officialName}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list-group>
  </v-list>
</template>

<script>
export default {
  name: 'CountriesList',
  props: {
    drawer: Boolean
  },
  data() {
    return {
      selected: false
    }
  },
  computed: {
    countries() {
      return this.$store.getters.countries;
    }
  },
  methods: {
    onCategoryClick(countryId) {
      this.selected = countryId;
    }
  }
}
</script>
<style scoped>
.selected {
  color: red;
}
</style>
