$(function () {
	// file tab ------------------------------------------------
	var fileSlideHover = false;
	$( "#file-option" ).hover(
	  function() {
	    $( '#file-slide-down' ).toggle();
	  }, function() {
	  	setTimeout(function() {
	  		if (!fileSlideHover) return;
	  		$( '#file-slide-down' ).toggle();
	  	}, 100)
	  	
	  }
	);
	$( "#file-slide-down" ).hover(
	  function() {
	    fileSlideHover = true;
	  }, function() {
	  	fileSlideHover = false;
  		$( '#file-slide-down' ).toggle();
	  }
	);

	// add mesh tab ------------------------------------------------
	var addSlideHover = false;
	$( "#add-option" ).hover(
	  function() {
	    $( '#add-slide-down' ).toggle();
	  }, function() {
	  	setTimeout(function() {
	  		if (!addSlideHover) return;
	  		$( '#add-slide-down' ).toggle();
	  	}, 100)
	  	
	  }
	);
	$( "#add-slide-down" ).hover(
	  function() {
	    addSlideHover = true;
	  }, function() {
	  	addSlideHover = false;
  		$( '#add-slide-down' ).toggle();
	  }
	);

	// view tab ------------------------------------------------
	var viewSlideHover = false;
	$( "#view-option" ).hover(
	  function() {
	    $( '#view-slide-down' ).toggle();
	  }, function() {
	  	setTimeout(function() {
	  		if (!viewSlideHover) return;
	  		$( '#view-slide-down' ).toggle();
	  	}, 100)
	  	
	  }
	);
	$( "#view-slide-down" ).hover(
	  function() {
	    viewSlideHover = true;
	  }, function() {
	  	viewSlideHover = false;
  		$( '#view-slide-down' ).toggle();
	  }
	);

	$( "#Twitter-icon" ).hover(
	  function() {
	    $( '#Twitter-icon' ).addClass('icon-hover', 1000);
	  }, function() {
  		$( '#Twitter-icon' ).removeClass('icon-hover', 1000);
	  }
	);

	$( "#Facebook-icon" ).hover(
	  function() {
	    $( '#Facebook-icon' ).addClass('icon-hover', 1000);
	  }, function() {
  		$( '#Facebook-icon' ).removeClass('icon-hover', 1000);
	  }
	);

	$( "#Googleplus-icon" ).hover(
	  function() {
	    $( '#Googleplus-icon' ).addClass('icon-hover', 1000);
	  }, function() {
  		$( '#Googleplus-icon' ).removeClass('icon-hover', 1000);
	  }
	);
});