var carouselWidth = $('.carousel-inner')[0].scrollWidth; 
var carWidth = $('.carousel-item').outerWidth(true); 
var scrollPosition = 0;

$('.carousel-control-next, .carousel-control-prev').on('click', function () {
  var $this = $(this); // Save the clicked button
  
  // Disable both buttons during animation
  $('.carousel-control-next, .carousel-control-prev').prop('disabled', true);
  
  if ($this.hasClass('carousel-control-next')) {
    if (scrollPosition < (carouselWidth - (carWidth * 4))) {
      scrollPosition += carWidth;
      $('.carousel-inner').animate({ scrollLeft: scrollPosition }, 600, function () {
        // Re-enable buttons after animation
        $('.carousel-control-next, .carousel-control-prev').prop('disabled', false);
      });
    } else {
      // Re-enable buttons if no animation occurs
      $('.carousel-control-next, .carousel-control-prev').prop('disabled', false);
    }
  } else if ($this.hasClass('carousel-control-prev')) {
    if (scrollPosition > 0) {
      scrollPosition -= carWidth;
      $('.carousel-inner').animate({ scrollLeft: scrollPosition }, 600, function () {
        $('.carousel-control-next, .carousel-control-prev').prop('disabled', false);
      });
    } else {
      $('.carousel-control-next, .carousel-control-prev').prop('disabled', false);
    }
  }
});
