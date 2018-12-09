import api from "@/helpers/api";
const slider = {
    state:{
        sliders:[],
    },
    getters:{
        getSliders(state){
            return state.sliders;
        }
    },
    mutations:{
        setSliders(state, sliders){
            state.sliders = sliders;
        }
    },
    actions:{
        apiGetSliders:(context)=>{
            return new Promise((resolve, reject)=>{
                api.get('/sliders').then(resp=>{
                    context.commit('setSliders',resp.data);
                    resolve(resp);
                }).catch(err=>{
                    reject(err);
                });
            });
        }
    }
};
export default slider;
