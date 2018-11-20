
/* Fade in background */
$(document).ready(function() {
    $('#backgroundfade').fadeOut(1000);
});

$(function() {
    $('body').removeClass('fade-out');
});

/* Load news articles dynamically */
/* Initial Articles From CBC */
$('.wrapper').empty();

$.ajax({
  url:"https://newsapi.org/v2/top-headlines?sources=" + 'cbc-news' + "&apiKey=3adf3d38e8da43b6bb01e6a321713c31",
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
    var author = "CBC News";
    var title = data.articles[i].title;
    var description = data.articles[i].description;
    var artUrl = data.articles[i].url;
    var imgUrl = data.articles[i].urlToImage;
    
    if (imgUrl == null) {
    	imgUrl = "newspaper.png";
    }
    
    if (description == null) continue;
    
    var $image = $('<img class="image" src="' + imgUrl + '"' + "></img>");
    var $author = $('<div class="author">' + author + "</div >");
    var $title = $(
      "<a href=" + artUrl + '><div class="title">' + title + "</div ></a>"
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

/* Change Articles With User Selection */
function fill(sourceSelection) {

	$('.wrapper').empty();

	if (sourceSelection == "espn") {
		var source = "espn";
		var author = "ESPN";
	}

	else if (sourceSelection == "cnn") {
		var source = "cnn";
		var author = "CNN";
	}

	else if (sourceSelection == "cbc") {
		var source = "cbc-news";
		var author = "CBC News";
	}

	else if (sourceSelection == "aljazeera") {
		var source = "al-jazeera-english";
		var author = "Al Jazeera";
	}

	else if (sourceSelection == "wired") {
		var source = "wired";
		var author = "Wired";
	}

	else if (sourceSelection == "techcrunch") {
		var source = "techcrunch";
		var author = "Tech Crunch";
	}

	else if (sourceSelection == "svd") {
		var source = "svenska-dagbladet";
		var author = "Svenska Dagbladet";
	}

	$.ajax({
	  url:"https://newsapi.org/v2/top-headlines?sources=" + source + "&apiKey=3adf3d38e8da43b6bb01e6a321713c31",
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
	    
	    var $image = $('<img class="image" src="' + imgUrl + '"' + "></img>");
	    var $author = $('<div class="author">' + author + "</div >");
	    var $title = $(
	      "<a href=" + artUrl + '><div class="title">' + title + "</div ></a>"
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
