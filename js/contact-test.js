$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answered', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#test-form').validate({
            rules: {
                datepicker: {
                    required: true,
                    minlength: true,
                },
                massage: {
                    required: true,
                    option: true
                },
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true,
                    minlength: 9
                }
            },
            messages: {
                datepicker: {
                    required: "come on, pick a date",
                    minlength: "come on, pick a date"
                },
                massage: {
                    required: "come on, want a massage, don't you?",

                },
                name: {
                    required: "come on, you have a name, don't you?",
                    minlength: "your name must consist of at least 5 characters"
                },
                email: {
                    required: "no email, no message"
                },
                phone: {
                    required: "You need a phone.",
                    minlength: "thats all? really?"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function() {
                        $('#contact-test :input').attr('disabled', 'disabled');
                        $('#contact-test').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contact-test').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})