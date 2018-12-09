<template>
  <router-link :to="{path:'/category/'+category.slug}" tag="li" class="nav_item">
    <span class="cate-normal" v-if="mainCategory" :style="normalBackground"></span>
    <span class="cate-hover" v-if="mainCategory" :style="hoverBackground"></span>
    <router-link :to="{path:'/category/'+category.slug}" :title="category.title">
      {{ category.title }}
      <i v-if="mainCategory" class="ti-angle-right drop-icon"></i>
    </router-link>
    <ul v-if="withSub" class="row ul_content_right_1">
      <CategoryItem v-for="(categoryChild, index) in category.children" :category="categoryChild" :key="index"></CategoryItem>
    </ul>
  </router-link>
</template>
<script>
  import Helpers from '@/helpers/helpers';
  import CategoryItem from './CategoryItem';
  export default {
    name:'CategoryItem',
    components:{
      CategoryItem,
    },
    props: {
      category : Object,
    },
    computed:{
      mainCategory(){
        return (this.category.parent_id == null);
      },
      withSub(){
        return (this.category.children && this.category.children.length);
      },
      normalBackground(){
        if(this.category.menu_icons){
          return { 'background-image':`url(${Helpers.imgUrl+JSON.parse(this.category.menu_icons)[0]})`};
        }
        return false;
      },
      hoverBackground(){
        if(this.category.menu_icons){
          return { 'background-image':`url(${Helpers.imgUrl+JSON.parse(this.category.menu_icons)[1]})`};
        }
        return false;
      }
    },
    methods:{
    },
    data(){
      return {
      };
    },
  }
</script>
<style scoped>
  .list_menu_header .ul_menu>.nav_item{
    border-bottom:none;
    padding: 10px 0;
  }
  .cate-normal, .cate-hover{
    display: inline-block;
    width: 20px;
    height: 20px;
    position: absolute;
    left: 10px;
    background-size: contain !important;
    background-repeat: no-repeat !important;
  }
  .cate-hover{
    opacity: 0;
  }
  li.nav_item:hover .cate-normal{
    opacity: 0;
  }
  li.nav_item:hover .cate-hover{
    opacity: 1;
  }
  .list_menu_header .ul_menu>.nav_item>.ul_content_right_1{
    flex-wrap: wrap;
    flex: 25%;
  }
  .list_menu_header .ul_menu>.nav_item>.ul_content_right_1>li {
    position: relative;
    width:25% ;
  }
  .list_menu_header .ul_menu>.nav_item>.ul_content_right_1>li a:hover{
    color: #005BB2;
  }
  .list_menu_header .ul_menu>.nav_item>.ul_content_right_1>li:hover>a{
    color: #005BB2;
  }
  .list_menu_header .ul_menu>.nav_item>.ul_content_right_1>li>ul{
    width: 100%;
  }
  .list_menu_header .ul_menu>.nav_item>.ul_content_right_1>li>ul>li {
    display: block;
    padding: 3px 0;
    width: 100%;
  }

</style>
