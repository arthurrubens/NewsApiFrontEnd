<template>
  <v-list class="pt-0" dense>
    <v-divider></v-divider>
    <v-list-tile
      v-for="category in categories"
      :key="category.categoryId"
      @click="onCategoryClick(category)"
    >
      <v-list-tile-action>
        <v-icon :class="{selected: (selected.categoryId == category.categoryId)}">{{category.faIcon}}</v-icon>
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
  data() {
    return {
      selected: this.$store.getters.selectedCategory
    }
  },
  computed: {
    categories() {
      return this.$store.getters.categories;
    }
  },
  methods: {
    onCategoryClick(category) {
      this.selected = category;
      this.$store.commit('selectedCategory', category.categoryId);
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
