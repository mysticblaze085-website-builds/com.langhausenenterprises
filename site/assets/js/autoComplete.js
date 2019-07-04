$(document).ready(function () {
			$( "#COMPANY" ).on( "keydown", function(event) {
				$('#COMPANY').typeahead({
					source: function (query, result) {
						var noSpaces = query.replace(' ', '');
						var noCommas = noSpaces.replace("'", '');
        	// console.log(noCommas);
        	$.ajax({
        		url: "functions.php",
        		data: 'query=' + query,            
        		dataType: "json",
        		type: "POST",
        		success: function (data) {
        			result($.map(data, function (item) {
                        var img = '<div><img src="' + item.logo + '" width="40" height="40"/> '+item.name+'</div>';
        				return img;
        			}));
                    $('.typeahead .active .dropdown-item').on('click', function() {
                        result($.map(data, function (item) {
                            return item;
                        }));
                    }) 
        			// $( "#COMPANY" ).on( "keydown", function(event) {

        			// 	if(event.handleObj.type == 'keydown') {
        			// 		result($.map(data, function (item) {
        			// 			var img = '<div><img src="' + item.logo + '" width="40" height="40"/> '+item.name+'</div>';
        			// 			return img;
        			// 		}));
        			// 	}

        			// 	if(event.originalEvent.code == 'Enter') {
        			// 		result($.map(data, function (item) {
        			// 			return item;
        			// 		}));
        			// 	}

        			// 	if(event.originalEvent.code == 'Backspace') {
        			// 		result($.map(data, function (item) {
        			// 			var img = '<div><img src="' + item.logo + '" width="40" height="40"/> '+item.name+'</div>';
        			// 			return img;
        			// 		}));				    
        			// 	}
        			// });
        		},
        		error: function(XMLHttpRequest, textStatus, errorThrown) {
        			console.log("some error");
        		}
        	});
        },

    });
			});
		});