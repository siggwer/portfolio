import('jquery');

/**
 * Function to animated submit button
 */
var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    //e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    
    e.target.classList.add('animate');
    
    setTimeout(function(){
      e.target.classList.remove('animate');
    },500);
  };
  
  var classname = document.getElementsByClassName("buttonContact");
  
  for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', animateButton, false);
  }
// $("#contactForm").validator().on("submit", function (event) {
//     if (event.isDefaultPrevented()) {
//         // handle the invalid form...
//         formError();
//         submitMSG(false, "Avez-vous correctement rempli le formulaire?");
//     } else {
//         // everything looks good!
//         event.preventDefault();
//         submitForm();
//     }
// });

// function submitForm(){
//     // Initiate Variables With Form Content
//     var name = $("#name").val();
//     var email = $("#email").val();
//     var message = $("#message").val();

//     $.ajax({
//         type: "POST",
//         url: "php/form-process.php",
//         data: "name=" + name + "&email=" + email + "&message=" + message,
//         success : function(text){
//             if (text == "success"){
//                 formSuccess();
//             } else {
//                 formError();
//                 submitMSG(false,text);
//             }
//         }
//     });
// }

// function formSuccess(){
//     $("#contactForm")[0].reset();
//     submitMSG(true, "Message Submitted!")
// }

// function formError(){
//     $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//         $(this).removeClass();
//     });
// }

// function submitMSG(valid, msg){
//     if(valid){
//         var msgClasses = "h3 text-center tada animated text-success";
//     } else {
//         var msgClasses = "h3 text-center text-danger";
//     }
//     $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
// }