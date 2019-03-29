// modal start
jQuery(document).ready(function() {
	jQuery('.zakaz').click( function(event){ // лoвим клик пo ссылки с id="go"
		event.preventDefault(); // выключaем стaндaртную рoль элементa
		jQuery('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
		 	function(){ // пoсле выпoлнения предъидущей aнимaции
				jQuery('#modal_form') 
					.css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
					.animate({opacity: 1, top: '40%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
		});
	});
	
	jQuery('.zakaz2').click( function(event){ // лoвим клик пo ссылки с id="go"
		event.preventDefault(); // выключaем стaндaртную рoль элементa
		jQuery('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
		 	function(){ // пoсле выпoлнения предъидущей aнимaции
				jQuery('#modal_form2') 
					.css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
					.animate({opacity: 1, top: '40%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
		});
	});
	
	/* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
	jQuery('#modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
		jQuery('#modal_form')
			.animate({opacity: 0, top: '30%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
				function(){ // пoсле aнимaции
					jQuery(this).css('display', 'none'); // делaем ему display: none;
					jQuery('#overlay').fadeOut(400); // скрывaем пoдлoжку
				}
			);
		jQuery('#modal_form2')
			.animate({opacity: 0, top: '30%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
				function(){ // пoсле aнимaции
					jQuery(this).css('display', 'none'); // делaем ему display: none;
					jQuery('#overlay').fadeOut(400); // скрывaем пoдлoжку
				}
			);
	
	
	});
});
//modal end

// показ превью загреженной картинки в окне фото поломки
jQuery(document).ready(function() { 
jQuery('#upload').change(function() {
  var input = jQuery(this)[0];
  if (input.files && input.files[0] ) {
    if (input.files[0].type.match('image.*') ) {
      var reader = new FileReader();
      reader.onload = function(e) { jQuery('#p-image').attr('src', e.target.result); }
      reader.readAsDataURL(input.files[0]);
    };
  } else {jQuery('#p-image').attr('src', '#');}
});
});


// foot menu
jQuery('.foot1.footmenu h3').click(function () {
	jQuery('.foot1 .moduletable').removeClass('active');
	jQuery('.foot1 .moduletable').removeClass('active2');
	jQuery(this).parent().addClass('active'); 
});
jQuery('#footer li.current').parents('ul').parent('.moduletable').addClass('active');
// foot menu end

// tabs_main-page start
jQuery('.tab1').click(function () {jQuery('.tab_body').fadeOut(1); jQuery('.tab_body1').fadeIn(1); jQuery('.tab').removeClass('active'); jQuery('.tab1').addClass('active');} );
jQuery('.tab2').click(function () {jQuery('.tab_body').fadeOut(1); jQuery('.tab_body2').fadeIn(1); jQuery('.tab').removeClass('active'); jQuery('.tab2').addClass('active');} );
jQuery('.tab3').click(function () {jQuery('.tab_body').fadeOut(1); jQuery('.tab_body3').fadeIn(1); jQuery('.tab').removeClass('active'); jQuery('.tab3').addClass('active');} );
jQuery('.tab4').click(function () {jQuery('.tab_body').fadeOut(1); jQuery('.tab_body4').fadeIn(1); jQuery('.tab').removeClass('active'); jQuery('.tab4').addClass('active');} );
// tabs_main-page end

// svorachivalki start
  jQuery(".faq h6").click(function(){jQuery(this).next().slideToggle(200);});
  jQuery(".pricea h3").click(function(){jQuery(this).next().slideToggle(1200);jQuery(this).toggleClass('active');});
// svorachivalki end

//calculate vid_okon mobile start

if(jQuery(window).width()<939) {
jQuery(document).ready(function() {
		jQuery('.vid_okna').css('display','none');		   //Скрываем блок
		jQuery("#select_vid").change(function(){						 //При смене 
			jQuery('.vid_okna>div').css('display','none');  //Скрываем все открытые блоки
			div_class = jQuery('#select_vid option:selected').val();	   //Вытаскиваем value
			jQuery('.vid_okna').show();
			jQuery('.'+div_class).show();								  //Показываем блок c таким же id как наш value
		});

	});
}
// calculate vid_okon mobile end


 // калькулятор уплотнителя
 
 function sum2(){

  var height = jQuery('#height').val();

  //цена метра  
  var upl = jQuery('input:radio[name=upl]:checked').val();
  var rama = jQuery('input:radio[name=rama]:checked').val();
  var cont = jQuery('input:radio[name=cont]:checked').val();
  
   if (upl == 1) {var sum = height * 200;};
   if (upl == 2) {if (cont == 1) {var sum = height * 150;}; if (cont == 2) {var sum = height * 200;}};
  
   if (height > 0) {
   jQuery('#result').html('<div id="result_in">Стоимость замены уплотнителя (материал + работа) <span>' + Math.round(sum) + ' рублей</span>Скидки при заказе от 10.000 рублей.<br />Консультация и заказ по телефону: <a href="tel:+74997558729" class="tel_text">+7 (499) 755-87-29</a></div>');}
 else {alert('Укажите длину необходимого уплотнителя!');}
}


// калькулятор окон ПВХ
 function sum3() {
   var sum = 0;
   if (jQuery("#regulirovka").prop("checked")) { if (jQuery("#otkr_okno1").prop("checked")) {sum=sum+450;} if (jQuery("#otkr_okno21").prop("checked")) {sum=sum+450;} if (jQuery("#otkr_okno22").prop("checked")) {sum=sum+450;} if (jQuery("#otkr_okno31").prop("checked")) {sum=sum+450;}  if (jQuery("#otkr_okno32").prop("checked")) {sum=sum+450;}  if (jQuery("#otkr_okno33").prop("checked")) {sum=sum+450;}  if (jQuery("#otkr_okno41").prop("checked")) {sum=sum+450;}  if (jQuery("#otkr_okno42").prop("checked")) {sum=sum+450;}  if (jQuery("#otkr_okno51").prop("checked")) {sum=sum+450;}  if (jQuery("#otkr_okno52").prop("checked")) {sum=sum+690;}  if (jQuery("#otkr_okno61").prop("checked")) {sum=sum+450;}  if (jQuery("#otkr_okno62").prop("checked")) {sum=sum+450;}  if (jQuery("#otkr_okno63").prop("checked")) {sum=sum+690;} }
   if (jQuery("#podokonnik").prop("checked")) {sum = sum + jQuery('#w_okno1').val()*1500/1000 + jQuery('#w_okno2').val()*1500/1000 + jQuery('#w_okno3').val()*1500/1000 + jQuery('#w_okno4').val()*1500/1000 + jQuery('#w_okno5').val()*1500/1000 + jQuery('#w_okno6').val()*1500/1000;}
   if (jQuery("#servis").prop("checked")) { if (jQuery("#otkr_okno1").prop("checked")) {sum=sum+1100;} if (jQuery("#otkr_okno21").prop("checked")) {sum=sum+1100;} if (jQuery("#otkr_okno22").prop("checked")) {sum=sum+1100;} if (jQuery("#otkr_okno31").prop("checked")) {sum=sum+1100;}  if (jQuery("#otkr_okno32").prop("checked")) {sum=sum+1100;}  if (jQuery("#otkr_okno33").prop("checked")) {sum=sum+1100;}  if (jQuery("#otkr_okno41").prop("checked")) {sum=sum+1100;}  if (jQuery("#otkr_okno42").prop("checked")) {sum=sum+1100;}  if (jQuery("#otkr_okno51").prop("checked")) {sum=sum+1100;}  if (jQuery("#otkr_okno52").prop("checked")) {sum=sum+1100;}  if (jQuery("#otkr_okno61").prop("checked")) {sum=sum+1100;}  if (jQuery("#otkr_okno62").prop("checked")) {sum=sum+1100;}  if (jQuery("#otkr_okno63").prop("checked")) {sum=sum+1100;} }
   if (jQuery("#otkos").prop("checked")) {sum = sum + jQuery('#w_okno1').val()*960/1000 + jQuery('#w_okno2').val()*960/1000 + jQuery('#w_okno3').val()*960/1000 + jQuery('#w_okno4').val()*960/1000 + jQuery('#w_okno5').val()*960/1000 + jQuery('#w_okno6').val()*960/1000 +  jQuery('#h_okno1').val()*960/1000*2 + jQuery('#h_okno2').val()*960/1000*2 + jQuery('#h_okno3').val()*960/1000*2 + jQuery('#h_okno4').val()*960/1000*2 + jQuery('#h_okno5').val()*960/1000*2 + jQuery('#h_okno6').val()*960/1000*2; if (jQuery('#h_okno5').val()>0) {sum=sum-960};  if (jQuery('#h_okno6').val()>0) {sum=sum-960}; }
   if (jQuery("#otliv").prop("checked")) {sum = sum + jQuery('#w_okno1').val()*1000/1000 + jQuery('#w_okno2').val()*1000/1000 + jQuery('#w_okno3').val()*1000/1000 + jQuery('#w_okno4').val()*1000/1000 + jQuery('#w_okno5').val()*1000/1000 + jQuery('#w_okno6').val()*1000/1000;}
   if (jQuery("#ruchka_calc").prop("checked")) { if (jQuery("#otkr_okno1").prop("checked")) {sum=sum+500;} if (jQuery("#otkr_okno21").prop("checked")) {sum=sum+500;} if (jQuery("#otkr_okno22").prop("checked")) {sum=sum+500;} if (jQuery("#otkr_okno31").prop("checked")) {sum=sum+500;}  if (jQuery("#otkr_okno32").prop("checked")) {sum=sum+500;}  if (jQuery("#otkr_okno33").prop("checked")) {sum=sum+500;}  if (jQuery("#otkr_okno41").prop("checked")) {sum=sum+500;}  if (jQuery("#otkr_okno42").prop("checked")) {sum=sum+500;}  if (jQuery("#otkr_okno51").prop("checked")) {sum=sum+500;}  if (jQuery("#otkr_okno52").prop("checked")) {sum=sum+500;}  if (jQuery("#otkr_okno61").prop("checked")) {sum=sum+500;}  if (jQuery("#otkr_okno62").prop("checked")) {sum=sum+500;}  if (jQuery("#otkr_okno63").prop("checked")) {sum=sum+500;} }
   if (jQuery("#grebenka_calc").prop("checked")) { if (jQuery("#otkr_okno1").prop("checked")) {sum=sum+500;} if (jQuery("#otkr_okno21").prop("checked")) {sum=sum+500;} if (jQuery("#otkr_okno22").prop("checked")) {sum=sum+500;} if (jQuery("#otkr_okno31").prop("checked")) {sum=sum+500;}  if (jQuery("#otkr_okno32").prop("checked")) {sum=sum+500;}  if (jQuery("#otkr_okno33").prop("checked")) {sum=sum+500;}  if (jQuery("#otkr_okno41").prop("checked")) {sum=sum+500;}  if (jQuery("#otkr_okno42").prop("checked")) {sum=sum+500;}  if (jQuery("#otkr_okno51").prop("checked")) {sum=sum+500;}  if (jQuery("#otkr_okno52").prop("checked")) {sum=sum+500;}  if (jQuery("#otkr_okno61").prop("checked")) {sum=sum+500;}  if (jQuery("#otkr_okno62").prop("checked")) {sum=sum+500;}  if (jQuery("#otkr_okno63").prop("checked")) {sum=sum+500;} }   
   if (jQuery("#uplotnitel_calc").prop("checked")) {sum = sum + (Math.round(jQuery('#w_okno1').val())+Math.round(jQuery('#h_okno1').val()))*180/1000*4 + (Math.round(jQuery('#w_okno2').val())+Math.round(jQuery('#h_okno2').val()))*180/1000*4 + Math.round(jQuery('#h_okno2').val())*180/1000*4 + (Math.round(jQuery('#w_okno3').val())+Math.round(jQuery('#h_okno3').val()))*180/1000*4 + Math.round(jQuery('#h_okno3').val())*180/1000*4*2 + (Math.round(jQuery('#w_okno4').val())+Math.round(jQuery('#h_okno4').val()))*180/1000*4 + Math.round(jQuery('#h_okno4').val())*180/1000*4 +  (Math.round(jQuery('#w_okno5').val())+Math.round(jQuery('#h_okno5').val()))*180/1000*4 + Math.round(jQuery('#h_okno5').val())*180/1000*4 + (Math.round(jQuery('#w_okno6').val())+Math.round(jQuery('#h_okno6').val()))*180/1000*4 + Math.round(jQuery('#h_okno6').val())*180/1000*4*2;}

   var dostavka = jQuery('input:radio[name=dostavka]:checked').val();
   var zamkad_km = jQuery('#zamkad_km').val();
   if (dostavka == 1) {dostavka = 0;};
   if (dostavka == 2 || zamkad_km > 0) {dostavka = zamkad_km*50;};   
   
   var sum2 = 2000-Math.round(sum);
   
   var itogo = sum + Math.round(dostavka);

   if (sum>1799) {
   jQuery('#result').html('<div id="result_in">Стоимость ремонта окна (материал + работа + доставка): <span>' + Math.round(itogo) + ' рублей</span>Скидки при заказе от 10.000 рублей.</br></br> Консультация и заказ по телефону: <a href="tel:+74997558729" class="tel_text">+7 (499) 755-87-29</a></div>');}
   
   if ((sum>0)&&(sum<2000)) {
   jQuery('#result').html('<div id="result_in">Стоимость ремонта окна (материал + работа + доставка): <span>' + Math.round(itogo) + ' рублей</span>но т.к. сумма минимального заказа 2000 руб., вам нужно будет дозаказать работ на ' + Math.round(sum2) + 'руб.<br /><br /><p>Консультация и заказ по телефону: <a href="tel:+74997558729" class="tel_text">+7 (499) 755-87-29</a></p></div>');}
   
   if (sum==0) {alert('Для начала выберите тип услуги. Затем укажите параметры окна схожего с вашим по конфигурации.');}
}


//калькулятор стеклопакетов
function sum(){
  //площадь  
  var height = jQuery('#height').val();
  var width = jQuery('#width').val();

  //цена метра  
  var kolvo = jQuery('input:radio[name=kolvo]:checked').val();
  var rama = jQuery('input:radio[name=rama]:checked').val();
  if (kolvo == 2 && rama == 1) {s_cash = 3500;};
  if (kolvo == 2 && rama == 2) {s_cash = 5500;};
  if (kolvo == 2 && rama == 3) {s_cash = 4500;};
  if (kolvo == 3 && rama == 1) {s_cash = 4500;};
  if (kolvo == 3 && rama == 2) {s_cash = 6000;};
  if (kolvo == 3 && rama == 3) {s_cash = 5000;};

  if ( (height > 1500) || (width > 1500) ) {s_cash = s_cash + s_cash/2;} //размербольше 1,5..2,5
 
  var antplenka = jQuery("#antplenka").prop("checked"); // триплекс
  s_cash = s_cash + antplenka * 2000;

  var zakal = jQuery("#zakal").prop("checked"); // закаленное стекло
  s_cash = s_cash + zakal * 2000;

  var tonplenka = jQuery("#tonplenka").prop("checked"); // тонировка
  if (rama == 3) {s_cash = s_cash + tonplenka * 2000;} else {s_cash = s_cash + tonplenka * 1000};

  //доставка
  var dostavka = jQuery('input:radio[name=dostavka]:checked').val();
  var zamkad_km = jQuery('#zamkad_km').val();
  if (dostavka == 1) {dostavka = 2000;};
  if (dostavka == 2 || zamkad_km > 0) {dostavka = 2000 + 50 * zamkad_km;};
  if(height > 299 && height < 3001 || width > 299 && width < 3001){
   var s = height*width/1000000;
   if (s < 1) {s = 1;};
   var sum = s * s_cash + parseInt(dostavka);
   jQuery('#result').html('<div id="result_in">Стоимость стеклопакета с доставкой и установкой <span>' + Math.round(sum) + ' рублей</span>Скидки при заказе от 10.000 рублей.<br />Консультация и заказ по телефону: <a href="tel:+74997558729" class="tel_text">+7 (499) 755-87-29</a></div>');
 } else {alert('Укажите ширину и высоту стеклопакета (от 300 до 3000 мм.)');}
}
 
 
 // калькулятор москитных сеток
 function mossum(){

   var mos_vid = jQuery('#select_vid_moskit').val();
   var s = (jQuery('#mos_width').val()*jQuery('#mos_height').val())/1000000;
   s = s * mos_vid;
   var dop=0;
   if (jQuery("#mosustanovka").prop("checked")) {dop=dop+500;}
   if (jQuery("#mosdostavka").prop("checked")) {dop=dop+500;}
   s = s+dop;
   
  // if ((jQuery('#mos_vid').val()) == 3500)  {jQuery('.mos_calc').css({'background:' : 'url(../images/moscalc6.jpg) 337px 27px no-repeat !important'})}

   if (s > 0) {
   jQuery('#result').html('<div id="result_in">Стоимость москитной сетки  <span>' + Math.round(s) + ' рублей</span>Скидки при заказе нескольких москитных сеток.<br />Консультация и заказ по телефону <a href="tel:+74997558729" class="tel_text">+7 (499) 755-87-29</a></div>');}
 else {alert('Укажите ширину и высоту москитной сетки!');}
}

 function moschange() {
   var mos_vid_text = jQuery("#mos_vid option:selected").text();
   if (mos_vid_text == 'Рамочная') {jQuery('#total #calc').css({'background-image':'url(/templates/helpokno/images/267.png)', 'background-position':'350px 32px'});}
   if (mos_vid_text == 'Раздвижная') {jQuery('#total #calc').css({'background-image':'url(/templates/helpokno/images/23.png)', 'background-position':'411px 60px'});}
   if (mos_vid_text == 'Плиссе') {jQuery('#total #calc').css({'background-image':'url(/templates/helpokno/images/27.png)', 'background-position':'409px 56px'});}
   if (mos_vid_text == 'Рулонная') {jQuery('#total #calc').css({'background-image':'url(/templates/helpokno/images/24.png)', 'background-position':'399px 58px'});}
   if (mos_vid_text == 'Антипыльца') {jQuery('#total #calc').css({'background-image':'url(/templates/helpokno/images/28.png)', 'background-position':'365px 50px'});}
   if (mos_vid_text == 'Антипыль') {jQuery('#total #calc').css({'background-image':'url(/templates/helpokno/images/31.png)', 'background-position':'365px 50px'});}
   if (mos_vid_text == 'Антикошка') {jQuery('#total #calc').css({'background-image':'url(/templates/helpokno/images/moscalc6.png)', 'background-position':'365px 50px'});}
    if (mos_vid_text == 'Дверная') {jQuery('#total #calc').css({'background-image':'url(/templates/helpokno/images/21.png)', 'background-position':'405px 62px'});}
 }


/* Генератор дат для отзывов + сегодняшняя дата */
jQuery(document).ready(function() {
var d = new Date();
var month=new Array("января","февраля","марта","апреля","мая","июня",
"июля","августа","сентября","октября","ноября","декабря");
var r1 = Math.floor(Math.random() * (7 - 1) + 1); 
var r2 = Math.floor(Math.random() * (21 - 8) + 8);
var r3 = Math.floor(Math.random() * (28 - 22) + 22);
var nd1 = new Date(d-r1*1000*60*60*24)
var nd2 = new Date(d-r2*1000*60*60*24)
var nd3 = new Date(d-r3*1000*60*60*24)
jQuery('#today').html(d.getDate() + " " + month[d.getMonth()]);			//сегодня
jQuery('#today1').html(nd1.getDate() + " " + month[nd1.getMonth()]);		//до 1 недели назад
jQuery('#today2').html(nd2.getDate() + " " + month[nd2.getMonth()]);		//примерно 2-3 недели назад
jQuery('#today3').html(nd3.getDate() + " " + month[nd3.getMonth()]);		//примерно 3-4 недели назад
});
/* end */




// button-to-up start
jQuery(document).ready(function(){
				jQuery(function () {
			var scrollDiv = document.createElement('div');
			jQuery(scrollDiv).attr({id: 'toTop',title: 'Наверх'}).html('').appendTo('body');    
			jQuery(window).scroll(function () {
			        if (jQuery(this).scrollTop() != 0) {
			            jQuery('#toTop').fadeIn();
			        } else {
			            jQuery('#toTop').fadeOut();
			        }
			    });
			    jQuery('#toTop').click(function () {
			        jQuery('body,html').animate({
			            scrollTop: 0
			        },
			        800);
			    });
			});		
			});			
window.highlight = ["up","ups","'up","upping","button","buttons","button's","button'","up button"];
// button-to-up end

// button-to-bott start
jQuery(document).ready(function(){
var scrollBott = jQuery("#total").height() + jQuery("#footer").height() - jQuery(window).height() - 700;
				jQuery(function () {
			var scrollDiv = document.createElement('div');
			jQuery(scrollDiv).attr({id: 'toBot',title: 'Меню'}).html('').appendTo('body');    
			jQuery(window).scroll(function () {
			        if (jQuery(this).scrollTop() <= scrollBott) {
			            jQuery('#toBot').fadeIn();
			        } else {
			            jQuery('#toBot').fadeOut();
			        }
			    });
			    jQuery('#toBot').click(function () {
			        jQuery('body,html').animate({
			            scrollTop: jQuery("#total").height()
			        },
			        800);
			    });
			});		
			});			
window.highlight = ["up","ups","'up","upping","button","buttons","button's","button'","up button"];
// button-to-bott end



//mobile main menu
jQuery(document).ready(function() {jQuery('.m_menu').click(function() {jQuery('html, body').animate({ scrollTop: jQuery(footer).offset().top }, 1000);});});
//mobile main menu end
