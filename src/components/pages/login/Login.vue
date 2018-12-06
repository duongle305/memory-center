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
            <h5 class="title-head">ĐĂNG NHẬP TÀI KHOẢN</h5>
            <div class="row">
                <div class="col-lg-6">
                    <aside>Nếu bạn đã có tài khoản, đăng nhập tại đây</aside>
                    <form action="" class="login-form">
                        <label title="">
                            <h6>Email*</h6>
                            <input type="email" placeholder="Email">
                        </label>
                        <label title="">
                            <h6>Mật khẩu*</h6>
                            <input type="password" placeholder="Mật khẩu">
                        </label>
                    </form>
                    <div> <button class="btn btn-success">Đăng nhập</button> <button class="btn">Đăng kí</button></div>
                </div>
                <div class="col-lg-6">
                    <aside>Bạn quên mật khẩu? Nhập địa chỉ email để lấy lại mật khẩu qua email.</aside>
                    <form action="" class="login-form">
                        <label title="">
                            <h6>Email*</h6>
                            <input type="email" placeholder="Email">
                        </label>
                    </form>
                    <div> <button class="btn btn-success">Lấy lại mật khẩu</button></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped src="@/assets/css/login.css">

</style>
