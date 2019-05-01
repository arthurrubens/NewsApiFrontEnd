<template>
  <v-list
    style="max-height: 300px;"
    class="scroll-y"
  >
    <v-divider/>
    <v-list-group
      two-line
      v-model="expanded"
    >
    <template v-slot:activator>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>{{selected.title}} {{selected.nativeTitle}}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>
      <v-list-tile
        v-for="language in languages"
        :key="language.languageId"
        @click="onLanguageClick(language)"
      >
        <v-list-tile-content>
          <v-list-tile-title :class="{selected: (selected.languageId == language.languageId)}">{{language.title}}</v-list-tile-title>
          <v-list-tile-sub-title :class="{selected: (selected.languageId == language.languageId)}">{{language.nativeTitle}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list-group>
    <v-divider/>
  </v-list>
</template>

<script>
export default {
  name: 'LanguagesList',
  data() {
    return {
      expanded: false,
      selected: this.$store.getters.selectedLanguage
    }
  },
  computed: {
    languages() {
      return this.$store.getters.languages;
    }
  },
  methods: {
    onLanguageClick(language) {
      this.selected = language;
      this.expanded = false;
      this.$store.commit('selectedLanguage', language.languageId);
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
