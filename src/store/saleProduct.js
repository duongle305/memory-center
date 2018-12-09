import api from '@/helpers/api';
const saleProduct = {
    state:{
        saleProducts:[],
    },
    getters:{
        getSaleProducts(state){
            return state.saleProducts;
        }
    },
    mutations:{
        setSaleProducts(state, saleProducts){
            state.saleProducts = saleProducts;
        }
    },
    actions:{
        apiGetSaleProducts(context){
            return new Promise((resolve, reject)=>{
                api.get('sale-products').then(resp=>{
                    context.commit('setSaleProducts', resp.data);
                    resolve(resp);
                }).catch(err=>{
                    reject(err);
                })
            })
        }
    }
};
export default saleProduct;

