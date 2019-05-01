import Vue from 'vue'

export default {
    setCategoryHeadlines: function(state, articles) {
        Vue.set(state, 'categoryHeadlines', articles);
    },
    setCategory: function(state, category) {
        Vue.set(state, 'category', category);
    },
    setTopHeadlines: function(state, articles) {
        Vue.set(state, 'topHeadlines', articles);
    }
};