$(document).ready(function() {


/*CREATING SPARKLES BECAUSE EVERYTHING IS BETTER WHEN IT SHINES! */

$(".sparkley-logo").sparkle({
  color: "#FFFFFF",
  count: 20,
  overlap: 0,
  speed: 1,
  minSize: 2,
  maxSize: 10,
  direction: "both"
});


// first we need an element with sparkles
$(".sparkley-logo").sparkle();

// here we can remove the default mouse/keyboard triggers for sparkles,
//  we don't want them to trigger on interaction
$(".sparkley-logo")
    .off("mouseover.sparkle")
    .off("mouseout.sparkle")
    .off("focus.sparkle")
    .off("blur.sparkle")

// we can also trigger the start/stop events on the element
// which has the sparkles bound to it!
$(".sparkley-logo")
    .trigger("start.sparkle")
    .on("click", function() {
        $(this).trigger("stop.sparkle");
    });

// it's also possible to resize the canvas and reposition 
// the sparkles whenever the browser is resized...
var timer;
$(window).on("resize", function(){
    clearTimeout(timer);
    timer = setTimeout(function(){
        $(".sparkley-logo").trigger("resize.sparkle");
    },200);
});

//Show Text on Hover of Portfolio Items

// $(".portfolio-item").hover(function() {
//   $(this).find(".portfolio-hover-text").fadeIn(300);
// }, function() {
//   $(this).find(".portfolio-hover-text").fadeOut(100);
// });



//Form Validator

$('#contact_form').bootstrapValidator({
  // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
  feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
  },
  fields: {
      first_name: {
          validators: {
                  stringLength: {
                  min: 2,
              },
                  notEmpty: {
                  message: 'Please supply your first name'
              }
          }
      },
       last_name: {
          validators: {
               stringLength: {
                  min: 2,
              },
              notEmpty: {
                  message: 'Please supply your last name'
              }
          }
      },
      email: {
          validators: {
              notEmpty: {
                  message: 'Please supply your email address'
              },
              emailAddress: {
                  message: 'Please supply a valid email address'
              }
          }
      },
      phone: {
          validators: {
              notEmpty: {
                  message: 'Please supply your phone number'
              },
              phone: {
                  country: 'US',
                  message: 'Please supply a vaild phone number with area code'
              }
          }
      },
      
      comment: {
          validators: {
                stringLength: {
                  min: 10,
                  max: 200,
                  message:'Please enter at least 10 characters and no more than 200'
              },
              notEmpty: {
                  message: 'Please supply a description of your project'
              }
              }
          }
      }
  })
  .on('success.form.bv', function(e) {
      $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
          $('#contact_form').data('bootstrapValidator').resetForm();

      // Prevent form submission
      e.preventDefault();

      // Get the form instance
      var $form = $(e.target);

      // Get the BootstrapValidator instance
      var bv = $form.data('bootstrapValidator');

      // Use Ajax to submit form data
      $.post($form.attr('action'), $form.serialize(), function(result) {
          console.log(result);
      }, 'json');
  });
 

});