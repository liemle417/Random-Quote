//Declare an array of quote objects. Here is the format: [{}, {}, {}]
var quotes = [
    {
        quote: "No one can make you feel inferior without your consent.",
        source: "Eleanor Roosevelt",
        citation: "This is My Story",
        year: "1939",
        tag: "Confidence"
    },
  
    {
        quote: "Love is like the wind, you can't see it but you can feel it.",
        source: "Nicholas Sparks",
        citation: "A Walk to Remember",
        year: "1999",
        tag: "Love"
    },
  
    {
        quote: "I'd rather regret the things I've done than regret the things I haven't done.",
        source: "Lucille Ball",
        citation: "",
        year: "",
        tag: "Wisdom"
    },
  
    {
        quote: "Failure will never overtake me if my determination to succeed is strong enough",
        source: "Og Mandino",
        citation: "",
        year: "",
        tag: "Motivational"
    },
    
    {
        quote: "Happiness is the greatest hiding place for despair.",
        source: "Søren Kierkegaard",
        citation: "",
        year: "",
        tag: "Fighting-spirit"
    },
  
    {
        quote: "Maybe you have to know the darkness before you can appreciate the light.",
        source: "Madeleine L'Engle",
        citation: "A Ring of Endless Light",
        year: "1980",
        tag: "Moral"
        
    },
    {
        quote: "The phoenix must burn to emerge.",
        source: "Janet Fitch",
        citation: "White Oleander",
        year: "1999",
        tag: ""
    },
  
    {
        quote: "You don't need anybody to tell you who you are or what you are. You are what you are!",
        source: "John Lennon",
        citation: "",
        year: "",
        tag: "Be-Yourself"
      
    },
    
    {
        quote: "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.",
        source: "J.K.Rowling",
        citation: "Harry Potter and the Prisoner of Azkaban",
        year: "1999",
        tag: "Hope"
    },
    
    
    {
        quote: "Before you can see the Light, you have to deal with the darkness.",
        source: "Dan Millman",
        citation: "Sacred Journey of the Peaceful Warrior",
        year: "1991",
        tag: "Inspirational, Wisdom"
      
    },
    
    {
        quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
        source: "Patrick McKenzie",
        citation: "Twitter",
        year: "2016",
        tag: "Motivational"
    }
    
];

var getQuote;
var getAllInformation;

//Make a random quote 

function getRandomQuote() {
    var randomNumber;
    randomNumber = Math.floor(Math.random()* quotes.length); //Get a random number first
    getAllInformation = quotes[randomNumber]; //Think of that random number as an index. Use that index to retry the array
    return getAllInformation;
   }

console.log(getRandomQuote()); //test to see the random quote


//--Make random background color--
//--This task is similar to make a random quote. The color format is (rgb, rgb, rgb). RGB has 3 digits. Use random to generate it.

var finalColor;


function makeRandomColor(){
  var r = Math.floor( Math.random() * 256 );
  var g = Math.floor( Math.random() * 256 );
  var b = Math.floor( Math.random() * 256 );
  finalColor = 'rgb(' + r + ',' + g + ',' + b +')'
  document.body.style.backgroundColor = finalColor;
  document.getElementById("loadQuote").style.backgroundColor = finalColor;
}

//--Make random color in words. This is similar to the task of making random quote and random color
//Too much color. It hurts my eyes.


var finalWordColor;

function makeRandomWordColor(){
  var r = Math.floor( Math.random() * 256 );
  var g = Math.floor( Math.random() * 256 );
  var b = Math.floor( Math.random() * 256 );
  finalWordColor = 'rgb(' + r + ',' + g + ',' + b +')'
  document.body.style.color = finalWordColor;
}


//Create the `printQuote` function

function printQuote(){
  getQuote = getRandomQuote();
  var messageOutcome = ""; //begin with an empty string
  messageOutcome += '<p class="quote">' + getQuote.quote + "</p>"; //Take a look at the index.html. Make this task exactly like the p tag in index.html
  messageOutcome += '<p class="source">' + getQuote.source;
  
  if (getQuote.citation) {
    messageOutcome += "<span class = 'citation'>" + getQuote.citation + "</span>";
  }
  
  if (getQuote.year) {
    messageOutcome += "<span class = 'year'>" + getQuote.year + "</span>";
  }
  
  if (getQuote.tag) {
  messageOutcome += "<span class = 'tag'>" + getQuote.tag + "</span>";
  }
  
  messageOutcome += "</p>";
  
  var outputDiv = document.getElementById("quote-box"); //Declar a variable. Assign that variable with DOM (document.getElementById)
  outputDiv.innerHTML = messageOutcome //change the the whole paragraph that has ID "quote-box" into messageOutcome. The messageOutcome is a composition of quotes, source, citation, years, and tag
  
  makeRandomColor(); //add random background color
  makeRandomWordColor();  //add random word color
  
} 

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/


document.getElementById('loadQuote').addEventListener("click", printQuote, false); //It is good to know this trick

setInterval(printQuote, 3000); //Lazy to click? Set the quote automatically change after 3 second (3000 = 3 second). It is good to know this trick
