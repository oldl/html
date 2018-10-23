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

  $('.hierarchy-item .icon').click(function () {
    $(this).parent().parent().toggleClass('open');
  });


});