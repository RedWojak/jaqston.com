function OpenMenuNode(oThis)
{
	if (oThis.parentNode.className == '')
		oThis.parentNode.className = 'close';
	else
		oThis.parentNode.className = '';
	return false;
}

$(document).ready(function() {
$('.blockuserinfo a').on('click touchend', function(e) {
    var el = $(this);
    var link = el.attr('href');
    window.location = link;
});

});

$(document).ready(function() {
	$('.breadcrumb a').on('click touchend', function(e) {
    	var el = $(this);
    	var link = el.attr('href');
    	window.location = link;
	});
});

$(window).load(function () {
      $(function(){
      	 $("#contact_form #fileUpload, .compare .comparator, #layered_form .store_list_filter input.checkbox").uniform();
	  });

        /*$('#layered_form select').coreUISelect({
            jScrollPane : {
                verticalDragMinHeight: 20,
                verticalDragMaxHeight: 20,
                showArrows : true
            }
     });*/
	 
  
});
     $(function(){
    $('body').tooltip({
        selector: "[rel=tooltip]",
        placement: "bottom" 
    });
});    
//   CLOUD ZOOM

$(document).ready(function() {
	if ($('#zoom').length) {
		$('.cloud-zoom, .cloud-zoom-gallery').CloudZoom();
	}
	
});

//   COOKIE AND TAB GRID-LIST
(function($) {
		$(function() {
			function createCookie(name,value,days) {
				if (days) {
					var date = new Date();
					date.setTime(date.getTime()+(days*24*60*60*1000));
					var expires = "; expires="+date.toGMTString();
				}
			else var expires = "";
				document.cookie = name+"="+value+expires+"; path=/";
			}
			function readCookie(name) {
				var nameEQ = name + "=";
				var ca = document.cookie.split(';');
				for(var i=0;i < ca.length;i++) {
					var c = ca[i];
					while (c.charAt(0)==' ') c = c.substring(1,c.length);
					if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
			}
			return null;
		}
	function eraseCookie(name) {
		createCookie(name,"",-1);
	}

//TAB GRID-LIST
$('ul.product_view').each(function(i) {
	var cookie = readCookie('tabCookie'+i);
	if (cookie) $(this).find('li').eq(cookie).addClass('current').siblings().removeClass('current')
		.parents('#center_column').find('#product_list').addClass('list').removeClass('grid').eq(cookie).addClass('grid').removeClass('list');
	})
	$('ul.product_view').delegate('li:not(.current)', 'click', function(i) {
	$(this).addClass('current').siblings().removeClass('current')
	.parents('#center_column').find('#product_list').removeClass('grid').addClass('list').eq($(this).index()).addClass('grid').removeClass('list')
	var cookie = readCookie('tabCookie'+i);
	if (cookie) $(this).find('#product_list').eq(cookie).removeClass('grid').addClass('list').siblings().removeClass('list')
	var ulIndex = $('ul.product_view').index($(this).parents('ul.product_view'));
	eraseCookie('tabCookie'+ulIndex);
	createCookie('tabCookie'+ulIndex, $(this).index(), 365);
	})
	})
})(jQuery)


//   TOGGLE FOOTER

$(window).load(function(){
	if ($(document.body).width()< 751){
		$('.modules .block h4').on('click', function(){
			$(this).toggleClass('active').parent().find('.toggle_content').slideToggle('medium');
		})
		$('.modules').addClass('accordion').find('.toggle_content').slideUp('fast');
		}else{
		$('.modules h4').removeClass('active').off().parent().find('.toggle_content').slideDown('fast');
		$('.modules').removeClass('accordion');
		}
  
});
var responsiveflag = false;
function accordion(status){	
		if(status == 'enable'){
			$('.modules .block h4').on('click', function(){
				$(this).toggleClass('active').parent().find('.toggle_content').slideToggle('medium');
			})
			$('.modules').addClass('accordion').find('.toggle_content').slideUp('fast');
		}else{
			$('.modules h4').removeClass('active').off().parent().find('.toggle_content').slideDown('fast');
			$('.modules').removeClass('accordion');
		}
	}		
function toDo(){
	   if ($(document.body).width() < 751 && responsiveflag == false){
		    accordion('enable');
			responsiveflag = true;		
		}
		else if ($(document.body).width() > 751){
			accordion('disable');
	        responsiveflag = false;
		}
}	
toDo();
$(window).resize(function(){toDo();});


//   PRODUCT CLOUD ZOOM DISABLE IMG

$(document).ready(function() {  
	$(function(){     
		$('#zoom1').parent().on('click',function(){
		 var perehod = $(this).attr("perehod");
		  if (perehod=="false") {
		   		return true;
		   } else {
			return false;
		   }
		});     
	});
});

//   OTHER SCRIPT

$(document).ready(function() {
	   $ ('#featured_products .list_carousel li').last().addClass ('last');
	   $ ('#product_comments_block_tab > div').last().addClass('last');
	   $ ('#viewed-products_block_left ul li').last().addClass('last');
});

//   TOGGLE PAGE PRODUCT (TAB)

$(window).load(function(){
	if ($(document.body).width()< 480){
		$('.page_product_box h3').on('click', function(){
			$(this).toggleClass('active').parent().find('.toggle_content').slideToggle('medium');
		})
		$('.page_product_box').addClass('accordion');
	
		}else{
		$('.page_product_box h3').removeClass('active').off().parent().find('.toggle_content').slideDown('fast');
		$('.page_product_box').removeClass('accordion');
		}
  
});
var responsiveflag = false;
function accordion(status){	
		if(status == 'enable'){
			$('.page_product_box h3').on('click', function(){
				$(this).toggleClass('active').parent().find('.toggle_content').slideToggle('medium');
			})
			$('.page_product_box').addClass('accordion').find('.toggle_content').slideUp('fast');
		}else{
			$('.page_product_box h3').removeClass('active').off().parent().find('.toggle_content').slideDown('fast');
			$('.page_product_box').removeClass('accordion');
		}
	}		
function toDo(){
	   if ($(document.body).width() < 480 && responsiveflag == false){
		    accordion('enable');
			responsiveflag = true;
				
		}
		else if ($(document.body).width() > 480){
			accordion('disable');
	        responsiveflag = false;
		}
}	
toDo();
$(window).resize(function(){toDo();});

//   TOGGLE RIGHT COLUMN

$(window).load(function(){
	if ($(document.body).width() < 751){
		$('#right_column h4, #left_column h4').on('click', function(){
			$(this).toggleClass('active').parent().find('.toggle_content').slideToggle('medium');
		})
		$('#right_column, #left_column').addClass('accordion').find('.toggle_content').slideUp('fast');
		}else{
		$('#right_column h4, #left_column h4').removeClass('active').off().parent().find('.toggle_content').slideDown('fast');
		$('#left_column').removeClass('accordion');
		}
  
});
var responsiveflag = false;
function accordion(status){	
		if(status == 'enable'){
			$('#right_column h4, #left_column h4').on('click', function(){
				$(this).toggleClass('active').parent().find('.toggle_content').slideToggle('medium');
			})
			$('#right_column, #left_column').addClass('accordion').find('.toggle_content').slideUp('fast');
		}else{
			$('#right_column h4, #left_column h4').removeClass('active').off().parent().find('.toggle_content').slideDown('fast');
			$('#right_column, #left_column').removeClass('accordion');
		}
	}		
function toDo(){
	   if ($(document.body).width() < 751 && responsiveflag == false){
		    accordion('enable');
			responsiveflag = true;
				
		}
		else if ($(document.body).width() > 751){
			accordion('disable');
	        responsiveflag = false;
		}
}	
toDo();
$(window).resize(function(){toDo();});
/*********************************************************** top menu dropdown **********************************/
$(document).ready(function(){ 
	
	$('.header-button').on('click touchstart', function(){
		var subUl = $(this).find('ul');
		var anyAther = $('header').find('#cart_block');
		var anyAnother1 = $('#menu-wrap.mobile #menu-custom'); // close other menus if opened
		var anyAnotherS = $('#search_block_top'); // close other menus if opened
		if (anyAnotherS.is(':visible')) {
			anyAnotherS.slideUp()
			$('#search_but_id').removeClass('hover-search')
		}
		if (anyAther.is(':visible')) {
			anyAther.slideUp(),
			$('#header_user').removeClass('close-cart')
		}
		if (anyAnother1.is(':visible')) {
			anyAnother1.slideUp(),
			$('.mobile #menu-trigger').removeClass('menu-custom-icon');
		} // close ather menus if opened
		if(subUl.is(':hidden')) {
			subUl.slideDown(),
			$(this).find('.arrow_header_top').addClass('mobile-open')	
		}
		else {
			subUl.slideUp(),
			$(this).find('.arrow_header_top').removeClass('mobile-open')
		}
		$('.header-button').not(this).find('ul').slideUp(),
		$('.header-button').not(this).find('span.arrow_header_top').removeClass('mobile-open');
		return false
	});
	
	/*********************************************************** search menu dropdown **********************************/
	
	$('#search_but_id').on('click touchstart', function(){
		var searchContent = $('header').find('#search_block_top');
		var anyAnother = $('.header-button').find('ul'); // close other menus if opened
		var anyAnother1 = $('#menu-wrap.mobile #menu-custom'); // close other menus if opened
		/*var anyAther = $('header').find('#cart_block');
		if (anyAther.is(':visible')) {
			anyAther.slideUp(),
			$('#header_user').removeClass('close-cart')
		}*/
		if (anyAnother.is(':visible')) {
			anyAnother.slideUp();
			$('.header-button').find('.arrow_header_top').removeClass('mobile-open')
		}
		if (anyAnother1.is(':visible')) {
			anyAnother1.slideUp(),
			$('.mobile #menu-trigger').removeClass('menu-custom-icon');
		}
		if (searchContent.is(':hidden')){
			searchContent.slideDown()
			$('#search_but_id').addClass('hover-search')
		}
		else {
			searchContent.slideUp()
			$('#search_but_id').removeClass('hover-search')
		}
		return false
	});
	
	
	/*********************************************************** header-cart menu dropdown **********************************/
	if( (typeof ajaxcart_allowed !== "undefined") && ajaxcart_allowed==1) {
	$('#header_user').on('click touchstart', function(){
		var cartContent = $('header').find('#cart_block');
		var anyAnother = $('.header-button').find('ul'); // close other menus if opened
		var anyAnother1 = $('#menu-wrap.mobile #menu-custom'); // close other menus if opened
		var anyAnotherS = $('#search_block_top'); // close other menus if opened
		if (anyAnother.is(':visible')) {
			anyAnother.slideUp();
			$('.header-button').find('.arrow_header_top').removeClass('mobile-open')
		}
		if (anyAnother1.is(':visible')) {
			anyAnother1.slideUp(),
			$('.mobile #menu-trigger').removeClass('menu-custom-icon');
		}
		if (anyAnotherS.is(':visible')) {
			anyAnotherS.slideUp()
		}
		if (cartContent.is(':hidden')){
			cartContent.slideDown(),
			$(this).addClass('close-cart')
		}
		else {
			cartContent.slideUp(),
			$(this).removeClass('close-cart')
		}
		return false
	});
	}
	$('header #cart_block, .header-button ul, div.alert_cart a, #search_block_top').on('click touchstart', function(e){
		e.stopPropagation();
	});
	$(document).on('click touchstart', function(){
		$('header').find('#cart_block').slideUp(),
		$('header').find('#search_block_top').slideUp(),
		$('#search_but_id').removeClass('hover-search'),
		$('.header-button').find('ul').slideUp(),
		$('#header_user').removeClass('close-cart'),
		$('.header-button').find('.arrow_header_top').removeClass('mobile-open')
   });
});

$(document).ready(function() {
	$('#order .addresses .address,#order-opc .addresses .address').removeAttr('style')
	
	$("#map-button").on('click touchstart', function(e){
		e.preventDefault();
		if($(this).hasClass("active")) {
		
			$(this).removeClass("active")
			$("#delivery-tabs a:first").tab("show")
		} else {
			$(this).addClass("active")
			$("#delivery-tabs a:last").tab("show")
		}
	});	
	
	var m_news, m_news_p, m_news_in, f_news, f_width;
	m_news = $('section.m_news');
	m_news_p = $('p', m_news);
	m_news_in = $('div.area_in', m_news);
  setInterval(nextNews, 5000);

	function nextNews()
	{
		m_news_p = $('p', m_news);
		f_news = m_news_p.eq(0);
		f_width = f_news.outerWidth(true);		
		m_news_in.animate({'left': -f_width}, 500, function(){
			f_news.appendTo(m_news_in);
			m_news_in.css({'left': 0});
		});
		
	}	
	
	var $data_rows = $(".live-text-data.row")
	var current_data_row = 0
	setTimeout(function(){
		$(".live-text-back.title,.live-text-data.title:first").fadeIn(1000);
		setTimeout(function(){
			var $d = $data_rows[current_data_row]
			console.log('data = ' + $d + " index=" + current_data_row)		
			$($d).fadeIn(1000).delay(1000).fadeOut(1000)			
			current_data_row = current_data_row + 1
		}, 2000)
		//$(".live-text-data.row:first").each(function(index){
			//console.log('index = ' + index);
			/*$(".live-text-back.row").fadeIn(1000);
			$(this).fadeIn(1000).delay(1000).fadeOut(1000);
			$(".live-text-back.row").fadeOut(1000);*/
		//})
	}, 2000);
	


	
});
