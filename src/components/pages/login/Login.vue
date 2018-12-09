<template>
    <div>
        <section class="bread-crumb">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item breadcrumb-home"><router-link to="/">Trang chủ</router-link></li>
                                <li class="breadcrumb-item active" aria-current="page">Đăng nhập</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
        <div class="container login-container">
            <h5 class="title-head text-uppercase">Đăng nhập</h5>
            <div class="row">
                <div class="col-lg-6">
                    <aside>Nếu bạn đã có tài khoản, đăng nhập tại đây.</aside>
                    <form @submit.prevent="login" class="login-form">
                        <div class="form-group">
                            <label>Email <span class="text-danger">*</span></label>
                            <input type="email" v-model="email" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <label>Mật khẩu <span class="text-danger">*</span></label>
                            <input type="password" v-model="password"  placeholder="Mật khẩu">
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary">Đăng nhập</button>
                            <router-link to="/register" tag="button" class="btn">Đăng ký</router-link>
                        </div>
                    </form>
                </div>
                <div class="col-lg-6">
                    <aside>Bạn quên mật khẩu? Nhập địa chỉ email để lấy lại mật khẩu qua email.</aside>
                    <form action="" class="login-form">
                        <div class="form-group">
                            <label>Email <span class="text-danger">*</span></label>
                            <input type="email" placeholder="Email">
                        </div>
                    </form>
                    <div> <button class="btn btn-primary">Lấy lại mật khẩu</button></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Helpers from '@/helpers/helpers';
    export default {
        data(){
            return {
                email:'',
                password:''
            };
        },
        mounted(){
          Helpers.closeLoading();
        },
        methods:{
            login(){
                Helpers.showLoading();
              this.$store.dispatch('login',{
                email:this.email,
                password:this.password,
              }).then(resp=>{
                this.$router.push('/');
                Helpers.closeLoading();
              }).catch(Helpers.feedback);
            },
        }
    }
</script>
<style scoped src="@/assets/css/login.css">

</style>
