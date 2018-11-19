
/* Function to fade in the website */
$(function() {
    $('body').removeClass('fade-out');
});

/* Load news articles dynamically */
$.ajax({
  url:
    "https://newsapi.org/v2/top-headlines?sources=cbc-news&apiKey=3adf3d38e8da43b6bb01e6a321713c31",
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
    var author = data.articles[i].author;
    var title = data.articles[i].title;
    var description = data.articles[i].description;
    var artUrl = data.articles[i].url;
    var imgUrl = data.articles[i].urlToImage;
    
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

    var $newDiv = $('<div id = "test" class=' + i + ' style=""></div>')
    $(".wrapper").append($newDiv);
    $("." + i).append($image, $author, $title, $description);
    console.log(artUrl);
  }
}
