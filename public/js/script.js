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
	
	$("#submenu-parent").hover(function(){
		$("#submenu").show();
	}).click(function(){
		$("#submenu").toggle();
	});
	$("#submenu-superparent").hover(function(){
		$("#submenu").hide();
	});
	
	if( $("#defilbar").is(":visible")){
		$("#defilbar").removeClass("contenu")
			.removeClass("ui-widget")
			.removeClass("ui-widget-content");
	};
	//////////////////////////////////////////////////////////////////////////////
	
	//Apparition et gestion des drapeaux et du logo1
	$('.logo1').delay(4700).animate({top:"35px"},1000);
	
	//Initialisation de la banniere
	initBan();
		
	//Infobulles
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
	
	$(function(){
	    $("#defilbar").liScroll();
	});
});

function initBan()
{
	//Apparition du premier slogan	
	$('.titre1').animate({left:"28%"},1000);
	
	//Disparition du premier slogan	
	//$('.titre1').delay(500).fadeOut(1000);
	
	//Apparition du deuxieme slogan
	//jQuery('.titre2').delay(1300).animate({left:"28%"},2000);
	var temp = 1300;
	var texte = "Pour une conduite securisée";
	//Apparition lettre par lettre du deuxieme slogan
	var extrait = texte.split("");
	for (i=0; i<extrait.length; i++)
	{
		setTimeout("jQuery('.titre2 h3').append('" + extrait[i] + "');",temp);
		temp+=50;
	}
		
	//Disparition du deuxieme slogan
	//jQuery('#slog2').delay(2000).fadeOut(1000);
		
	//Attribution du style au titre 2
	$('.titre2').delay(5000).animate({color:"white"},1500);
	
}