//pageContainerElement.page({ domCache: true });
//$.mobile.page.prototype.options.domCache = true;
$( document ).on( "pagecreate", function() {
	$( "body > [data-role='panel']" ).panel();
	$( "body > [data-role='panel'] [data-role='listview']" ).listview();
	});
	$( document ).one( "pageshow", function() {
	$( "body > [data-role='header']" ).toolbar();
	$( "body > [data-role='header'] [data-role='navbar']" ).navbar();
	});
	
	
	
