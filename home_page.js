$(document).ready(function(){
    var indexTracker = {'startingIndex': 0};
      window.setInterval(function display(){
          displayNTweets(indexTracker, Math.floor(Math.random()*20 + 1)); return display;
      }(), (Math.random() * 10000) + 10);
});