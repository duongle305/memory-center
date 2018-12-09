import api from "@/helpers/api";
const brand = {
    state:{
        brands:[],
    },
    getters:{
        getBrands(state){
            return state.brands;
        }
    },
    mutations:{
        setBrands(state, brands){
            state.brands = brands;
        }
    },
    actions:{
        apiGetBrands(context){
            return new Promise((resolve, reject)=>{
                api.get('brands').then(resp=>{
                    context.commit('setBrands',resp.data);
                    resolve(resp);
                }).catch(err=>{
                    reject(err);
                })
            });
        }
    }
};
export default brand;
