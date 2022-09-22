
$(function() {
    $('.menu').click(function() {
        $('.menu').toggleClass('active');
        $('.menu-open').toggleClass('active');
        $('.menu-open-button').toggleClass('active');
        $('.menu_text').toggleClass('active');
        $('.menu_logo').toggleClass('active');
        $('.menu-item').toggleClass('active');
    });
});

$(function() {
    $('.sp_menu').click(function() {
        $('.menu').toggleClass('active');
        $('.menu-open').toggleClass('active');
        $('.menu-open-button').toggleClass('active');
        $('.menu_text').toggleClass('active');
        $('.menu_logo').toggleClass('active');
        $('.menu-item').toggleClass('active');
    });
});

$(function() {
    $('.sp_menu.sp_menu_title').click(function() {
        $('.menu').toggleClass('active');
        $('.menu-open').toggleClass('active');
        $('.menu-open-button').toggleClass('active');
        $('.menu_text').toggleClass('active');
        $('.menu_logo').toggleClass('active');
        $('.menu-item').toggleClass('active');
    });
});

$(document).ready(function() {
    $('.tab-panels .tabs li').on('click', function(){ 
      $('.tab-panels .tabs .active').removeClass('active'); 
      $(this).addClass('active');
      var paneltoshow = $(this).attr('rel');
                  
    $('.tab-panels .panel.active').slideUp('100', function(){
      $(this).removeClass('active');              

    $('#'+paneltoshow).delay('100').slideDown(function () {
      $(this).addClass('active');          
    });
   });

    });
});

$(document).ready(function() {
    $('.tab-panels .tabs li').on('click', function(){ 
      $('.tab-panels .tabs .active').removeClass('active'); 
      $(this).addClass('active');
      var paneltoshow = $(this).attr('rel');
                  
    $('.tab-panels .panel.active').slideUp('100', function(){
      $(this).removeClass('active');              

    $('#'+paneltoshow).delay('100').slideDown(function () {
      $(this).addClass('active');          
    });
   });

    });
});

$(document).ready(function() {
    $('.panel-2').on('click' , function() {
        $('#panel-1').removeClass('active'); 
      $('#panel-2').addClass('active');

    });
});



$(function(){
    var menu = jQuery('.sp_menu');
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            menu.addClass('active');
       } else {
            menu.removeClass('active');
       }
    });
  });