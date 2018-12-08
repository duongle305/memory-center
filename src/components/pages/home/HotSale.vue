<template>
    <div class="hot-deal">
        <div class="container">
            <div class="row text-center">
                <div class="col-12 hot-deal__title p-3">
                    <h2><b style="color: red;">BIG SALE</b> 10.10</h2>
                </div>
            </div>
            <div class="row">
            <carousel style="width: 100%" :margin="35" :dots="true" :responsiveClass="false" :nav="false" :responsive="{ 0: { items: 2,loop: false},600: {items: 3,loop: false},1000: {items: 4,loop: false},1200: {items: 5}}">
                <Product v-for="(item,index) in products"
                         :key="index"
                         :title="item.title"
                         :thumbnail="item.thumbnail"
                         :price="item.price"
                         :discount="item.discount"
                         :stars="item.stars"
                ></Product>
            </carousel>
            </div>
        </div>
    </div>
</template>
<script>
    import carousel from 'vue-owl-carousel'
    import Product from '@/components/Product'
    export default {
        components:{
            carousel,
            Product
        },
        data(){
            return{
                products:[
                    {
                        title:'SSD Samsung 860 Evo 250GB 2.5-Inch SATA III MZ-76E250BW',
                        thumbnail:'http://bizweb.dktcdn.net/thumb/medium/100/329/122/products/860-evo-2-5-inch-01.jpg?v=1539229693157',
                        price:1900000,
                        discount:0,
                        stars:4,
                    },
                    {
                        title:'SSD Samsung 860 Evo 250GB 2.5-Inch SATA III MZ-76E250BW',
                        thumbnail:'http://bizweb.dktcdn.net/thumb/medium/100/329/122/products/860-evo-2-5-inch-01.jpg?v=1539229693157',
                        price:1900000,
                        discount:5,
                        stars:4,
                    }
                ]
            };
        }
    }
</script>
