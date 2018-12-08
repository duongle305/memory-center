import api from "@/helpers/api";
const category = {
    state:{
        categories:[],
        categoryProducts:[],
    },
    mutations:{
        setCategories(state, categories){
            state.categories = categories;
        },
        getCategories(state){
            return state.categories;
        },
        setCategoryProducts(state, products){
            state.categoryProducts = products;
        }
    },
    actions:{
        getCategory(context){
            return new Promise((resolve, reject)=>{
                api.get('/categories').then(resp=>{
                    context.commit('setCategories',resp.data);
                    resolve(resp);
                }).catch(err => {
                    reject(err);
                })
            });
        },
        getCategoryProducts(context, category) {
            return new Promise((resolve, reject)=>{
                api.get('/category/'+category).then(resp=>{
                    context.commit('setCategoryProducts',resp.data);
                    resolve(resp);
                }).catch(err=>{
                    reject(err);
                })
            });
        }

    }
};
export default category;
