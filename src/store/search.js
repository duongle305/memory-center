import api from "@/helpers/api";
const search = {
    state:{
        products:[],
    },
    mutations:{
        setProducts(state, products){
            state.products = products;
        }
    },
    actions:{
        search:(context,keyword)=>{
            return new Promise((resolve,reject)=>{
                api.get('search',{'keyword':keyword}).then(resp=>{
                    context.commit('setProducts',resp.data);
                }).catch(err=>{
                    reject(err);
                })
            });
        }
    }
};
export default search;
