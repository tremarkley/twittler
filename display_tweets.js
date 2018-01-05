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

function tweetModal(){
    var $body = $('body');
    var modalID = "tweetModal";
    var $modal = $("<div>", { "id" : modalID, "class" : "modal" });
    var $modalContent = $("<div>", { "class" : "modal-content" });

    var $modalContentHeader = $("<div>", { "class" : "modal-content-header"});
    $modalContentHeader.appendTo($modalContent);
    var $modalContentHeaderText = $("<h3>", {"class" : "modal-content-header-text"});
    $modalContentHeaderText.text('Compose a Tweet');
    $modalContentHeaderText.appendTo($modalContentHeader);

    var $modalCloseI = $("<i>", {"class" : "modal-close-icon fa fa-times"});
    $modalCloseI.appendTo($modalContentHeader);

    var $modalContentBody = $("<div>", { "class" : "modal-body" });
    $modalContentBody.appendTo($modalContent);

    var $modalForm = $("<form>", {"class" : "tweet-form"});
    $modalForm.appendTo($modalContentBody);
    var $modalTextInput = $("<textarea>", {"class": "tweet-input", "rows" : "3", "placeholder": "Write a tweet...", "maxlength" : 140});
    $modalTextInput.appendTo($modalForm);

    var $modalTweetButtonDiv = $("<div>", {"class" : "modal-tweet-button-div"});
    $modalTweetButtonDiv.appendTo($modalForm);
    var $modalTweetButton = $("<button>", {"class" : "modal-tweet-button tweet-button"});
    $modalTweetButton.text('Tweet');
    $modalTweetButton.prop("disabled", true);
    $modalTweetButton.appendTo($modalTweetButtonDiv);
    
    $modalContent.appendTo($modal);
    $modal.appendTo($body);

    $('#close-modal').on('click', onModalClose);
    $('.modal-close-icon').on('click', onModalClose);
    $(window).on('click', function(event) {
        if (event.target.id == modalID) {
            onModalClose();
        }
    })

    $('.tweet-input').on('keyup', toggleButton);
    $('.tweet-button').on('click', onTweetButtonClick);
}

function onModalClose() {
    $('.modal').remove();
}

function toggleButton() {
    var charLength = $('.tweet-input').val().length;
    if (charLength > 0)
    {
        $('.modal-tweet-button').removeProp("disabled");
    }
    else {
        $('.modal-tweet-button').prop("disabled", true);
    }
}

function onTweetButtonClick() {
    event.preventDefault();
    var message = $('.tweet-input').val();
    composeTweet(message);
    onModalClose();
}

function composeTweet(tweetText) {
    visitor = "harrymarkley";
    if (streams.users[visitor] == undefined){ 
        streams.users[visitor] = [];
    }
    writeTweet(tweetText);
}