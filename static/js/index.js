$(function() {
    $(".icon-colapse").click(function() {
        $(".side__bar").animate({ left: "0" }, 500);
        $(".opacity-fullscreen").show();
    })
    $(".opacity-fullscreen").click(function() {
        $(".side__bar").animate({ left: "-300px" }, 500);
        $(this).hide();
    });
    if (window.innerWidth <= 991) {
        $(".drop-icon").switchClass("ti-angle-right", "ti-angle-down");
        $(".menu-toogle-text").click(function() {
            $(".list_menu_header ").slideToggle("300");
            return false;
        })
    } else {
        $(".drop-icon").switchClass("ti-angle-down", "ti-angle-right");
    }
    $(window).on("resize", function() {
        if (window.innerWidth <= 991) {
            $(".drop-icon").switchClass("ti-angle-right", "ti-angle-down");
        } else {
            $(".drop-icon").switchClass("ti-angle-down", "ti-angle-right");

        }
    });
    $(".ti-angle-down").on("click", function() {
        let pa = $(this).parent();
        let parent = pa.parent();
        parent.find(">ul").slideToggle("300");
        return false;

    });

    $(".category__title__toogle").click(function(){
        let pa = $(this).parent();
        pa.children(".category__title__list").slideToggle("300");
    })
    const countSection = $(".category__list").find(">div");
    for(let i=0;i<countSection.length;i+=2){

        if (window.innerWidth >= 992) {
            $(countSection[i]).find(".category__down").addClass("order-2");
        }
        else if (window.innerWidth <=991) {
            $(countSection[i]).find(".category__down").removeClass("order-2");
        }
        $(window).on("resize", function() {
            if (window.innerWidth >= 992) {
                $(countSection[i]).find(".category__down").addClass("order-2");
            }
            else if (window.innerWidth <=991) {
                $(countSection[i]).find(".category__down").removeClass("order-2");
            }
        })
    }
    $(window).on("scroll",function(){
        if (window.pageYOffset >=400 && window.innerWidth >= 992) {
            $(".scroll-menu").fadeIn();
        }else {
            $(".scroll-menu").fadeOut();
        }
    });
    $(".toggle-footer").click(function(){
        let pa = $(this).parent();
        pa.find(">ul").slideToggle("200");

        if ($(this).attr("class").search("fa-plus")>=0) {
            $(this).switchClass("fa-plus", "fa-minus");
        }else {
            $(this).switchClass("fa-minus", "fa-plus");
        }
    })


    $(document).on("click",".product-select__plus",function(e){
        let input = $(e.currentTarget).parent().find(".product-select__count");
        let total = parseInt(input.val());
        input.val(++total);
    });

    $(document).on("click",".product-select__minus",function(e){
        let input = $(e.currentTarget).parent().find(".product-select__count");
        let total = parseInt(input.val());
        if (total >1){
            input.val(--total);
        }
    });

    $.fn.simpleMoneyFormat = function(isRangeFormat = false) {
        this.each(function(index, el) {
            var elType = null; // input or other
            var value = null;
            // get value
            if($(el).is('input') || $(el).is('textarea')){
                value = $(el).val().replace(/,/g, '');
                elType = 'input';
            } else {
                value = $(el).text().replace(/,/g, '');
                elType = 'other';
            }
            // if value changes
            $(el).on('paste keyup', function(){
                value = $(el).val().replace(/,/g, '');
                formatElement(el, elType, value); // format element
            });
            formatElement(el, elType, value); // format element
        });
        function formatElement(el, elType, value){
            var result = '';
            var valueArray = value.split('');

            var resultArray = [];
            var counter = 0;
            var temp = '';
            for (var i = valueArray.length - 1; i >= 0; i--) {
                temp += valueArray[i];
                counter++
                if(counter == 3){
                    resultArray.push(temp);
                    counter = 0;
                    temp = '';
                }
            };
            if(counter > 0){
                resultArray.push(temp);
            }

            for (var i = resultArray.length - 1; i >= 0; i--) {
                var resTemp = resultArray[i].split('');
                for (var j = resTemp.length - 1; j >= 0; j--) {
                    result += resTemp[j];
                };
                if(i > 0){
                    result += '.'
                }
            };

            if(isRangeFormat ==true) result= result+" đ";

            if(elType == 'input'){
                $(el).val(result);
            } else {
                $(el).empty().text(result);
            }
        }
    };
    $(".price").simpleMoneyFormat();
});
