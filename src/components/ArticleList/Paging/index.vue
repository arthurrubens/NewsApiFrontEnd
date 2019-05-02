<template>
  <div class="text-xs-center">
    <v-pagination
      v-model="page"
      :length="pageCount"
      :total-visible="5"
      circle
      prev-icon="fa-angle-left"
      next-icon="fa-angle-right"
    />
  </div>
</template>

<script>
export default {
  name: 'Paging',
  computed: {
    page: {
      get() {
        return this.$store.getters.page;
      },
      set(page) {
        this.$store.commit('setPage', page);
        this.$store.dispatch('loadCategoryHeadlines');
      }
    },
    pageCount() {
      return this.$store.getters.pageCount;
    }
  }
}
</script>
<style scoped>
</style>
