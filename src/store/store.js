import Vuex from 'vuex'
import Vue from 'vue'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

import categories from './data/Categories'
import countries from './data/Countries'
import newsApiKey from './data/NewsApiKey'

Vue.use(Vuex);
export default new Vuex.Store({
    //     
    state: {
        apiKey: newsApiKey.key,
        categories: categories,
        languages: [
            'ar', 'de', 'en', 'es', 'fr', 'he', 'it', 'nl', 'no', 'pt', 'ru', 'se', 'ud', 'zh'
        ],
        countries: countries,
        categoryHeadlines: false,
        topHeadlines: false
    },
    actions,
    getters,
    mutations
});