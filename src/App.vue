<template>
    <div id="app">
        <Loading></Loading>
        <AppHeader></AppHeader>
        <AppMenu></AppMenu>
        <router-view/>
        <AppFooter></AppFooter>
    </div>
</template>

<script>
    import Loading from '@/components/Loading';
    import AppHeader from '@/components/layouts/AppHeader';
    import AppMenu from '@/components/layouts/AppMenu';
    import AppFooter from '@/components/layouts/AppFooter';
    import Helpers from '@/helpers/helpers';
    export default {
        name: 'App',
        components:{
            Loading,
            AppHeader,
            AppMenu,
            AppFooter
        },
        mounted(){
            this.hasLogin();
            window.addEventListener("load",function () {
                setTimeout(()=>{
                    let preloader =  document.getElementsByClassName('lds-screen')[0];
                    preloader.classList.add('hide');
                },500);
            });
        },
        methods:{
            hasLogin(){
                if(Helpers.getToken()){
                    this.$store.commit('setToken',Helpers.getToken());
                    this.$store.commit('setIsLogged',true);
                    this.$store.dispatch('customerInfo');
                    this.$store.dispatch('refresh').then(resp=>{

                    }).catch(err=>{
                        localStorage.clear();
                        this.hasLogin();
                    });
                }else{
                    localStorage.clear();
                }
            }
        }
    }
</script>
