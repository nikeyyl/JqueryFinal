$(document).ready(function () {
  $('.dropdown').click(function (e) { 
    e.preventDefault();
    $(this).parent().find('.dropdown-list').slideToggle(500);
    $(this).parent().siblings().find('.dropdown-list').slideUp(500);
    var top = offset.top;
    var left = offset.left;
    
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
      if ($(".top").hasClass("hide")) {
        $(".top").toggleClass("hide");
      }
    } else {
      $(".top").addClass("hide");
    }
  });

  $(".top").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  const swiper = new Swiper(".swiper-container", {
    // Optional parameters / 加入參數與設定值
    direction: "horizontal", // 輪播方向
    loop: false, // 重複顯示
    // If we need pagination / 是否顯示分頁
    pagination: {
      el: ".swiper-pagination"
    },
    // Navigation arrows / 是否加入上、下一頁方向圖示
    /*navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },*/
    // And if we need scrollbar / 是否顯示滾動軸
    
    autoplay: {
      delay: 3000, // 自動輪播延遲時間
      disableOnInteraction: false, // 手動滑動後，停止自動撥放，預設值為 true
    }
    
  });

});
