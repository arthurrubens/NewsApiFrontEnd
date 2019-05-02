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

    languages(state) {
        return state.languages;
    },
    selectedLanguage(state) {
        return state.languages.find(language => language.selected)
    },

    page(state) {
        return state.pagination.page;
    },

    pageSize(state) {
        return state.pagination.pageSize;
    },

    totalResults(state) {
        return state.categoryHeadlines.totalResults;
    },

    pageCount(state, getters) {
        var pageCount = 0;
        if(!isNaN(getters.totalResults) && !isNaN(getters.pageSize)) {
            pageCount = Math.ceil(getters.totalResults/getters.pageSize);
        }
        return pageCount;
    },

    urlParamsString(state, getters) {
        var paramsObj = {};
        paramsObj.country = getters.selectedCountry.countryId;
        paramsObj.category = getters.selectedCategory.categoryId;
        paramsObj.language = getters.selectedLanguage.languageId;
        paramsObj.page = getters.page;
        paramsObj.pageSize = getters.pageSize;
        paramsObj.apiKey = state.apiKey;
        return Object.entries(paramsObj).map(([key, val]) => `${key}=${val}`).join('&');
    }
};