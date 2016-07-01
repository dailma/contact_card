$(document).ready(function() {

	$("div#form_adduser").on("change", function() {
		if ($("div#form_adduser input#namefirst").val() === "" ||
			$("div#form_adduser input#namelast").val() === "" ||
			$("div#form_adduser textarea").val() === "") {
			$("div#form_adduser button").attr("disabled", "disabled");
		} else {
			$("div#form_adduser button").removeAttr("disabled");
		}
		// not quite perfect; won't change button status until focus leaves a field
	});

	$("div#form_adduser").on("click", "button", function() {
		var newCC = "<div class='card'>";
		newCC += "<h3>" + $("div#form_adduser input#namefirst").val() + " ";
		newCC += $("div#form_adduser input#namelast").val() + "</h3>";
		newCC += "<p>Click for description</p></div>";
		$("div#cards").append(newCC);
		$("div.card:last-child").data("desc", $("div#form_adduser textarea#descrip").val());
		$("div#form_adduser input").val("");
		$("div#form_adduser textarea").val("");
		$("div#form_adduser button").attr("disabled", "disabled");
	});

	$("div#cards").on("mouseenter", "div.card", function() {
		$(this).css("background-color", "lightblue");
	});

	$("div#cards").on("mouseleave", "div.card", function() {
		$(this).css("background-color", "white");
	});

	$("div#cards").on("click", "div.card", function() {
		alert($(this).data("desc"));
	});

});
