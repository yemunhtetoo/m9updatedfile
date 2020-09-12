$(document).ready(function(){
	$(".color_wrap ul li").each(function(item){
		var color = $(this).attr("data-color");
		$(this).css("backgroundColor", color);
	});

	$(".color_wrap ul li").each(function(item){
		$(this).click(function(){
			$(this).parents(".product_item").find(".color_wrap ul li").removeClass("active");
			$(this).addClass("active");
			var img_src = $(this).attr("data-src");
			$(this).parents(".product_item").find("img").attr("src", img_src);
		});
	})

		$('.buttonselection').click(function(){
		var value = $(this).attr("data-filter");
		if (value == "all") {
			$(".filter").show("1000");
		}
		else {
			$(".filter").not("."+value).hide("1000");
			$(".filter").filter("."+value).show("1000");
		}

		$("ul .buttonselection").click(function(){
			$(this).addClass('active').siblings().removeClass('active');
		})

	});

        $('.buttonselection2').click(function(){
    var value = $(this).attr("data-filter");
    if (value == "all") {
      $(".filter2").show("1000");
    }
    else {
      $(".filter2").not("."+value).hide("1000");
      $(".filter2").filter("."+value).show("1000");
    }

    $("ul .buttonselection2").click(function(){
      $(this).addClass('active').siblings().removeClass('active');
    })

  });
		$('.slider').slick({
  dots: false,
  infinite: false,
  autoplay: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
})


