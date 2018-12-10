<template>
    <div>
        <section class="bread-crumb">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item breadcrumb-home"><a href="#">Trang chủ</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Đăng kí</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
        <div class="login-container">
            <div class="container ">
                <h5 class="title-head text-uppercase">Đăng ký tài khoản</h5>
                <aside>Nếu bạn chưa có tài khoản, đăng kí tại đây</aside>
                <form  class="login-form">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="form-group">
                                <label>Họ và tên <span class="text-danger">*</span></label>
                                <input type="text" placeholder="Họ và tên">
                            </div>
                            <div class="form-group">
                                <label>Số điện thoại<span class="text-danger">*</span></label>
                                <input type="text" placeholder="Số điện thoại">
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group">
                                <label>Email <span class="text-danger">*</span></label>
                                <input type="email" placeholder="Email">
                            </div>
                            <div class="form-group">
                                <label>Mật khẩu<span class="text-danger">*</span></label>
                                <input type="password" placeholder="Mật khẩu">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="form-group">
                                <label>Số nhà, tên đường <span class="text-danger">*</span></label>
                                <input type="text" placeholder="Số nhà, tên đường">
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="form-group">
                                <label>Tỉnh/Thành phố</label>
                                <v-select label="name" :options="getProvinces"  @search="onSearch" placeholder="Tỉnh/Thành phố">
                                    <template slot="no-options">Không tìm thấy kết quả</template>
                                </v-select>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="form-group">
                                <label>Quận/Huyện</label>
                                <v-select  placeholder="Quận/Huyện">
                                    <template slot="no-options">Không tìm thấy kết quả</template>
                                </v-select>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="form-group">
                                <label>Phường/Xã</label>
                                <v-select placeholder="Phường/Xã">
                                    <template slot="no-options">Không tìm thấy kết quả</template>
                                </v-select>
                            </div>
                        </div>
                    </div>
                    <div class="text-right">
                        <button type="submit" class="btn btn-primary">Đăng ký</button>
                        <router-link to="/login" class="btn" tag="button" >Đăng nhập</router-link>
                    </div>

                </form>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import {mapGetters, mapActions} from 'vuex';
    import vSelect from 'vue-select';
    import Helpers from '@/helpers/helpers';
    Vue.component('v-select',vSelect);
    export default {
        mounted(){
          Helpers.closeLoading();
        },
        computed:{
            ...mapGetters([
                'getProvinces',
                'getDistricts',
                'getWards',
            ]),
            provinces(){
                return this.getProvinces.map((item)=>{
                    return {

                    };
                });
            }
        },
        methods:{
            ...mapActions([
                'apiGetProvinces'
            ]),
            onSearch(search, loading){
                loading(true);
                this.search(loading,search);
            },
            search(loading, search) {
                this.apiGetProvinces(search).then(resp => {
                    loading(false);
                }).catch(err => {
                    loading(false);
                })
            },
        },
        data(){
            return {
                provinceId:0,
                districtId: 0,
                wardId: 0,
            };
        }
    }
</script>
<style src="@/assets/css/login.css" scoped></style>
<style>
    .dropdown-toggle::after{
        display: none;
    }
    .v-select .dropdown-toggle{
        border-radius: inherit;
        border: 1px solid #e5e5e5;
        padding: 0;
    }
    .v-select .open-indicator:before{
        border-width: 1px 1px 0 0;
        width: 6px;
        height: 6px;
    }
    .v-select input{
        margin: 0 !important;
    }
    .v-select .dropdown-toggle .clear{
        font-size: 20px;
        font-weight: 400;
    }
</style>
