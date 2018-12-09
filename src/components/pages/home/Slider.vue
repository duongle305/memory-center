<template>
    <div class="container-fluid">
        <carousel v-if="isFinish" :autoplay="true" :nav="false" :items="1" :dots="false" :loop="true">
            <img v-for="slider in sliders" :src="slider.img_path" alt="">
        </carousel>
    </div>
</template>
<script>

    import carousel from 'vue-owl-carousel'
    import Helpers from '@/helpers/helpers';
    import {mapGetters, mapActions} from 'vuex';
    export default {
        components:{
            carousel,
        },
        mounted(){
            this.$store.dispatch('apiGetSliders').then(resp=>{
                this.isF = true;
                this.$emit('finish');
            });
        },
        computed:{
            ...mapGetters([
                'getSliders',
            ]),
            isFinish(){
                return this.isF;
            },
            sliders(){
                return this.getSliders.map((item)=>{
                    item.img_path = Helpers.imgUrl + item.img_path;
                    return item;
                });
            }
        },
        data(){
            return {
                isF: false,
            };
        }
    }
</script>
