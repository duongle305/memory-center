<template>
    <div>
        <Banner></Banner>
        <HotSale></HotSale>
        <Brand></Brand>
    </div>
</template>
<script>
    import Banner from '@/components/pages/home/Banner'
    import Brand from '@/components/pages/home/Brand'
    import HotSale from '@/components/pages/home/HotSale'
    export default {
        name:'Home',
        components:{
            Banner,
            Brand,
            HotSale
        }
    }
</script>
