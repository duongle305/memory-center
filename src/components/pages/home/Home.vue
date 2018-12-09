<template>
    <div>
        <Banner></Banner>
        <HotSale></HotSale>
        <ProductCategory :category="'ssd'"></ProductCategory>
        <ProductCategory :category="'ram-may-tinh'"></ProductCategory>
        <Brand></Brand>
    </div>
</template>
<script>
    import Banner from '@/components/pages/home/Banner'
    import Brand from '@/components/pages/home/Brand'
    import HotSale from '@/components/pages/home/HotSale'
    import ProductCategory from '@/components/pages/home/ProductCategory'
    export default {
        components:{
            Banner,
            Brand,
            HotSale,
            ProductCategory
        }
    }
</script>
