import Vue from 'vue'

export default {
    setCategoryHeadlines: function(state, articles) {
        Vue.set(state, 'categoryHeadlines', articles);
    },
    selectedCategory: function(state, selectedCategoryId) {
        Object.entries(state.categories).map(([key, val]) => {
            Vue.set(state.categories[key], 'selected', (val.categoryId == selectedCategoryId))
        });
    },
    selectedCountry: function(state, selectedCountryId) {
        Object.entries(state.countries).map(([key, val]) => {
            Vue.set(state.countries[key], 'selected', (val.countryId == selectedCountryId))
        });
    },
    selectedLanguage: function(state, selectedLanguageId) {
        Object.entries(state.languages).map(([key, val]) => {
            Vue.set(state.languages[key], 'selected', (val.languageId == selectedLanguageId))
        });
    },
    setTopHeadlines: function(state, articles) {
        Vue.set(state, 'topHeadlines', articles);
    }
};