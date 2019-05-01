import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

export default {
    loadTopHeadlines(context) {
        var country = "",
            topNewsApiUrl = `https://newsapi.org/v2/top-headlines?country=${context.state.country}&apiKey=${context.state.apiKey}`;
        Vue.http.get(topNewsApiUrl).then(response => {
            context.commit('setTopHeadlines', response.body);
        });
    },
    
    loadCategoryHeadlines(context, category) {
        if(category) {
            var topNewsApiUrl = `https://newsapi.org/v2/top-headlines?country=de&category=${category}&apiKey=${context.state.apiKey}`;
        } else {
            var topNewsApiUrl = `https://newsapi.org/v2/top-headlines?country=de&apiKey=${context.state.apiKey}`;
        }
        Vue.http.get(topNewsApiUrl).then(response => {
            context.commit('setCategoryHeadlines', response.body);
        });
    },
};