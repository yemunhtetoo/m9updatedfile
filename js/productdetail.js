$(document).ready(function(){
	$('.thumb a').click(function(e){
		e.preventDefault();
		$('.imgBox img').attr("src", $(this).attr("href"));
	});

    $('.thumb2 a').click(function(e){
    e.preventDefault();
    $('.imgBox2 img').attr("src", $(this).attr("href"));
  });

    $('.thumb3 a').click(function(e){
    e.preventDefault();
    $('.imgBox3 img').attr("src", $(this).attr("href"));
  });


	$(".color_wrap ul li").each(function(item){
		var color = $(this).attr("data-color");
		$(this).css("backgroundColor", color);
	});

	$(".color_wrap ul li").each(function(item){
		$(this).click(function(){
			$(this).parents(".set_boom").find(".color_wrap ul li").removeClass("active");
			$(this).addClass("active");
			var img_src = $(this).attr("data-src");
			$(this).parents(".set_boom").find("img").attr("src", img_src);
		});
	});


	$('.buttonselection').click(function(){
		var value = $(this).attr("data-filter");

		if (value == "all") {
			$(".filter").show("1000");
		}
		else {
			$(".filter").not("."+value).hide("1000").removeClass('active');
			$(".filter").filter("."+value).show("1000").addClass('active');
		}

		$("ul .buttonselection").click(function(){
			$(this).addClass('active').siblings().removeClass('active');
		})

	});

    $('.buttonselectionforsmxsize').click(function(){
    // $(this).addClass('active').siblings().removeClass('active');

    var value = $(this).attr("data-filter");
    if (value == "all") {
      $(".filtersmx").show("1000");
    }
    else {
      $(".filtersmx").not("."+value).hide("1000");
      $(".filtersmx").filter("."+value).show("1000");
    }

      // $("ul .buttonselectionforsmxsize").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
      // })
    let color_wrap = $('ul>li.buttonselectionforsmxsize[data-filter="'+value+'"] ');

    $.each( color_wrap, function(i,item){
      
        $(item).addClass('active').siblings().removeClass('active');

        var img_src = $(this).attr("data-src");
        $(this).parents(".set_boom").find("img").attr("src", img_src);

    } );
 });


});

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "inline";
  evt.currentTarget.className += " active";
}

function openCityTwo(evt2, cityName2) {
  var i2, tabcontent2, tablinks2;
  tabcontent2 = document.getElementsByClassName("tabcontenttwo");
  for (i2 = 0; i2 < tabcontent2.length; i2++) {
    tabcontent2[i2].style.display = "none";
  }
  tablinks2 = document.getElementsByClassName("tablinktwo");
  for (i2 = 0; i2 < tablinks2.length; i2++) {
    tablinks2[i2].className = tablinks2[i2].className.replace(" active", "");
  }
  document.getElementById(cityName2).style.display = "inline";
  evt2.currentTarget.className += " active";
}

function openCityThree(evt3, cityName3) {
  var i3, tabcontent3, tablinks3;
  tabcontent3 = document.getElementsByClassName("tabcontentthree");
  for (i3 = 0; i3 < tabcontent3.length; i3++) {
    tabcontent3[i3].style.display = "none";
  }
  tablinks3 = document.getElementsByClassName("tablinkthree");
  for (i3 = 0; i3 < tablinks3.length; i3++) {
    tablinks3[i3].className = tablinks3[i3].className.replace(" active", "");
  }
  document.getElementById(cityName3).style.display = "inline";
  evt3.currentTarget.className += " active";
}