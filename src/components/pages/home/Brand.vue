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
            <carousel v-if="isFinish" :margin="30" :responsiveClass="true" :autoWidth="false" :loop="true" :nav="false" :dots="false" :responsive="{0:{items:2},600:{items:5},1000:{items:7}}">
                <router-link v-for="(item,index) in brands" to="login" :key="index"><img  :src="item.logo" alt=""></router-link>
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
            this.$store.dispatch('apiGetBrands').then(resp=>{
                this.isF = true;
                this.$emit('finish')
            });
        },
        computed:{
            ...mapGetters([
                'getBrands',
            ]),

            isFinish(){
                return this.isF;
            },
            brands(){
                return this.getBrands.map((item)=>{
                    item.logo = Helpers.imgUrl + item.logo;
                    return item;
                });
            }
        },
        data(){
            return {
                isF: false
            };
        }
    }
</script>
