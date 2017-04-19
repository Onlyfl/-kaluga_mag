
   		$('.dropdown-toggle').dropdown();
		

 $(document).on('click',".single-item-count .plus",function(e) {
        var $input, $this, val;
        $this = $(this);
        $input = $this.parent().children('input[name="quantity"]');
        val = parseInt($input.val());
        val++;
        return $input.val(val + " шт");
    });

     $(document).on('click',".single-item-count .minus",function(e) {
        var $input, $this, val;
        $this = $(this);
        $input = $this.parent().children('input[name="quantity"]');
        val = parseInt($input.val());
        val--;
        if (val < 1) {
            val = 1;
        }
        return $input.val(val + " шт");
    });
 
 $(document).on('click',".single-item-count2 .plus",function(e) {
        var $input, $this, val;
        $this = $(this);
        $input = $this.parent().children('input[name="quantity"]');
        val = parseInt($input.val());
        val++;
        return $input.val(val + " шт");
    });
	
 $(document).on('click',".single-item-count2 .minus",function(e) {
        var $input, $this, val;
        $this = $(this);
        $input = $this.parent().children('input[name="quantity"]');
        val = parseInt($input.val());
        val--;
        if (val < 1) {
            val = 0;
        }
        return $input.val(val + " шт");
    });
	
	// 	category
/*
	$(document).ready(function () {
    $(".basket_order_table__line input.field").on('change',recalcSum);
	
    function recalcSum() {
		
        var  money3 = +$(".basket_order_table_price span").text(),
			money = +$(".basket_order_table__line input.field").val(),
      alert('Вы нажали на элемент с текстом - «' + txt + '»');
			
            
			total = money * money3;
        $('.basket_table__sum span').text(total);
    }
	
});*/



	
 $(document).on('click',".counter_item2 .minus",function(e) {
        var $input, $this, val;
        $this = $(this);
        $input = $this.parent().children('input[name="quantity"]');
		$sum = $(this).parent().parent().parent().children('td.basket_table__sum').children('span');
        val = parseInt($input.val());
		sum2 = parseInt($sum.text());
        var  money3 = +$(".basket_order_table_price span").text();
		var  total = val * money3;
		return $sum.text(total);
	   	
    });
	
	$(document).on('click',".counter_item2 .plus",function(e) {
         var $input, $this, val;
        $this = $(this);
        $input = $this.parent().children('input[name="quantity"]');
		$sum = $(this).parent().parent().parent().children('td.basket_table__sum').children('span');
        val = parseInt($input.val());
		sum2 = parseInt($sum.text());
        var  money3 = +$(".basket_order_table_price span").text();
		var  total = val * money3;
		return $sum.text(total);
    });
	
	
	
//----------------------------------------------	

	
// product sum	
	$(document).ready(function () {
    $(".counter_item input.field").on('change',recalcSum);
    $(".product_control_price em").on('input',recalcSum);
	
    function recalcSum() {
        var  money3 = +$(".product_control_price em").text(),
			money = +$(".counter_item input.field").val(),
            total = money * money3;
        $('.product_control_sum em').text(total);	
    }
});
 $(document).on('click',".counter_item .minus",function(e) {
        var $input, $this, val;
        $this = $(this);
        $input = $this.parent().children('input[name="quantity"]');
        val = parseInt($input.val());
        var  money3 = +$(".product_control_price em").text();
		var  total = val * money3;
	   
		 $('.product_control_sum em').text(total);
    });
	
	$(document).on('click',".counter_item .plus",function(e) {
        var $input, $this, val;
        $this = $(this);
        $input = $this.parent().children('input[name="quantity"]');
        val = parseInt($input.val());
        var  money3 = +$(".product_control_price em").text();
		var  total = val * money3;
	   
		 $('.product_control_sum em').text(total);
    });
	
//----------------------------------------------	
	
 /*$(document).ready(function () {
    $(".basket_order_table__line input.field").on('change',recalcSum);
    $(".basket_order_table_price span").on('input',recalcSum);
	
    function recalcSum() {
        var  money3 = +$(".basket_order_table_price span").text(),
			money = +$(".basket_order_table__line input.field").val(),
            total = money * money3;
        $('.basket_table__sum span').text(total);
		
    }
	
*/ 
 
	
	$('.basket_table__delete .delete').click(function(){
	$(this).closest('tr').remove();
	});
	
	

	
						
	$(document).ready(function () {
	$('.main_header_carousel .slides').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
		 dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
		 dots: false
      }
    }
  
  ]
});
	})
/*	
$(document).ready(function () {	
	$('.product_gallery .slides').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  focusOnSelect: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.product_gallery .slides',
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true
});
})	*/			
	
					
$(document).on('click','.closfon', function() {

        $('.wrapper_filter').fadeOut('slow');
		$('.wrapper').removeClass('grayscale');
		
		

    });
	$(document).on('click','.header_subscribe', function() {

        $('#form2').fadeIn('slow');
		$('.wrapper').addClass('grayscale');

    });

	$(document).on('click','.main_bottom_subscribe', function() {

        $('#form1').fadeIn('slow');
		$('.wrapper').addClass('grayscale');

    });
	
	
	$(document).on('click','.single-item-oneclick', function() {
		
		var ert = $(this).parent().parent().offset().top;
		var ery = $(this).parent().parent().offset().left;
		var eru = $(this).parent().parent().children('h6.single_item_head').text();
		
		/*var eri = $(this).parent().children('div > input[name="quantity"]');
		alert (eri);		
		var ero = parseInt(eri.val());*/
		
		
        $('#form3').fadeIn('slow');
		$('#form3 .single_item_modal').offset({top:ert, left:ery});
		$('#form3 .single_item_modal__header > span').text(eru);
		/*$('#form3 .single-item-count > .field').val(ero);*/
		$('.wrapper').addClass('grayscale');

    });
	
	
	
	
	$(document).on('click','.checkout', function() {

        $('.basket_main_block__form').fadeIn('slow');


    });
	$(document).on('click','.single_item_modal_button', function() {

        $('.basket_main_block__form').fadeOut('slow');


    });
     
	
	

	
	
	




