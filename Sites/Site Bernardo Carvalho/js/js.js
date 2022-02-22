$(document).ready(function() {
						   
	var hash = window.location.hash.substr(1);
	var href = $('#nav li a').each(function(){
		var href = $(this).attr('href');
		if(hash==href.substr(0,href.length-5)){
			var toLoad = hash+'.html #content';
			$('#content').load(toLoad)
		}											
	});

	$('#nav li a').click(function(){
								  
		var toLoad = $(this).attr('href')+' #content';
		$('#content').hide('fast',loadContent);
		$('#load').remove();
		$('#wrapper').append('<span id="load">LOADING...</span>');
		$('#load').fadeIn('normal');
		window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
		function loadContent() {
			$('#content').load(toLoad,'',showNewContent())
		}
		function showNewContent() {
			$('#content').show('normal',hideLoader());
		}
		function hideLoader() {
			$('#load').fadeOut('normal');
		}
		return false;
		
	});

        $(".nav-link").click(function(){
          $(".nav-link").removeClass("active");
        });
        $(".nav-link-index").click(function(){
            $(".nav-link-index").addClass("active");
          });
          $(".nav-link-quem-somos").click(function(){
            $(".nav-link-quem-somos").addClass("active");
          });
  
          $(".nav-link-produtos").click(function(){
            $(".nav-link-produtos").addClass("active");
          });
  
          $(".nav-link-novidades").click(function(){
            $(".nav-link-novidades").addClass("active");
          });
  
          $(".nav-link-contacto").click(function(){
            $(".nav-link-contacto").addClass("active");
          });
  
});