let click = document.querySelector('.play-stop');
let audio = document.querySelector('#Audio');
let play = document.querySelector('#play');
let navbar = document.querySelector(".navbar");
let beepOne = $("#beep")[0];

$(document).ready(function () {
  $(".tot-section").mouseenter(function () {
    beepOne.play();
  });
  });

click.addEventListener('click', ()=>
{
  if (audio.paused) {
    if(play.classList.contains('fa-play'))
    {
      play.classList.remove('fa-play');
      play.classList.add('fa-pause');
      audio.play();
    }
  }else
  {
    play.classList.remove('fa-pause');
    play.classList.add('fa-play');
    audio.pause();
  }

})
    window.addEventListener('load', function() {
      var loading = document.querySelector('.loading');
      var body = document.querySelector('body')
      $("body").addClass("overflow-visible").removeClass("overflow-hidden");
      loading.style.display = 'none';
    });


  window.addEventListener('scroll',function(e){
    let scrollInfo = this.scrollY
    if (scrollInfo >= 500) {
      navbar.style.backgroundColor = "white";
    } else{
      navbar.style.backgroundColor = "transparent";
    }
  })

  var splide = new Splide( '.splide', {
    type    : 'loop',
    perPage : 3,
    autoplay: true,
    arrowPath: 'm15.5 0.932-4.3 4.38...',
    focus  : 0,

  } );
  
  splide.mount();
