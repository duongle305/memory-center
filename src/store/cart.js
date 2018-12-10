import api from "@/helpers/api";
const cart = {
    state: {
        cartProducts: [],
    },
    getters: {
        getCartProducts(state){
            return state.cartProducts;
        }
    },
    mutations: {
        setCartProduct(state, product){
            state.cartProducts.push(product);
        }
    },
    actions: {
        addToCart(context, product){
            context.commit('setCartProduct',product);
        }
    }
};
export default cart;
