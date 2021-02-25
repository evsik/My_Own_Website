import Vue from 'vue'
import Vuex from 'vuex'
import {get} from "@/utils/reqs";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        dataArr: [],
        dataUrl: 'https://raw.githubusercontent.com/evsik/Landing-with-video/master/photosData.json',
    },
    mutations: {
        getData(state) {
            get(state.dataUrl)
                .then(data => {
                    state.dataArr = data
                });
        }
    },
    actions: {},
    modules: {}
})
