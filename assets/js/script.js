$(function(){

	var ativo;

	chat();

	function chat(){
		ativo = $('.chat .chatUser').attr('data-ativo');

		if(ativo == 'on'){			
			$('.chat .chatUser').attr('data-ativo','off');
			$('.chat .chatUser').animate({
				'height':'0px'
			}, {
				duration:1000,
				complete:function(){
					$('.chat').animate({
						'width':'175px'
					},500);
				}
			});			
		}else{
			$('.chat .chatUser').attr('data-ativo','on');
			$('.chat .chatUser').animate({
				'height':'370px'
			},1000);
			
			$('.chat').css('width','350px');
		}
	}

	$('#fechar').bind('click', function(){
		chat();
	});
});