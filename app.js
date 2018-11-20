
$(document).ready(function() {
    $('#backgroundfade').fadeOut(1000);
});

/* Function to fade in the website */
$(function() {
    $('body').removeClass('fade-out');
});

/* Load news articles dynamically */
/* Initial */

$('.wrapper').empty();

$.ajax({
  url:"https://newsapi.org/v2/top-headlines?sources=cbc-news&apiKey=3adf3d38e8da43b6bb01e6a321713c31",
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


/* SVD */
function fillSVD() {

$('.wrapper').empty();

$.ajax({
  url:"https://newsapi.org/v2/top-headlines?sources=svenska-dagbladet&apiKey=3adf3d38e8da43b6bb01e6a321713c31",
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
    var author = "Svenska Dagbladet";
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

/* Tech Crunch */
function fillTechCrunch() {

$('.wrapper').empty();

$.ajax({
  url:"https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=3adf3d38e8da43b6bb01e6a321713c31",
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
    var author = "Tech Crunch";
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

/* WIRED */
function fillWired() {

$('.wrapper').empty();

$.ajax({
  url:"https://newsapi.org/v2/top-headlines?sources=wired&apiKey=3adf3d38e8da43b6bb01e6a321713c31",
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
    var author = "Wired";
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

/* ESPN */
function fillESPN() {

$('.wrapper').empty();

$.ajax({
  url:"https://newsapi.org/v2/top-headlines?sources=espn&apiKey=3adf3d38e8da43b6bb01e6a321713c31",
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
    var author = "ESPN";
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

/* CNN */
function fillCNN() {

$('.wrapper').empty();

$.ajax({
  url:"https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=3adf3d38e8da43b6bb01e6a321713c31",
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
    var author = "CNN";
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

/* CBC */
function fillCBC() {

$('.wrapper').empty();

$.ajax({
  url:"https://newsapi.org/v2/top-headlines?sources=cbc-news&apiKey=3adf3d38e8da43b6bb01e6a321713c31",
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
}

/* Al Jazeera */
function fillAlJazeera() {

$('.wrapper').empty();

$.ajax({
  url:"https://newsapi.org/v2/top-headlines?sources=al-jazeera-english&apiKey=3adf3d38e8da43b6bb01e6a321713c31",
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
    var author = "Al Jazeera";
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
