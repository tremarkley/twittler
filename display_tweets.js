$(document).ready(function(){
    //var $body = $('body');
    //$body.html('');
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
    var $timeline = $('.timeline');
    var $tweet = $("<div>", { "class" : "tweet" });
    var $tweetHeader = $("<div>");
    var $tweetUser = $("<h3>", { "class" : "tweetUser" });
    var $tweetMessage = $("<p>", { "class" : "tweetMessage" });
    var $tweetTimeStamp = $("<p>", { "class" : "tweetTimestamp" });
    $tweetHeader.appendTo($tweet);
    $tweetUser.text('@' + tweet.user);
    $tweetUser.appendTo($tweetHeader);
    $tweetTimeStamp.text(tweet.created_at);
    $tweetTimeStamp.appendTo($tweetHeader);
    $tweetMessage.text(tweet.message);
    $tweetMessage.appendTo($tweet);
    $tweet.appendTo($timeline);
  }