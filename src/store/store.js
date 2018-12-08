import Vue from 'vue';
import Vuex from 'vuex';
import search from '@/store/search';
import user from '@/store/customer';
import category from '@/store/category';
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        search,
        user,
        category,
    },
});
