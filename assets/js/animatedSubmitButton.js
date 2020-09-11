import('jquery');

/**
 * Function to animated submit button
 */
var animateButton = function(e) {

    e.preventDefault();
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    
    e.target.classList.add('animate');
    
    setTimeout(function(){
      e.target.classList.remove('animate');
    },2500);
  };
  
  var classname = document.getElementsByClassName("buttonContact");
  
  for (var i = 0; i < classname.length; i++) {
    console.log(classname);
    classname[i].addEventListener('submit', animateButton, false);
  }