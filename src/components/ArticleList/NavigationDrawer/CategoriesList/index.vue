<template>
  <v-list class="pt-0" dense>
    <v-divider></v-divider>
    <v-list-tile
      v-for="category in categories"
      :key="category.value"
      @click="onCategoryClick(category.value)"
    >
      <v-list-tile-action>
        <v-icon :class="{selected: (selected == category.value)}">{{category.faIcon}}</v-icon>
      </v-list-tile-action>

      <v-list-tile-content>
        <v-list-tile-title>{{category.title}}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  name: 'CategoriesList',
  props: {
    drawer: Boolean
  },
  data() {
    return {
      selected: false
    }
  },
  computed: {
    categories() {
      return this.$store.getters.categories;
    }
  },
  methods: {
    onCategoryClick(categoryValue) {
      this.$store.dispatch('loadCategoryHeadlines', categoryValue);
      this.selected = categoryValue;
    }
  }
}
</script>
<style scoped>
.selected {
  color: red;
}
</style>
