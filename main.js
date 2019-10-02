/* ========================================================
                       Sticky Header
  ========================================================*/
  jQuery(document).on("scroll", function () {
    if ($(document).scrollTop() > 120) {
        $("header").addClass("small"), 1000;
    } else {
        $("header").removeClass("small");
    }
});

/* ========================================================
                      Change Section Menu
  ========================================================*/
  /* A menu tulajdonságaink a megváltoztatása  egy-egy section-ban  */
  var top1 = $('#pink').offset().top - 200;
  var top2 = $('#blue').offset().top - 200;
  var top3 = $('#yellow').offset().top - 200;
  var top4 = $('#grey').offset().top - 200;


  $(document).scroll(function () {
    var scrollPos = $(document).scrollTop();
    if (scrollPos <= top2) {
      $('.proba').css('display', 'none');
      $('.proba-2').css('display', 'none');
      $('.proba-3').css('display', 'none');

      
    
    } else if (scrollPos >= top2 && scrollPos <= top3) {
      $('.proba').css('display', 'block');
      $('.proba-2').css('display', 'none');
      $('.proba-3').css('display', 'none');

    } else if (scrollPos >= top3 && scrollPos <= top4) {
      $('.proba-2').css('display', 'block');
      $('.proba-3').css('display', 'none');
      

    } else if (scrollPos >= top4) {
      $('.proba-3').css('display', 'block');
    }
  }); 
