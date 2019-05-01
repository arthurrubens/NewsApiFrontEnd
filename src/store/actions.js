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
    
    loadCategoryHeadlines(context) {
        var urlParamsString = context.getters.urlParamsString,
            topNewsApiUrl = `https://newsapi.org/v2/top-headlines?${urlParamsString}`;
            console.log(urlParamsString);
        Vue.http.get(topNewsApiUrl).then(response => {
            context.commit('setCategoryHeadlines', response.body);
        });
    },
};