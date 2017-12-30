$(document).ready(function() {
    var userTweets = {};
    //get user info from localStorage if it exists
    if (localStorage.getItem('userTweets') !== undefined)
    {
        userTweets = JSON.parse(localStorage.getItem('userTweets'));
        console.log(userTweets);
    }else {
        userTweets = streams.users;
    }
    var user = getURLParamValue('user');
    userTweets = userTweets[user];
    var indexObj = {'startingIndex' : 0};
    var numTweetsAvailable = userTweets.length;
    displayNTweets(indexObj, numTweetsAvailable, userTweets);
});