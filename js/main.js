var defaultConsoleString = "$Rishi Masand > ";
var consoleFontSize = parseInt($("#terminal").height() / 20.4)+"px";
$( window ).resize(function() {
  var fontSize = parseInt($("#header").height() / 2)+"px";
    //alert(fontSize);
    $("#header").css('font-size', fontSize);
	
	consoleFontSize = parseInt($("#terminal").height() / 20.4)+"px";
	
    //alert(fontSize);
    $(".console-text").css('font-size', consoleFontSize);
	
	var hiFontSize = parseInt($("#terminal").height() / 4.8)+"px";
	$('#hi').css('font-size', hiFontSize);
	$('#i-am').css('font-size', hiFontSize);
	
	var mpFontSize = parseInt($("#terminal").height() / 9.6)+"px";
	$('#mpb').css('font-size', mpFontSize);
	
	var ptFontSize = parseInt($("#terminal").height() / 20.4)+"px";
	$('.project-title').css('font-size', ptFontSize);
});
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(document).ready(function(){
	
	$('.project-item').hover(function(){
		// $('.project-item-github').css('opacity', '1');
		// $(this).find('.project-item-github').css('opacity', '1');
		$(this).find('.project-item-github').animate({opacity: 1}, 480, function(){
			
		});
	}, function(){
		$(this).find('.project-item-github').animate({opacity: 0}, 480, function(){
			
		});
	});
	
	var ptFontSize = parseInt($("#terminal").height() / 20.4)+"px";
	$('.project-title').css('font-size', ptFontSize);
	
	$('.typist').css('font-family', 'Droid Sans Mono');
	
	setInterval(function(){
		document.title = "$Rishi Masand > |";
		setTimeout(function(){
			document.title = "$Rishi Masand > ";
		}, 1000);
	}, 2000);
	
	var hiFontSize = parseInt($("#terminal").height() / 4.4)+"px";
	$('#hi').css('font-size', hiFontSize);
	$('#i-am').css('font-size', hiFontSize);
	var mpFontSize = parseInt($("#terminal").height() / 9.6)+"px";
	$('#mpb').css('font-size', mpFontSize);
	
	$('.typist').typist({
		speed: 12,
		text: 'I am a Developer'
	});
	
	var iAmCount = 1;
	setInterval(function(){
		switch (iAmCount) {
			case 0:
				$('.typist').typistRemove($('.typist').text().length);
				setTimeout(function(){
					$('.typist').css('font-family', 'Droid Sans Mono');
					$('.typist').typistAdd("I am a Developer");
				}, (1000 / 12) * $('.typist').text().length);
				
				
				break;
			case 1:
				$('.typist').typistRemove($('.typist').text().length);
				setTimeout(function(){
					$('.typist').css('font-family', 'Courgette');
					$('.typist').typistAdd("I am a Designer");
				}, (1000 / 12) * $('.typist').text().length);
				
				
				break;
			case 2:
				$('.typist').typistRemove($('.typist').text().length);
				
				setTimeout(function(){
					$('.typist').css('font-family', 'Song');
					$('.typist').typistAdd("I am a Guitarist");
				}, (1000 / 12) * $('.typist').text().length);
				
				break;
			case 3:
				$('.typist').typistRemove($('.typist').text().length);
				
				setTimeout(function(){
					$('.typist').css('font-family', 'Sport');
					$('.typist').typistAdd("I am a Tennis Player");
				}, (1000 / 12) * $('.typist').text().length);
				
				break;
			case 4:
				$('.typist').typistRemove($('.typist').text().length);
				setTimeout(function(){
					$('.typist').css('font-family', 'Patriots');
					$('.typist').typistAdd("I am a Patriots Fan");
				}, (1000 / 12) * $('.typist').text().length);
				
				
				break;
			case 5:
				$('.typist').typistRemove($('.typist').text().length);
				setTimeout(function(){
					$('.typist').css('font-family', 'StarWars');
					$('.typist').typistAdd("i am a Star Wars Fan");
				}, (1000 / 12) * $('.typist').text().length);
				
				
				break;	
		}
		iAmCount++;
		if (iAmCount == 6){
			iAmCount = 0;
		}
	}, 6400);
	
	// setInterval(function(){
	// 	switch (iAmCount) {
	// 		case 0:
	// 			$('.typist').css('font-family', 'Droid Sans Mono');
	// 			$('.typist').typistAdd("I am a Developer");
	// 			setTimeout(function(){
	// 				$('.typist').typistRemove(16);
	// 			}, 2400);
	// 			break;
	// 		case 1:
	// 			$('.typist').css('font-family', 'Courgette');
	// 			$('.typist').typistAdd("I am a Designer");
	// 			setTimeout(function(){
	// 				$('.typist').typistRemove(15);
	// 			}, 2400);
	// 			break;
	// 		case 2:
	// 			$('.typist').css('font-family', 'Song');
	// 			$('.typist').typistAdd("I am a Guitarist");
	// 			setTimeout(function(){
	// 				$('.typist').typistRemove(16);
	// 			}, 2400);
	// 			break;
	// 		case 3:
	// 			$('.typist').css('font-family', 'Sport');
	// 			$('.typist').typistAdd("I am a Tennis Player");
	// 			setTimeout(function(){
	// 				$('.typist').typistRemove(20);
	// 			}, 2400);
	// 			break;
	// 		case 4:
	// 			$('.typist').css('font-family', 'Patriots');
	// 			$('.typist').typistAdd("I am a Patriots Fan");
	// 			setTimeout(function(){
	// 				$('.typist').typistRemove(19);
	// 			}, 2400);
	// 			break;
	// 		case 5:
	// 			$('.typist').css('font-family', 'StarWars');
	// 			$('.typist').typistAdd("i am a Star Wars Fan");
	// 			setTimeout(function(){
	// 				$('.typist').typistRemove(20);
	// 			}, 2400);
	// 			break;	
	// 	}
	// 	iAmCount++;
	// 	if (iAmCount == 6){
	// 		iAmCount = 0;
	// 	}
	// }, 6400);
	
	var fontSize = parseInt($("#header").height() / 2)+"px";
    //alert(fontSize);
    $("#header").css('font-size', fontSize);
	
	consoleFontSize = parseInt($("#terminal").height() / 20.4)+"px";
    //alert(fontSize);
    $(".console-text").css('font-size', consoleFontSize);
	
	setInterval(function(){ 
		
		$('#in-use').append("<cursorbar>|</cursorbar>");
		setTimeout(function(){ 
			$('cursorbar').remove();
		}, 1000);
		
	 }, 2000);
	 
	//  setInterval(function(){
	// 	 var now = new Date();
	// 	 var hours;
	// 	 var minutes;
	// 	 var seconds;
	// 	 if (now.getHours() >= 10){
	// 		 hours = now.getHours() + 10;
	// 	 }
	// 	 else {
	// 		 hours = "0" + now.getHours() + 10;
	// 	 }
	// 	 if (now.getMinutes() >= 10){
	// 		 minutes = now.getMinutes() - 10;
	// 	 }
	// 	 else {
	// 		 minutes = "0" + now.getMinutes() - 10;
	// 	 }
	// 	 if (now.getSeconds() >= 10){
	// 		 seconds = now.getSeconds() - 10;
	// 	 }
	// 	 else {
	// 		 seconds = "0" + now.getSeconds() - 10;
	// 	 }
	// 	 var colorString = "#" + hours + minutes + seconds;
    //      $('body').css('background-color', colorString);
	//  }, 1000);

	$('body').keypress(function(e){

		$('cursorbar').remove();

		var keycode = (event.keyCode ? event.keyCode : event.which);

		$('#in-use').append(String.fromCharCode(keycode));
	});

	$('#console-input').keydown(function(){
		$('#in-use').text(defaultConsoleString + $('#console-input').val());
	});

	 $('body').keydown(function(e){

	 	if(e.keyCode == 8){
	 		e.preventDefault();
	 		var tempString = $('#in-use').text();

	 		if (!(tempString == defaultConsoleString)){
	 				 		tempString = tempString.substring(0, tempString.length - 1);
	 		$('#in-use').text(tempString);
	 		}

	 	}

	 	if(e.keyCode == 13){
			 
			$('cursorbar').remove();
			
	 		var tempString = $('#in-use').text().substring(defaultConsoleString.length, $('#in-use').text().length);
	 		e.preventDefault();
	 		if (tempString == "-help" || tempString == "-h" || tempString == "help"){
	 			$('#terminal').append("<p class=\"console-text\">Help Menu</p>");
	 			$('#terminal').append("<p class=\"console-text\">-h, -help                show this help menu</p>");
	 			$('#terminal').append("<p class=\"console-text\">-p, -projects            show projects</p>");
	 			$('#terminal').append("<p class=\"console-text\">-a, -about               show about me</p>");
	 			// $('#terminal').append("<p class=\"console-text\">-e, -experience		 show work/hackathon experience</p>");
	 			$('#terminal').append("<p class=\"console-text\">-s, -skills		 show known languages, APIs, frameworks, and SDKs</p>");
	 			$('#terminal').append("<p class=\"console-text\">-c, -contact		 show contact information</p>");
	 		}
	 		else if (tempString == "-projects" || tempString == "-p"){
	 			$('#terminal').append("<p class=\"console-text\">projects</p>");
	 		}
	 		else if (tempString == "-about" || tempString == "-a"){
	 			$('#terminal').append("<p class=\"console-text\">about</p>");
	 		}
	 		else if (tempString == "-experience" || tempString == "-e"){
	 			$('#terminal').append("<p class=\"console-text\">experience</p>");
	 		}
	 		else if (tempString == "-skills" || tempString == "-s"){
	 			$('#terminal').append("<p class=\"console-text\">skills</p>");
	 		}
	 		else if (tempString == "-contact" || tempString == "-c"){
	 			$('#terminal').append("<p class=\"console-text\">contact</p>");
	 		}
			else if (tempString == "clear"){
	 			$('#terminal').empty();
	 		}
			else {
				 $('#terminal').append("<p class=\"console-text\">" + tempString + " is not an operable command. Please type -h for help.</p>");
			}
	 		$('#in-use').attr("id", "not-in-use");
	 		$('#terminal').append("<p class=\"console-text\" id=\"in-use\"></p>");
	 		$('#in-use').text(defaultConsoleString);
			 
			consoleFontSize = parseInt($("#terminal").height() / 20.4)+"px";
			$(".console-text").css('font-size', consoleFontSize);
			
			$('#terminal').animate({scrollTop: 1E10});
	 	}

	 });    

});