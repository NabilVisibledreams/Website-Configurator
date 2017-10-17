var pages = [];

$(window).ready(function(){
	// Show first page
	$("div[data-page=1]").show();

	// Current custom pages
	$pageCounter = 0;
	// Total Allowed pages
	$allowedPages = 10;

	// Add custom page function
	function addPage(current) {
		// Get page name
		$name = current.prev('input').val();
		// Regex which allows all letters from all languages, numbers, -, and '.
		var regex = /[^a-zA-Z0-9\-'ÆÐƎƏƐƔĲŊŒẞÞǷȜæðǝəɛɣĳŋœĸſßþƿȝĄƁÇĐƊĘĦĮƘŁØƠŞȘŢȚŦŲƯY̨Ƴąɓçđɗęħįƙłøơşșţțŧųưy̨ƴÁÀÂÄǍĂĀÃÅǺĄÆǼǢƁĆĊĈČÇĎḌĐƊÐÉÈĖÊËĚĔĒĘẸƎƏƐĠĜǦĞĢƔáàâäǎăāãåǻąæǽǣɓćċĉčçďḍđɗðéèėêëěĕēęẹǝəɛġĝǧğģɣĤḤĦIÍÌİÎÏǏĬĪĨĮỊĲĴĶƘĹĻŁĽĿʼNŃN̈ŇÑŅŊÓÒÔÖǑŎŌÕŐỌØǾƠŒĥḥħıíìiîïǐĭīĩįịĳĵķƙĸĺļłľŀŉńn̈ňñņŋóòôöǒŏōõőọøǿơœŔŘŖŚŜŠŞȘṢẞŤŢṬŦÞÚÙÛÜǓŬŪŨŰŮŲỤƯẂẀŴẄǷÝỲŶŸȲỸƳŹŻŽẒŕřŗſśŝšşșṣßťţṭŧþúùûüǔŭūũűůųụưẃẁŵẅƿýỳŷÿȳỹƴźżžẓ]$/;
		// Check if page name has content
		if ($name != '') {
			// Test if the name is correct via regex
			if (!regex.test($name)) {
				// Transfrom the name into a correct id. Only disallow '.
				$id = $name.replace(/[']+/g, "-")
				
				// Check if the page already exists.
				if ($('form > div[data-page=2]').find('input#' + $id).length != 0) {
					alert('Pagina is reeds al toegevoegd.');
				} else {
					// Check if user has hit max page numbers
					if ($pageCounter < $allowedPages) {
						// Add checkbox before switch page buttons
						$('<div class="self"><input type="checkbox" checked name="page" id="' + $id + '"><label for="' + $id + '">' + $name + '</label><button type="button" id="' + $id + '">X</button></div>').insertBefore('form > div[data-page=2] > button:first-of-type');
						// Add one to page counter
						$pageCounter++;
					} else {
						alert("Je kan maximaal 10 eigen pagina's toevoegen, verwijder er een om deze toe te voegen.");
					}
				}
			} else {
				alert("Je kan alleen de volgende karakters gebruiken: a-z, 0-9, -, ', en ÆÐƎƏƐƔĲŊŒẞÞǷȜæðǝəɛɣĳŋœĸſßþƿȝĄƁÇĐƊĘĦĮƘŁØƠŞȘŢȚŦŲƯY̨Ƴąɓçđɗęħįƙłøơşșţțŧųưy̨ƴÁÀÂÄǍĂĀÃÅǺĄÆǼǢƁĆĊĈČÇĎḌĐƊÐÉÈĖÊËĚĔĒĘẸƎƏƐĠĜǦĞĢƔáàâäǎăāãåǻąæǽǣɓćċĉčçďḍđɗðéèėêëěĕēęẹǝəɛġĝǧğģɣĤḤĦIÍÌİÎÏǏĬĪĨĮỊĲĴĶƘĹĻŁĽĿʼNŃN̈ŇÑŅŊÓÒÔÖǑŎŌÕŐỌØǾƠŒĥḥħıíìiîïǐĭīĩįịĳĵķƙĸĺļłľŀŉńn̈ňñņŋóòôöǒŏōõőọøǿơœŔŘŖŚŜŠŞȘṢẞŤŢṬŦÞÚÙÛÜǓŬŪŨŰŮŲỤƯẂẀŴẄǷÝỲŶŸȲỸƳŹŻŽẒŕřŗſśŝšşșṣßťţṭŧþúùûüǔŭūũűůųụưẃẁŵẅƿýỳŷÿȳỹƴźżžẓ");
			}
		} else {
			alert("Je hebt niks ingevuld.")
		}
	}

	// Trigger custom page function on addpage click
	$("#addPage").click(function(){addPage($(this));});

	// Switch page function
	$('button.pageSwitcher').click(function(){
		// Hide all pages
		$('form > div').each(function(){
			$(this).hide();
		});
		// Show next page
		$('form > div[data-page=' + $(this).attr('data-page') + ']').show();
		// If next page is overview
		if ($(this).attr('data-page') == 4) {
			overviewUpdate();
		}
	});
});

function overviewUpdate() {
	$('#templateOverview').text('Template: ' + $('form > div[data-page=1] > div > input[name=template]').val());
	if (pages.length == 0) {
		$('#pageOverview').text("Pagina's: geen pagina's gekozen");
	} else {
		$('#pageOverview').text("Pagina's: " + pages.join(', '));
	}
	
}

// Detect click on custom page delete button
$(document).on('click', '.self > button', function() {
	// Remove file upload
	$('form > div[data-page=3]').find('#' + $(this).prev().prev('input').attr('id')).remove();
	// Remove the custom page
	$(this).parent().remove();
	// Update the page counter
	$pageCounter--;	
});

$(document).on('click', 'form > div[data-page=2] > div > input[type=checkbox]', function() {
	label = $(this).next().text();
	if ($(this).is(':checked')) {
		pages.push(label);
	} else {
		pages.splice(pages.indexOf(label), 1);
	}
});

// -----------------------------------UPLOAD------------------------------- //

$(document).on('change','form > div[data-page=3] > div > #contentFile' , function(){
	var file = $(this).get(0).files[0];
    if (file != undefined) {
    	var upload = new Upload(file);
    	console.log(upload.getType());
	    if (upload.getType() == 'application/*' ||
	    	upload.getType().substr(0, 'image/'.length) == 'image/') {
	    	upload.doUpload();
	    } else {
	    	alert('Je mag alleen een pdf, jpg, of png uploaden.');
	    }
    } else {
    	alert('Je hebt nog geen bestand geselecteerd');
    }	    
});

var Upload = function (file) {
    this.file = file;
};
Upload.prototype.getType = function() {
    return this.file.type;
};
Upload.prototype.getSize = function() {
    return this.file.size;
};
Upload.prototype.doUpload = function () {
    var that = this;
    var formData = new FormData();

    // add assoc key values, this will be posts values
    formData.append("file", this.file, this.file.name);
    formData.append("upload_file", true);

    $.ajax({
        type: "POST",
        url: "upload.php",
        xhr: function () {
            var myXhr = $.ajaxSettings.xhr();
            if (myXhr.upload) {
                myXhr.upload.addEventListener('progress', that.progressHandling, false);
            }
            return myXhr;
        },
        success: function(php_script_response){
        	fileUploadResponse(php_script_response);
        	hideProgress();
        },
        async: true,
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        timeout: 60000
    });
};

Upload.prototype.progressHandling = function (event) {
    var percent = 0;
    var position = event.loaded || event.position;
    var total = event.total;
    var progress_bar_id = "#progress-wrp";
    if (event.lengthComputable) {
        percent = Math.ceil(position / total * 100);
    }
    // update progressbars classes so it fits your code
    $(progress_bar_id).show();
    $(progress_bar_id + " .progress-bar").css("width", +percent + "%");
    $(progress_bar_id + " .status").text(percent + "%");
};
function hideProgress() {
	$('#progress-wrp').hide();
}
function fileUploadResponse(res) {
	if (res.charAt(0) == 1) {
		var filename = $('input[type=file]').val().split('\\').pop();
		$('form > div[data-page=3] > div > input').each(function(){
			if ($(this).val().split('\\').pop() == res.substr(1)){
				$(this).next().next().text('UPLOADED');
			}
		});
	} else {
		alert(res.substr(1));
	}
}