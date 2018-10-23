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

});