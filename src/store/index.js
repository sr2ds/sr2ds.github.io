import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({

    state: {
        updatesList: []
    },

    getters: {
        getUpdateList: state => state.updatesList
    },

    mutations: {
        loadUpdateList(state, list) {
            state.updatesList = list
        }
    },

    actions: {
        loadUpdateList({ commit }) {
            commit('loadUpdateList',
                [
                    {
                        date: "01/05/2020",
                        title: "Artigo sobre bla bla",
                        link: "http://meulink.com.br",
                        type: "artigo",
                    },
                ])
        }
    }

})

export default store