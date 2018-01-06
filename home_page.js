$(document).ready(function(){
    //delete existing tweets from localStorage and start fresh
    if (localStorage.getItem('userTweets') != undefined) {
        localStorage.removeItem('userTweets');
    }
    localStorage.setItem('userTweets', JSON.stringify(streams));
    updateTotalTweets(false);
    $('#home-button').addClass('active');
    $('.tweet-button').on('click', tweetModal);
    var indexTracker = {'startingIndex': 0};
      window.setInterval(function display(){
          displayNTweets(indexTracker, Math.floor(Math.random()*20 + 1), streams.home); 
          //will be used to get tweets for user page
          localStorage.setItem('userTweets', JSON.stringify(streams))
          return display;
      }(), (Math.random() * 10000) + 10);
});