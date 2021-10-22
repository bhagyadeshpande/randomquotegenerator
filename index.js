const text=document.getElementById("quote");
const author=document.getElementById("author");
const tweetButton=document.getElementById("tweet");

const getNewQuote = async () =>
{
    var url="https://type.fit/api/quotes";    

    const response=await fetch(url);
    const allQuotes = await response.json();

    const ind = Math.floor(Math.random()*allQuotes.length);

    const quote=allQuotes[ind].text;

    const auth=allQuotes[ind].author;

    if(auth==null)
    {
        author = "Anonymous";
    }

    text.innerHTML=quote;
    author.innerHTML="~ "+auth;    
}
getNewQuote();


