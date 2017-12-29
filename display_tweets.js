$(document).ready(function(){
    var $body = $('body');
    $body.html('');
    var indexTracker = {'startingIndex': 0};
      window.setInterval(function(){
          displayNTweets(indexTracker, Math.floor(Math.random()*20 + 1));
      }, (Math.random() * 10000) + 10)
});

  function displayNTweets(indexObj, numberofTweetsToDisplay)
  {
      var startingIndex = indexObj.startingIndex;
      console.log(startingIndex);
      var tweetsAvailable = streams.home.length - startingIndex;
      if (tweetsAvailable < numberofTweetsToDisplay)
      {
        numberofTweetsToDisplay = tweetsAvailable;
      }
      var endingIndex = startingIndex + numberofTweetsToDisplay;
      for (let i = startingIndex; i < endingIndex; i++)
      {
        var tweet = streams.home[i];
        printTweet(tweet);
      }
      indexObj.startingIndex = endingIndex;
  }

  function printTweet(tweet)
  {
    var $body = $('body');
    var $tweet = $('<div></div>');
    $tweet.text('@' + tweet.user + ': ' + tweet.message);
    $tweet.appendTo($body);
  }