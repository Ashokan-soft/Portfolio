(function () {
    var words = ["Ui / UX Design","Photographer","Developer","Youtube","Happy Person" ],
    i = 0;
    setInterval(function(){ $('#words').fadeOut(function(){
        $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
      }); }, 3000)
  })();

  