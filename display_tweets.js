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
    var $tweetUser = $("<a>", { "class" : "tweetUser", "href" : "./user.html?user=" + tweet.user });
    var $tweetMessage = $("<p>", { "class" : "tweetMessage" });
    var $tweetTimeStamp = $("<p>", { "class" : "tweetTimestamp" });
    $tweetHeader.appendTo($tweet);
    $tweetUser.text('@' + tweet.user);
    $tweetUser.appendTo($tweetHeader);
    $tweetTimeStamp.text(tweet.created_at);
    $tweetTimeStamp.appendTo($tweetHeader);
    $tweetMessage.text(tweet.message);
    $tweetMessage.appendTo($tweet);
    $tweet.prependTo($timeline);
  }