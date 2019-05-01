import countries from './data/Countries.js'

export default {
    categoryHeadlines(state) {
        return state.categoryHeadlines.articles;
    },
    topHeadlines(state) {
        return state.topHeadlines.articles;
    },
    categories(state) {
        return state.categories;
    },
    selectedCategory(state) {
        return state.categories.find(category => category.selected)
    },

    countries(state) {
        return state.countries;
    },
    selectedCountry(state) {
        return state.countries.find(country => country.selected)
    },

    urlParamsString(state, getters) {
        var paramsObj = {};
        paramsObj.country = getters.selectedCountry.countryId;
        paramsObj.category = getters.selectedCategory.categoryId;
        paramsObj.apiKey = state.apiKey;
        return Object.entries(paramsObj).map(([key, val]) => `${key}=${val}`).join('&');
    }
};