<template>
    <div class="product-box">
        <div class="product-img">
            <img :src="thumbnail" :alt="title">
            <span v-if="discount" class="product-img__flash-share">- {{ discount }}%</span>
        </div>
        <div class="product-info">
            <router-link :to="{path:'/product/'+slug+'.'+id}">
                <h3 class="product-name">
                    <a href="" :title="title">
                    {{ title }}
                    </a>
                </h3>
            </router-link>
            <div class="product-review-star">
                <i class="fas fa-star" v-for="n in stars"></i>
                <i class="fas fa-star" style="color: lightgray;" v-for="n in 5-stars"></i>
            </div>


            <div class="product-price">
                <div class="new-price price" >{{ priceDiscount }}</div>
                <div v-if="discount > 0" class="old-price price">{{ normalPrice  }}</div>
            </div>
            <div class="product-action">
                <form action="">
                    <router-link tag="button" :to="{path:'/product/'+slug+'.'+id}" class="product-action-buy">
                        <i class="fa fa-shopping-basket"></i>
                        <span>tùy chọn</span>
                    </router-link>
                    <a href="" class="product-action-view"> <i class="fa fa-eye" ></i></a>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:['id','slug','title','thumbnail','price','stars','discount'],
        data(){
            return{
            };
        },
        methods:{
        },
        computed:{
            normalPrice(){
                return this.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
            },
            priceDiscount(){
                return (this.price - (this.discount/100)*this.price).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
            }
        }
    }
</script>
