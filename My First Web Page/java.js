// Dark - Mode

function myFunction() {
    var element = document.body;
    var ele = document.getElementById('myID');  
    var foo = document.getElementById('myIDfooter')  
    element.classList.toggle("dark-mode"); 
    ele.classList.toggle("my-style");
    foo.classList.toggle("my-style");  

    }
    
  // To the Top

  var mybutton = document.getElementById("btn");

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topas() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


  // Video Play / Pause

  var video = document.getElementById("background-video");
var btn = document.getElementById("btnvideo");

function videobtn() {
  if (video.paused) {
    video.play();
    
  } else {
    video.pause();
    
  }
}
  
