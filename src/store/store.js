import Vuex from 'vuex'
import Vue from 'vue'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

import categories from './data/Categories'
import countries from './data/Countries'

Vue.use(Vuex);
export default new Vuex.Store({
    //     
    state: {
        apiKey: '212cc9e74a5b4162b2e7167c2a876f1d',
        categories: categories,
        languages: [
            'ar', 'de', 'en', 'es', 'fr', 'he', 'it', 'nl', 'no', 'pt', 'ru', 'se', 'ud', 'zh'
        ],
        countries: countries,
        category: false,
        country: "de",
        categoryHeadlines: false,
        topHeadlines: false
    },
    actions,
    getters,
    mutations
});