<template>
    <header>
        <div class="header__info">
            <div class="container">
                <div class="row">
                    <span class="col-4 d-none d-lg-block text-left">Mở cửa: 9h đến 20h, chủ nhật 10h đến 16h</span>
                    <div class="col-sm-12 col-lg-6 ml-md-auto header__info__new">
                        <span class="header__info__new__user"><i class="fas fa-user-alt"></i> Tài khoản
                        <div id="user-info">
                            <router-link v-if="!getIsLogged" to="/login">Đăng nhập</router-link>
                            <router-link v-if="!getIsLogged" to="/register"><b>Đăng ký</b></router-link>
                            <router-link v-if="getIsLogged" to="/customer">Tài khoản</router-link>
                            <a href="" v-if="getIsLogged"  @click.prevent="logout">Đăng xuất</a>
                        </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="header__main text-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-lg-3 " id="header__main__logo">
                        <i class="fas fa-bars icon-colapse"></i>
                        <router-link to="/"><img :src="getLogo" alt=""></router-link>
                    </div>
                    <SearchBox></SearchBox>
                    <div class="col-md-12 col-lg-4 mt-1 ">
                        <div class="header__main__hotline tele-infomation">
                            <span><i class="fa fa-phone"></i></span>
                            <div class="header__main__hotline-info">
                                <p> (028) 6020 8572</p>
                                <p> DĐ <b style="color:#ffba00;">037 585 274</b></p>
                            </div>
                        </div>
                        <HeaderCart></HeaderCart>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
    import SearchBox from '@/components/SearchBox';
    import Helpers from '@/helpers/helpers';
    import HeaderCart from '@/components/HeaderCart';
    import {mapGetters,mapActions} from 'vuex';
    export default {
        name:'AppHeader',
        data(){
          return{
          }
        },
        mounted(){
          if(this.getLogo === ''){
            this.$store.dispatch('apiGetLogo')
          }
        },
        components:{
            SearchBox,
            HeaderCart
        },
        methods:{
            logout(){
                Helpers.showLoading();
                this.$store.dispatch('logout').then(resp=>{
                    this.$router.push('/login');
                    Helpers.closeLoading();
                }).catch(Helpers.feedback);
            },
        },
        computed:{
            ...mapGetters([
                'getIsLogged',
                'getLogo'
            ]),
        },
    }
</script>
