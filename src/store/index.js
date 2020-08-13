import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)
import config from './config'

export default new Vuex.Store({
    plugins: [createPersistedState()],
    modules: {
        config
    }
})
