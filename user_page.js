$(document).ready(function() {
    updateTotalTweets();
    $('.tweet-button').on('click', tweetModal);
    var userTweets = {};
    //get user info from localStorage if it exists
    if (localStorage.getItem('userTweets') !== undefined)
    {
        userTweets = JSON.parse(localStorage.getItem('userTweets'));
    } else {
        userTweets = streams.users;
    }
    var user = getURLParamValue('user');
    userTweets = userTweets[user];
    var numTweetsAvailable = userTweets.length;
    //display all user tweets stored in local storage to start
    displayNTweets({'startingIndex' : 0}, numTweetsAvailable, userTweets);
    var indexObj = {'startingIndex': 0};
      window.setInterval(function display(){
          displayTweetsByUser(indexObj, user);
          return display;
      }(), (Math.random() * 10000) + 10);
});