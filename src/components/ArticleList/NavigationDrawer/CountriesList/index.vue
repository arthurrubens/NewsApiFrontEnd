<template>
  <v-list
    style="max-height: 300px;"
    class="scroll-y"
  >
    <v-divider/>
    <v-list-group
      two-line
    >
    <template v-slot:activator>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>{{selected.flag}} {{selected.commonName}}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>
      <v-list-tile
        v-for="country in countries"
        :key="country.countryId"
        @click="onCategoryClick(country)"
      >
        <v-list-tile-action style="min-width: 1em; padding-right: 5px;">
          {{country.flag}}
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title :class="{selected: (selected.countryId == country.countryId)}">{{country.commonName}}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list-group>
    <v-divider/>
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
      selected: this.$store.getters.selectedCountry
    }
  },
  computed: {
    countries() {
      return this.$store.getters.countries;
    }
  },
  methods: {
    onCategoryClick(country) {
      this.selected = country;
      this.$store.commit('selectedCountry', country.countryId);
      this.$store.dispatch('loadCategoryHeadlines');
    }
  }
}
</script>
<style scoped>
.selected {
  color: red;
}
</style>
