import api from "@/helpers/api";

const search = {
  state: {
    singleProduct: [],
  },
  mutations: {
    setSingleProduct(state, products) {
      state.singleProduct = products;
    }
  },
  getters: {
    getProductName(state) {
      return state.singleProduct.title
    },
    getProductImage(state) {
      return state.singleProduct.images
    },
    getProductPrice(state) {
      return state.singleProduct.price
    },
    getBrand(state) {
      return state.singleProduct.brand_info;
    },
    getDiscount(state) {
      return state.singleProduct.discount;
    },
    getAttributes(state) {
      return state.singleProduct.attributes;
    },
    getDescription(state){
      return state.singleProduct.description
    }
  },
  actions: {
    getSingleProduct(context, id) {
      return new Promise((resolve, reject) => {
        api.get(`/product/${id}`).then(resp => {
          context.commit('setSingleProduct', resp.data);
          resolve(resp);
        }).catch(err => {
          reject(err);
        })
      });
    }
  }
};
export default search;
