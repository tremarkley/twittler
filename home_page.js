$(document).ready(function(){
    $('#home-button').addClass('active');
    var indexTracker = {'startingIndex': 0};
      window.setInterval(function display(){
          displayNTweets(indexTracker, Math.floor(Math.random()*20 + 1), streams.home); 
          //will be used to get tweets for user page
          localStorage.setItem('userTweets', JSON.stringify(streams.users))
          return display;
      }(), (Math.random() * 10000) + 10);
});