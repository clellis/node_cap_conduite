$(function()
{
	$.getScript("i18next/i18next.js");
	
	//////////////////////////////// NAVIGATION /////////////////////////////////
	//Animation style button
	$('.navbar-nav > li > a').hover(function(){
		$(this).addClass("ui-state-hover");}, function(){
		$(this).removeClass("ui-state-hover");
	}).mousedown(function(){
		$(this).addClass("ui-state-active");
	}).mouseup(function(){
		$(this).removeClass("ui-state-active");
	}).focus(function(){
		$(this).addClass("ui-state-focus");
	});
	
	$("#submenu-parent-auto").hover(function(){
		$("#submenu-auto").show();
	}).click(function(){
		$("#submenu-auto").toggle();
	});
	$("#submenu-superparent-auto").hover(function(){
		$("#submenu-auto").hide();
	});
	
	$("#submenu-parent-moto").hover(function(){
		$("#submenu-moto").show();
	}).click(function(){
		$("#submenu-moto").toggle();
	});
	$("#submenu-superparent-moto").hover(function(){
		$("#submenu-moto").hide();
	});
	
	if( $("#defilbar").is(":visible")){
		$("#defilbar").removeClass("contenu")
			.removeClass("ui-widget")
			.removeClass("ui-widget-content");
	};
	//////////////////////////////////////////////////////////////////////////////
	
	//////////////////// Infobulles ///////////////////////
	$("a#infoBulle").mouseover(function() 
		{
			$(this).next("#infoBulle").css("transform","scale(1) rotate(0)").css("opacity","1");
			return false;
		}
	);
	$("a#infoBulle").mouseout(function() 
		{
			$(this).next("#infoBulle").css("transform","scale(0) rotate(-12deg)").css("opacity","0");
			return false;
		}
	);
	//////////////////////////////////////////////////////
	
	///////////// Fonctions //////////////
	$("#defilbar").liScroll();
	
	$("#button_envoyer_mail").click(function(){
		  $("#row_envoyer_mail").toggle(500);
	});
	
//	$(function(){
//		var taille_thumbnail_recup = ( 100 * parseFloat($('#thumbnail_recup').css('height')) / parseFloat($('#thumbnail_recup').parent().css('height')) ) + '%';
//		var taille_thumbnail_b = ( 100 * parseFloat($('#thumbnail_b').css('height')) / parseFloat($('#thumbnail_b').parent().css('height')) ) + '%';
//		var taille_thumbnail_aac = ( 100 * parseFloat($('#thumbnail_aac').css('height')) / parseFloat($('#thumbnail_aac').parent().css('height')) ) + '%';
//		
//		var tailles = [taille_thumbnail_recup, taille_thumbnail_b, taille_thumbnail_aac];
//		var bonne_taille = tailles[0];
//	    for (i=0; i<tailles.length; i++){
//            if (tailles[i] > bonne_taille){
//                bonne_taille = tailles[i];
//            }
//        }
//		
//	    $("#thumbnail_b").css("height", bonne_taille);
//		$("#thumbnail_aac").css("height", bonne_taille);
//		$("#thumbnail_recup").css("height", bonne_taille);
//	});
	////////////////////////////////////
});