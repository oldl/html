$(document).ready(function () {

// Input Effect

  $('.input-effect').val('');

  $('.input-effect').focusout(function(){
    if($(this).val() != ''){
      $(this).addClass('has-content');
    }else{
      $(this).removeClass('has-content');
    }
  });

// hierarchy

  (function hierarchy(element) {

    element.each(function () {
      var _this = $(this);
      var childrenItem = _this.children('.hierarchy-item');
      var hasChildrenItem = false;

      childrenItem.length != 0 ? hasChildrenItem = true : hasChildrenItem = false;

      hasChildrenItem ? _this.addClass('hasChildren') : null ;

    })

  })($('.hierarchy-item'));

  $('.hierarchy-item .hierarchy-card').click(function () {
    $(this).parent().toggleClass('open');
  });

  // Custom Select

  $('.selectpicker').selectpicker();

  // Rating

  var $star_rating = $('.rating-item');

  var SetRatingStar = function() {
    return $star_rating.each(function() {
      if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
        return $(this).addClass('active');
      } else {
        return $(this).removeClass('active');
      }
    });
  };

  $star_rating.on('click', function() {
    $star_rating.siblings('input.rating-value').val($(this).data('rating'));
    return SetRatingStar();
  });

  SetRatingStar();
  $(document).ready(function() {

  });

  // Range

  $('.slider-range').click(function () {
    $(this).addClass('clicked');
  });


});