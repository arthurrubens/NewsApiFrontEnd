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
    }
};