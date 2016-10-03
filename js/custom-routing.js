
$(function(){
	$('#msgs-p01, #inbx-p01').click(function(){
		$('#msgs-01').load('jqueryMobile/assets/partials/msgs-01.html'),
		$.getScript("jqueryMobile/js/custom-routing.js");
		$('.main-header h2').html('Inbox'),
		$('#msg-l').html('unread messages:'),
		$('#msg-n').html('32 '); 
		});
	});
$(function(){
	$('#msgs-p02').click(function(){
		$('#msgs-01').load('jqueryMobile/assets/partials/msgs-02.html'),
		$.getScript("jqueryMobile/js/custom-routing.js");
		
		});
	});
$(function(){
	$('#msgs-p03').click(function(){
		$('#msgs-01').load('jqueryMobile/assets/partials/msgs-03.html'),
		$.getScript("jqueryMobile/js/custom-routing.js");
		
		});
	});
$(function(){
	$('#msgs-p04').click(function(){
		$('#msgs-01').load('jqueryMobile/assets/partials/msgs-04.html'),
		$.getScript("jqueryMobile/js/custom-routing.js");
		});
	});
	
$(function(){
	$('#drfts-p01').click(function(){
		$('#msgs-01').load('jqueryMobile/assets/partials/drfts-01.html'),
		$.getScript("jqueryMobile/js/custom-routing.js"),
		$('.main-header h2').html('Drafts'),
		$('#msg-l').html('unfinished drafts:'),
		$('#msg-n').html('10 '); //attach number value to server
		});
	});	
	
$(function(){
	$('#snt-p01').click(function(){
		$('#msgs-01').load('jqueryMobile/assets/partials/sent-01.html'),
		$.getScript("jqueryMobile/js/custom-routing.js"),
		$('.main-header h2').html('Sent'),
		$('#msg-l').html('sent messages:'),
		$('#msg-n').html('10 '); //attach number value to server
		});
	});

$(function(){
	$('#spm-p01').click(function(){
		$('#msgs-01').load('jqueryMobile/assets/partials/spm-01.html'),
		$.getScript("jqueryMobile/js/custom-routing.js"),
		$('.main-header h2').html('Spam'),
		$('#msg-l').html('spam messages:'),
		$('#msg-n').html('10 '); //attach number value to server
		});
	});
	
$(function(){
	$('#trsh-p01').click(function(){
		$('#msgs-01').load('jqueryMobile/assets/partials/trash-01.html'),
		$.getScript("jqueryMobile/js/custom-routing.js"),
		$('.main-header h2').html('Trash'),
		$('#msg-l').html('deleted messages:'),
		$('#msg-n').html('10 '); //attach number value to server
		});
	});
$(function(){
	$('#n-msg').click(function(){
		$('#msgs-01').load('jqueryMobile/assets/partials/n-msg.html'),
		$('.main-header h2').html('New message'),
		$('#msg-l').html('create a new message'),
		$.getScript("jqueryMobile/js/custom-routing.js"),
		$('#msg-n').html(' ');
		});
	});

$(function(){
	$('#gal-p01').click(function(){
		$('#gallery-content').load('jqueryMobile/assets/partials/gallery-01.html');
		});
	});	
$(function(){
	$('#gal-p02').click(function(){
		$('#gallery-content').load('jqueryMobile/assets/partials/gallery-02.html');
		$('#glr-pn').html(' 2');
		$.getScript("jqueryMobile/js/custom-routing.js");
		});
	});
$(function(){
	$('#blg-p01').click(function(){
		$('#blog-content').load('jqueryMobile/assets/partials/blog-01.html');
		});
	});
$(function(){
	$('#blg-p02').click(function(){
		$('#blog-content').load('jqueryMobile/assets/partials/blog-02.html'),
		$('#blg-pn').html(' 2'),
		$('#blg-i').html('Showing 6-10 of 20');
		$.getScript("jqueryMobile/js/custom-routing.js");
		});
	});
$(function(){
	$('#blg-p03').click(function(){
		$('#blog-content').load('jqueryMobile/assets/partials/blog-03.html'),
		$('#blg-pn').html(' 3'),
		$('#blg-i').html('Showing 11-15 of 20');
		$.getScript("jqueryMobile/js/custom-routing.js");
		});
	});
$(function(){
	$('#blg-p04').click(function(){
		$('#blog-content').load('jqueryMobile/assets/partials/blog-04.html'),
		$('#blg-pn').html(' 4'),
		$('#blg-i').html('Showing 16-20 of 20');
		$.getScript("jqueryMobile/js/custom-routing.js");
		});
	});