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
                    <span class="text-danger" v-if="error">{{ error }}</span>
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
                password:'',
                error:'',
            };
        },
        methods:{
            validate(){
                this.error = '';
                if(this.email == '' || this.password == ''){
                    this.error = 'Vui lòng nhập đầy đủ thông tin đăng nhập';
                    Helpers.closeLoading();
                    return false;
                }
                return true;
            },
            login(){
                Helpers.showLoading();
                if(this.validate()){
                    this.$store.dispatch('login',{
                        email:this.email,
                        password:this.password,
                    }).then(resp=>{
                        this.$router.push('/');
                        Helpers.closeLoading();
                    }).catch(err=>{
                        if(err.response.status == 401) {
                            if(err.response.data.error == 'invalid_credentials'){
                                this.error = 'Thông tin đăng nhập không chính xác vui lòng kiểm tra lại.';
                            }
                        }
                        if(err.response.status == 500){
                            if(err.response.data.error == 'could_not_create_token'){
                                this.error = 'Có lỗi trong quá trình xử lý vui lòng thử lại sau.';
                            }
                        }
                        Helpers.closeLoading();
                    });
                }
            },
        }
    }
</script>
<style scoped src="@/assets/css/login.css">

</style>
