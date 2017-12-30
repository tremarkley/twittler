$(document).ready(function() {
    var userTweets = {};
    //get user info from localStorage if it exists
    if (localStorage.getItem('userTweets') !== undefined)
    {
        userTweets = JSON.parse(localStorage.getItem('userTweets'));
    }else {
        userTweets = streams.users;
    }
    var user = getURLParamValue('user');
});