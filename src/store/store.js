import Vue from 'vue';
import Vuex from 'vuex';
import search from '@/store/search';
import user from '@/store/customer';
import category from '@/store/category';
import brand from '@/store/brand';
import slider from '@/store/slider';
import saleProduct from '@/store/saleProduct';
import singleProduct from '@/store/singleProduct';
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        search,
        user,
        category,
        brand,
        slider,
        saleProduct,
        singleProduct
    },
});
