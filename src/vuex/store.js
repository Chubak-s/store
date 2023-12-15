import {createStore} from 'vuex';

const store = createStore({
    state(){
        return {
            cart: [],
            liked: [],
            isVisibleLogin: false,
        }
    },
    mutations:{
    },
    action: {},
    getters: {},
})

export default store;
