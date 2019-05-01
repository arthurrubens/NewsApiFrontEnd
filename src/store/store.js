import Vuex from 'vuex'
import Vue from 'vue'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

import categories from './data/Categories'
import countries from './data/Countries'
import languages from './data/Languages'
import newsApiKey from './data/NewsApiKey'

Vue.use(Vuex);
export default new Vuex.Store({
    //     
    state: {
        apiKey: newsApiKey.key,
        categories: categories,
        languages: languages,
        countries: countries,
        categoryHeadlines: false,
        topHeadlines: false
    },
    actions,
    getters,
    mutations
});