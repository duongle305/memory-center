import api from "@/helpers/api";
const category = {
    state:{
        categories:[],
        categoryProducts:[],
    },
    getters:{
        getCategories(state){
            return state.categories;
        },
        getCategoryProducts(state) {
            return state.categoryProducts;
        }
    },
    mutations:{
        setCategories(state, categories){
            state.categories = categories;
        },

        setCategoryProducts(state, products){
            state.categoryProducts = products;
        }
    },
    actions:{
        apiGetCategories(context){
            return new Promise((resolve, reject)=>{
                api.get('/categories').then(resp=>{
                    context.commit('setCategories',resp.data);
                    resolve(resp);
                }).catch(err => {
                    reject(err);
                })
            });
        },
        apiGetCategoryProducts(context, category) {
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
