import api from '@/helpers/api';
import Helpers from '@/helpers/helpers';
const customer = {
    state:{
        isLogged: false,
        token:'',
        customer:{},
        provinces:[],
        districts:[],
        wards:[],
        logo:'',
    },
    getters:{
        getIsLogged(state){
            return state.isLogged;
        },
        getCustomer(state){
            return state.customer;
        },
        getProvinces(state){
            return state.provinces
        },
        getDistricts(state){
            return state.districts;
        },
        getWards(state){
            return state.wards;
        },
        getLogo(state){
          return state.logo
        },

    },
    mutations:{
        setIsLogged(state, status){
            state.isLogged = status;
        },
        setToken(state, token){
            Helpers.setToken(token);
            state.token = token;
        },
        setCustomer(state, customer){
            state.customer = customer;
        },
        setProvinces(state, provinces){
            state.provinces = provinces;
        },
        setDistricts(state, districts){
            state.districts = districts;
        },
        setWards(state, wards){
            state.wards = wards;
        },
        setLogo(state,logo){
          state.logo = logo
        },

    },
    actions:{
        register:(context, credentials)=>{
            return new Promise((resolve,reject)=>{
                api.post('auth/register',credentials).then(resp=>{
                    context.commit('setToken',resp.data.access_token);
                    context.commit('setIsLogged',true);
                    context.dispatch('customerInfo');
                    resolve(resp);
                }).catch(err=>{
                    reject(err);
                });
            });
        },
        apiGetProvinces(context, search){
            return new Promise((resolve, reject)=>{
                api.get('/provinces',{keyword: search}).then(resp=>{
                    context.commit('setProvinces',resp.data);
                    resolve(resp);
                }).catch(err=>{
                    reject(err);
                })
            });
        },
        apiGetDistricts(context, provinceId){
            return new Promise((resolve, reject)=>{
                api.get('/provinces',{province_id:provinceId}).then(resp=>{
                    context.commit('setDistricts',resp.data);
                    resolve(resp);
                }).catch(err=>{
                    reject(err);
                })
            });
        },
        apiGetWards(context, districtId){
            return new Promise((resolve, reject)=>{
                api.get('/wards',{district_id: districtId}).then(resp=>{
                    context.commit('setWards',resp.data);
                    resolve(resp);
                }).catch(err=>{
                    reject(err);
                })
            });
        },
        login: (context, credentials)=>{
            return new Promise((resolve,reject)=>{
                api.post('auth/login',credentials).then(resp=>{
                    context.commit('setToken',resp.data.access_token);
                    context.commit('setIsLogged',true);
                    context.dispatch('customerInfo');
                    resolve(resp);
                }).catch(err=>{
                    reject(err);
                });
            });
        },
        logout: (context)=>{
            return new Promise((resolve,reject)=>{
                api.post('auth/logout').then(resp=>{
                    context.commit('setIsLogged',false);
                    context.commit('setCustomer',{});
                    context.commit('setToken','');
                    localStorage.clear();
                    resolve(resp)
                }).catch(err=>{
                    reject(err);
                })
            });
        },
        refresh:(context)=>{
            return new Promise((resolve,reject)=>{
                api.post('auth/refresh').then(resp=>{
                    context.commit('setToken',resp.data.access_token);
                    resolve(resp);
                }).catch(err=>{
                    reject(err);
                })
            });
        },
        customerInfo:(context)=>{
            return new Promise((resole, reject)=>{
                api.post('auth/me').then(resp=>{
                    context.commit('setCustomer',resp.data);
                    resole(resp);
                }).catch(err=>{
                    reject(err);
                })
            });
        },
        apiGetLogo:(context)=>{
          return new Promise((resole, reject)=>{
              if(Helpers.getLogoUrl()){
                context.commit('setLogo', Helpers.getLogoUrl())
              }else{
                  api.get('logo').then(resp=>{
                      Helpers.setLogoUrl(resp.data);
                      context.commit('setLogo',resp.data);
                      resole(resp.data)
                  }).catch(err=>{
                      reject(err);
                  });
              }
          });
        }
    }
};
export default customer;
