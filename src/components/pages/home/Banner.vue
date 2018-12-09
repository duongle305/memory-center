<template>
    <div class="baner">
        <Slider></Slider>
        <div class="baner__scale text-center">
            <div class="container">
                <div class="row">
                    <!-- ssd -->
                    <div class="col-12 col-md-4">
                        <div class="baner__scale__img">
                            <a href="">
                                <img src="@/assets/image/banner_1.png" alt="">
                            </a>
                        </div>
                    </div>
                    <!-- the nho -->
                    <div class="col-12 col-md-4">
                        <div class="baner__scale__img">
                            <a href="">
                                <img src="@/assets/image/banner_2.png" alt="">
                            </a>
                        </div>
                    </div>
                    <!-- ram -->
                    <div class="col-12 col-md-4">
                    <div class="baner__scale__right">
                        <div class="col-12">
                            <div class="baner__scale__img">
                                <a href="">
                                    <img src="@/assets/image/banner_3.png" alt="">
                                </a>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="baner__scale__img">
                                <a href="">
                                    <img src="@/assets/image/banner_4.png" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Slider from '@/components/pages/home/Slider';
    export default {
        components:{
            Slider,
        }
    }
</script>
