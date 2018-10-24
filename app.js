/*
*	Author: Amanda Anderson
*	Script: NewsAPI script
*
*/
<script>
var APIKey = "3adf3d38e8da43b6bb01e6a321713c31";
 
//INIT Method
window.addEventListener('load', e =&gt; {
    GetLatestNews();
});
 
//Fetches the latest news from NEWS API and appends it to the UI
async function GetLatestNews()
{
     var response = await fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&amp;apiKey=${APIKey}");
     var jsonResponse = await response.json();
     var mainDOM = document.querySelector('.container');
     mainDOM.innerHTML = '';
     mainDOM.innerHTML = jsonResponse.articles.map(GetNewsTemplate).join('\n');
     var resultCountDOM = document.getElementById('newsCount');
     resultCountDOM.innerHTML = `Showing ${jsonResponse.totalResults} Results`;
}
 
function GetNewsTemplate(news)
{
    return `</pre>
<div class="panel panel-default">
<div class="panel-heading">
<h2>${news.title}.</h2>
</div>
<div class="panel-body">
<h4>${news.description}</h4>
<div><img src="${news.urlToImage}" /></div>
</div>
</div>
<pre>
`;
}
</script>
