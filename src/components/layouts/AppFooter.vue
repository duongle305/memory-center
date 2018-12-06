<template>
    <footer>
        <div class="footer-top mt-5">
            <div class="container">
                <div class="row footer-top__service">
                    <carousel :loop="false"
                              :margin="30"
                              :nav="false"
                              :responsiveClass="false"
                              :responsive="{0:{items:2},900:{items:3},1200:{items:4}}">
                        <div class="row">
                            <div class="col-12 col-md-3"><img src="@/assets/image/service_1b341.png" alt=""></div>
                            <div class="col-12 col-md-9 service-info">
                                <p>Mua hàng siêu tiết kiệm</p>
                                <p>Các sản phẩm luôn được bán với giá ưu đã nhất cho khách hàng</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-3"><img src="@/assets/image/service_2b341.png" alt=""></div>
                            <div class="col-12 col-md-9 service-info">
                                <p>Chất lượng tuyệt đối 100%</p>
                                <p>Cam kết sản phẩm chính hãng</p>
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-12 col-md-3"><img src="@/assets/image/service_3b341.png" alt=""></div>
                            <div class="col-12 col-md-9 service-info">
                                <p>Khuyến mãi cực lớn</p>
                                <p>Được hưởng ưu đãi và quà tặng hấp dẫn</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-3"><img src="@/assets/image/service_4b341.png" alt=""></div>
                            <div class="col-12 col-md-9 service-info">
                                <p>Thanh toán dễ dàng</p>
                                <p>Giao hàng toàn quốc từ 1 -> 4 ngày, chuyển khoản, nhận hàng thanh toán.v.v.</p>
                            </div>

                        </div>
                    </carousel>
                </div>
            </div>
        </div>
        <div class="footer-main container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-12 footer-policy">
                    <span>GIỚI THIỆU</span>
                    <i class="fas fa-plus toggle-footer"></i>
                    <ul>
                        <li>Trang chủ</li>
                        <li>Về Memoryzone</li>
                        <li>Điều khoản giao dịch</li>
                        <li>Bảo mật thông tin</li>
                        <li>Tuyển dụng</li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 col-12 footer-policy">
                    <span>CHÍNH SÁCH CÔNG TY </span>
                    <i class="fas fa-plus toggle-footer"></i>
                    <ul>
                        <li>Chính sách giao nhận</li>
                        <li>Chính sách đổi trả hàng</li>
                        <li>Phương thức thanh toán</li>
                        <li>Chế độ bảo hành</li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 col-12 footer-policy">
                    <span>HỖ TRỢ KHÁCH HÀNG</span>
                    <i class="fas fa-plus toggle-footer"></i>
                    <ul>
                        <li>Bảo hành: (028) 7301 3879</li>
                        <li>Gửi yêu cầu bảo hành</li>
                        <li>Gửi yêu cầu đổi hàng</li>
                        <li>P. Kinh doanh: <br><a href="    ">sales@memoryzone.com.vn</a></li>
                        <li>P. Hỗ trợ khách hàng: <br><a href=" "> support@memoryzone.com.vn</a></li>
                    </ul>
                </div>
                <div class=" col-lg-3 col-md-6 col-12 list-address">
                    <span>CTY TNHH DỊCH VỤ TIN HỌC SIÊU TỐC</span>
                    <ul>
                        <li><b>HỒ CHÍ MINH</b>: 54 Tự Cường, Phường 4, Quận Tân Bình</li>
                        <li>Điện thoại: <b> (028) 7301 3878 - DĐ: 0909 305 350</b></li>
                        <li>Mở cửa: 9h đến 20h, <b>Chủ nhật</b> 10h đến 16h</li>
                    </ul>
                    <ul>
                        <li><b>HÀ NỘI</b>: 10A1 Ngõ 49, Linh Lang, Quận Ba Đình<li>
                        <li>Điện thoại: <b>(028) 7301 3878 - DĐ: 0915 305 350</b><li>
                        <li><b> Mở cửa</b>: 9h đến 18h, <b>Chủ nhật</b> 10h đến 16h</li>
                        <li><img src="@/assets/image/boct_1.png" alt=""> <img src="@/assets/image/boct_2.png" alt=""></li>
                    </ul>
                </div>

            </div>
        </div>
        <div class="footer-bot">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-12 col-lg-4 pt-3 ">
                        <span>ĐĂNG KÝ NHẬN TIN KHUYẾN MÃI</span>
                        <form action="" id="user-subcribe" class="mt-3">
                            <input type="text" class="input-subcribe" placeholder="Nhập Email của bạn ...">
                            <button type="submit" class="btn btn-primary">Đăng kí</button>
                        </form>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 pt-3">
                        <span>PHƯƠNG THỨC THANH TOÁN</span>
                        <div class="payment mt-3"><a href=""><img src="image/payment.png" alt=""></a></div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 pt-3">
                        <span>KẾT NỐI VỚI CHÚNG TÔI</span>
                        <div class="social-footer mt-3">
                            <ul class="list-social">
                                <li><a href=""><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href=""><i class="fab fa-twitter"></i></a></li>
                                <li><a href=""><i class="fab fa-google-plus-g"></i></a></li>
                                <li><a href=""><i class="fab fa-instagram"></i></a></li>
                                <li><a href=""><i class="fab fa-youtube"></i></a></li>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="footer-end text-center p-3"><span>© Bản quyền thuộc về <strong>Memoryzone</strong> | Cung cấp bởi <a href=""><strong>Sapo</strong></a></span></div>
    </footer>
</template>
<script>
    import carousel from 'vue-owl-carousel'
    export default {
        components:{carousel}
    }
</script>
