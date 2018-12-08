import api from "@/helpers/api";
const category = {
    state:{
        categories:[{"id":17,"title":"Ram Desktop","slug":"ram-desktop","menu_icons":"[\"storage\\\/uploads\\\/menu_icons\\\/1544262794-ram-desktopi_menu_571e1.png\",\"storage\\\/uploads\\\/menu_icons\\\/1544262794-ram-desktopi_menu_hover_571e1.png\"]","parent_id":null,"note":null,"children":[]},{"id":18,"title":"\u0110i\u1ec7n Tho\u1ea1i","slug":"dien-thoai","menu_icons":null,"parent_id":null,"note":null,"children":[]},{"id":10,"title":"Best Seller","slug":"best-seller","menu_icons":null,"parent_id":null,"note":"Best Seller","children":[{"id":11,"title":"Top SSD","slug":"top-ssd","menu_icons":null,"parent_id":10,"note":null,"orders":4,"children":[]},{"id":12,"title":"Top USB","slug":"top-usb","menu_icons":null,"parent_id":10,"note":null,"orders":5,"children":[]},{"id":13,"title":"Top SSD","slug":"top-ssd","menu_icons":null,"parent_id":10,"note":null,"orders":6,"children":[]},{"id":14,"title":"Top microSD","slug":"top-microsd","menu_icons":null,"parent_id":10,"note":null,"orders":7,"children":[]},{"id":15,"title":"Top \u1ed5 c\u1ee9ng di \u0111\u1ed9ng","slug":"top-o-cung-di-dong","menu_icons":null,"parent_id":10,"note":null,"orders":8,"children":[]}]},{"id":1,"title":"Th\u1ebb Nh\u1edb","slug":"the-nho","menu_icons":null,"parent_id":null,"note":"Th\u1ebb nh\u1edb","children":[{"id":6,"title":"MicroSD","slug":"microsd","menu_icons":null,"parent_id":1,"note":"MicroSD","orders":5,"children":[]},{"id":7,"title":"SD Card","slug":"sd-card","menu_icons":null,"parent_id":1,"note":"SD Card","orders":6,"children":[]}]},{"id":2,"title":"USB","slug":"usb","menu_icons":null,"parent_id":null,"note":"USB","children":[{"id":3,"title":"SSD","slug":"ssd","menu_icons":null,"parent_id":2,"note":"SSD","orders":6,"children":[]}]},{"id":4,"title":"Ram m\u00e1y t\u00ednh","slug":"ram-may-tinh","menu_icons":null,"parent_id":null,"note":"Ram m\u00e1y t\u00ednh","children":[{"id":16,"title":"Ram Laptop","slug":"ram-laptop","menu_icons":null,"parent_id":4,"note":null,"orders":7,"children":[]}]},{"id":5,"title":"\u1ed4 c\u1ee9ng di \u0111\u1ed9ng","slug":"o-cung-di-dong","menu_icons":null,"parent_id":null,"note":"Ghi ch\u00fa","children":[]}],
    },
    mutations:{
        setCategories(state, categories){
            state.categories = categories;
        },
        getCategories(state){
            return state.categories;
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
        }
    }
};
export default category;
