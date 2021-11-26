// Fade in the website
$(document).ready(function() {
    $('#backgroundfade').fadeOut(1000);
});

$(function() {
    $('body').removeClass('fade-out');
});

// Load news articles dynamically
// Change Articles With User Selection
function fill(sourceSelection) {

	$('.wrapper').empty();

	if (sourceSelection == "espn") {
		var source = "sources=espn";
		var author = "ESPN";
	}

	else if (sourceSelection == "cnn") {
		var source = "sources=cnn";
		var author = "CNN";
	}

	else if (sourceSelection == "cbc") {
		var source = "sources=cbc-news";
		var author = "CBC News";
	}

	else if (sourceSelection == "aljazeera") {
		var source = "sources=al-jazeera-english";
		var author = "Al Jazeera";
	}

	else if (sourceSelection == "wired") {
		var source = "sources=wired";
		var author = "Wired";
	}

	else if (sourceSelection == "techcrunch") {
		var source = "sources=techcrunch";
		var author = "Tech Crunch";
	}

	$.ajax({
	  url:"https://newsapi.org/v2/top-headlines?" + source + "&apiKey=ef61de27453e419da1b9ab7d3ac46e44",
		method: "GET",
	  error: function() {
	    console.log("broken");
	  },
	  success: function(data) {
	    processData(data);
	  }
	});

	function processData(data) {
	  var articleItems = [];

	  for (var i = 0; i < data.articles.length; i++) {
	    var title = data.articles[i].title;
	    var description = data.articles[i].description;
	    var artUrl = data.articles[i].url;
	    var imgUrl = data.articles[i].urlToImage;
	    
	    if (imgUrl == null) {
	    	imgUrl = "newspaper.png";
			}
			
	    if (description == null) continue;
	    
			var $image = $(
										 '<a href='
										 + artUrl +
										 ">"
										 + '<img class="image" src="'
										 + imgUrl
										 + '"'
										 + "></img>"
										 + "</a>"
										 );
										 
	    var $author = $('<div class="author">' + author + "</div >");
	    var $title = $(
	      "<a href='" + artUrl + "'" + '><div class="title">' + title + "</div ></a>"
			);
			
	    var $description = $(
	      "<a href=" +
	        artUrl +
	        '><div class="description">' +
	        description +
	        "</div ></a>"
	    );

	    var $newDiv = $('<div id = "dynamicDiv" class=' + i + ' style=""></div>')
	    $(".wrapper").append($newDiv);
	    $("." + i).append($image, $author, $title, $description);
	    console.log(artUrl);
	  }
	}
}
