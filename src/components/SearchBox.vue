<template>
    <div class="col-lg-5 col-md-12 col-sm-12 text-center">
        <form @submit.prevent="search" id="formsearch">
            <input id="searchbox" type="search" v-model="keyword" placeholder="Sản phẩm bạn muốn tìm ...">
            <button type="submit" id="submit"><i class="fas fa-search"></i></button>
        </form>
    </div>
</template>
<script>
    import Helpers from '@/helpers/helpers';
    export default {
        data(){
            return {
                keyword:'',
            }
        },
        methods:{
            search(){
                this.$router.push({path:'/search/q='+this.keyword});
            }
        }
    }
</script>
