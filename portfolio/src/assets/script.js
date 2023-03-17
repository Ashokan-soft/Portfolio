(function () {
    var words = ["Image Designer","Photographer","Web Developer","Full Stack Developer","Angular Developer"],
    i = 0;
    setInterval(function(){ $('#words').fadeOut(function(){
        $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
      }); }, 3000)
  })();
  