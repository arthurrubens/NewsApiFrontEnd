import Vue from 'vue'

export default {
    setCategoryHeadlines(state, articles) {
        Vue.set(state, 'categoryHeadlines', articles);
    },
    selectedCategory(state, selectedCategoryId) {
        Object.entries(state.categories).map(([key, val]) => {
            Vue.set(state.categories[key], 'selected', (val.categoryId == selectedCategoryId))
        });
    },
    selectedCountry(state, selectedCountryId) {
        Object.entries(state.countries).map(([key, val]) => {
            Vue.set(state.countries[key], 'selected', (val.countryId == selectedCountryId))
        });
    },
    selectedLanguage(state, selectedLanguageId) {
        Object.entries(state.languages).map(([key, val]) => {
            Vue.set(state.languages[key], 'selected', (val.languageId == selectedLanguageId))
        });
    },
    setTopHeadlines(state, articles) {
        Vue.set(state, 'topHeadlines', articles);
    },
    setPage(state, page) {
        Vue.set(state.pagination, 'page', page);
    }
};