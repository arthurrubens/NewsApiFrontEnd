import countries from './data/Countries.js'

export default {
    categoryHeadlines: function(state) {
        return state.categoryHeadlines.articles;
    },
    topHeadlines: function(state) {
        return state.topHeadlines.articles;
    },
    categories: function(state) {
        return state.categories;
    },
    countries: function(state) {
        return state.countries;
    }
};