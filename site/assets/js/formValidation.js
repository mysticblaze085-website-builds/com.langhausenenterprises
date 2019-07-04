$("form").submit(function(event) {
	event.preventDefault();

	// variable hidden field
	var header = $("#HEADER").val();
	var customerEmailContent = $('#CUSTOMER_EMAIL_CONTENT').val();

    // variable inputs
    var email = $("#EMAIL").val();
    var full_name = $("#FULL_NAME").val();
    var phone = $("#PHONE_NUMBER").val();
    var message = $("#MESSAGE").val();

    var emailSubject = "Thank you, for you interest in L.E.!"

	// payload array for validation
	var payloadArray = 
	{
		FULL_NAME:  full_name,
		EMAIL: email, 
		PHONE_NUMBER: phone, 
		MESSAGE: message,
		CUSTOMER_EMAIL_CONTENT: customerEmailContent,
		EMAIL_SUBJECT: emailSubject
	};

	// encodes data to be send in email
	// var $PHONE_NUMBER = encodeURIComponent(payloadArray.PHONE_NUMBER);
	// var $EMAIL = encodeURIComponent(payloadArray.EMAIL);
	// var $COMPANY = encodeURIComponent(payloadArray.COMPANY);
	// var $FULL_NAME = encodeURIComponent(payloadArray.FULL_NAME);
 //    // hidden encoded fields
 //    var $EMAIL_SUBJECT = encodeURIComponent(payloadArray.EMAIL_SUBJECT);
 //    var $CUSTOMER_EMAIL_CONTENT = encodeURIComponent(payloadArray.CUSTOMER_EMAIL_CONTENT);

    // console.log(payloadArray)

    var checkValidations = function(payloadArray) {
	   // clear errorBoxes
	   $("div.form-errors").empty();
	   $("div.form-errors").removeClass("alert-custom");

		// is empty?
		if (payloadArray.FULL_NAME == "")                                  
		{ 
			$("div.form-errors").addClass("alert-custom");
			$("div.form-errors").append('<p id="emailValid" class="alert alert-danger" style="color:#910000;">Please enter your full name.</p>');
			return false; 
		} 
	 	// is valid?
	 	if (payloadArray.FULL_NAME !== "") 
	 	{

	    	//check for numbers
	    	var nameHasNumbers = /\d/.test(payloadArray.FULL_NAME);
	    	//sequence order check
	    	var nameHasGoodSequence = /([a-z])\1/i.test(payloadArray.FULL_NAME);
	    	if (nameHasNumbers === true) 
	    	{
	    		$("div.form-errors").addClass("alert-custom");
	    		$("div.form-errors").append('<p id="emailValid" class="alert alert-danger" style="color:#910000;">Please enter a valid full name with no numbers.</p>');
	    		return false;
	    	} else

	    	if (nameHasGoodSequence !== true) 
	    	{
	    		$("div.form-errors").addClass("alert-custom");
	    		$("div.form-errors").append('<p id="emailValid" class="alert alert-danger" style="color:#910000;">Please enter a valid full name.</p>'); 
	    		return false;
	    	}

	    } 
	 	// is empty?
	 	// if (payloadArray.COMPANY == "")                               
	 	// { 
	 	// 	// $("div.form-errors").addClass("alert-custom");
	 	// 	// $("div.form-errors").append('<p id="emailValid" class="alert alert-danger" style="color:#910000;">Please enter Company Name.</p>');
	 	// 	return true; 
	 	// }
	    // is valid?
	    if (payloadArray.COMPANY !== "") {
	    	//sequence order check
	    	var companyHasGoodSequence = /^[a-zA-Z., -]+$/.test(payloadArray.COMPANY)
	    	
	    	if (nameHasGoodSequence !== true) {
	    		$("div.form-errors").addClass("alert-custom");
	    		$("div.form-errors").append('<p id="emailValid" class="alert alert-danger" style="color:#910000;">Please enter a valid Company Name.</p>');
	    		return false;
	    	}
	    } 
	     // is empty?
	     if (payloadArray.PHONE_NUMBER == "")                           
	     { 
	     	$("div.form-errors").addClass("alert-custom");
	     	$("div.form-errors").append('<p id="emailValid" class="alert alert-danger" style="color:#910000;">Please enter your phone number.</p>');  
	     	return false; 
	     } 
	     if (payloadArray.PHONE_NUMBER != "") {
	    	// has 10  or 11 digits
	    	if (payloadArray.PHONE_NUMBER < 10 ) {
	    		$("div.form-errors").addClass("alert-custom");
	    		$("div.form-errors").append('<p id="emailValid" class="alert alert-danger" style="color:#910000;">Please enter a valid phone number.</p>');  
	    		return false; 
	    	} else
	    	if (payloadArray.PHONE_NUMBER < 11 ) {
	    		$("div.form-errors").addClass("alert-custom");
	    		$("div.form-errors").append('<p id="emailValid" class="alert alert-danger" style="color:#910000;">Please enter a valid phone number.</p>');  
	    		return false; 
	    	}
	    }
	    
	    // is empty?   
	    if (payloadArray.EMAIL == "")                                   
	    { 
	    	$("div.form-errors").addClass("alert-custom");
	    	$("div.form-errors").append('<p id="emailValid" class="alert alert-danger" style="color:#910000;">Please enter your Company Email.</p>'); 
	    	return false; 
	    } 
	    // is valid?
	    if (payloadArray.EMAIL !== "") 
	    {
            // block if email name contains
            var hasStringName = [];
            // block if domain name contains
            var hasDomainName = []

            // string array contains ..
            function contains(target, pattern){
            	var value = 0;
            	pattern.forEach(function(word){
            		value = value + target.includes(word);
            	});
            	return (value === 1)
            }

            if (contains(payloadArray.EMAIL, hasDomainName) == true) 
            { 
            	$("div.form-errors").addClass("alert-custom");
            	$("div.form-errors").append('<p id="emailValid" class="alert alert-danger" style="color:#910000;">Please enter a business email.</p>');
            	return false; 
            } else

            if (payloadArray.EMAIL.indexOf("@", 0) < 0)                 
            { 
            	$("div.form-errors").addClass("alert-custom");
            	$("div.form-errors").append('<p id="emailValid" class="alert alert-danger" style="color:#910000;">Please enter a valid email</p>');
            	return false; 
            } else
            if (payloadArray.EMAIL.indexOf(".", 0) < 0)                 
            { 
            	$("div.form-errors").addClass("alert-custom");
            	$("div.form-errors").append('<p id="emailValid" class="alert alert-danger" style="color:#910000;">Please enter a valid email.</p>');
            	return false; 
            } else
            if (contains(payloadArray.EMAIL, hasStringName) == true) {
            	$("div.form-errors").addClass("alert-custom");
            	$("div.form-errors").append('<p id="emailValid" class="alert alert-danger" style="color:#910000;">Please enter a business email.</p>');
            	return false; 
            }
        }

        return true; 
    }

    console.log(checkValidations(payloadArray));

    // allow message to be sent
    if(checkValidations(payloadArray) == true) {
		// clear errorBoxes
		$("div.form-errors").empty();
		$("div.form-errors").removeClass("alert-custom");

		// console.log(payloadArray);
		event.preventDefault();

          $.ajax({
            type: 'post',
            url: "assets/scripts/send_message.php", 
            dataType: 'json',
            data: 'fullname='+payloadArray.FULL_NAME+'&phonenumber='+payloadArray.PHONE_NUMBER+'&email='+payloadArray.EMAIL+'&message='+payloadArray.MESSAGE,
            beforeSend: function() {
                $('#submit').attr('disabled', true);
                $('#submit').after('<span class="wait">&nbsp;<img src="assets/image/animated_cogwheel_by_lunar_alienism-d59wxbv.gif" alt="" /></span>');
            },
            complete: function() {
                $('#submit').attr('disabled', false);
                $('.wait').remove();
            },  
            success: function(data)
            {
            	// console.log(data)
                if(data.type == 'error')
                {
                    output = '<div class="error alert alert-danger" role="alert">'+data.text+'</div>';
                }else{
					console.log('success logger hit')
                    output = '<div class="success alert alert-success" role="alert">'+data.text+'</div>';
                    $('input[type=text]').val(''); 
                    $('#form textarea').val('');
                    $('input[type=email]').val(''); 
                    $('input[type=tel]').val(''); 
                }

                $("#result").hide().html(output).slideDown();           
                }
        });
	}

//reset previously set border colors and hide all message on .keyup()
$("#form input, #form textarea").keyup(function() { 
    $("#form input, #form textarea").css('border-color',''); 
    $("#result").slideUp();
});

$.ajax({
	type: 'post',
	url: "assets/scripts/emailTestLog.php", 
	dataType: 'json',
	data: 'fullname='+payloadArray.FULL_NAME+'&phonenumber='+payloadArray.PHONE_NUMBER+'&email='+payloadArray.EMAIL+'&message='+payloadArray.MESSAGE,
	success: function(data)
	{console.log('logger hit')}
});

  // keep page from reloading on submit
  event.preventDefault();
});


