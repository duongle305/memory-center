<template>
    <div class="producer-list">
        <div class="container">
            <div class="row">
                <div class=" col-12 producer-list__title text-center">
                    <span>CÁC NHÃN HIỆU ĐƯỢC ƯA CHUỘNG</span>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <carousel :margin="30" :responsiveClass="true" :autoWidth="true" :loop="true" :nav="false" :dots="false" :responsive="{0:{items:2},600:{items:5},1000:{items:7}}">
                <img v-for="(brand,index) in brands" :src="brand.logo" alt="" :key="index">
            </carousel>
        </div>
    </div>

</template>
<script>
    import {mapGetters, mapActions} from 'vuex';
    import Helpers from '@/helpers/helpers';
    import carousel from 'vue-owl-carousel'
    export default {
        components:{carousel},
        mounted(){
            this.$store.dispatch('apiGetBrands');
        },
        computed:{
            ...mapGetters([
                'getBrands',
            ]),
            brands(){
                return this.getBrands.map((item)=>{
                    console.log(item);
                    item.logo = Helpers.imgUrl + item.logo;
                    return item;
                });
            }
        },
        data(){
            return {

            };
        }
    }
</script>
