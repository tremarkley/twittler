function displayNTweets(indexObj, numberofTweetsToDisplay, tweets)
{
    var startingIndex = indexObj.startingIndex;
    var tweetsAvailable = tweets.length - startingIndex;
    if (tweetsAvailable < numberofTweetsToDisplay)
    {
        numberofTweetsToDisplay = tweetsAvailable;
    }
    var endingIndex = startingIndex + numberofTweetsToDisplay;
    for (let i = startingIndex; i < endingIndex; i++)
    {
        var tweet = tweets[i];
        printTweetToTimeline(tweet);
    }
    indexObj.startingIndex = endingIndex;
}

function printTweetToTimeline(tweet)
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

function getURLParamValue(inputParam){
    var pageUrl = window.location.search.substring(1);
    var paramArray = pageUrl.split('&')
    for (let i = 0; i < paramArray.length; i++){
        var param = paramArray[i].split('=')[0];
        var paramValue = paramArray[i].split('=')[1];
        if (param === inputParam) {
            return paramValue;
        }
    }
    return undefined;
}