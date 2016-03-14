var moment = require('moment');
var wordCount = require('./../js/wordCount.js').wordCount;


$(document).ready(function(){
  $('#journalEntry').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var words = wordCount(body);
    $('#entries').prepend('<p>'+moment().format('dddd')+'<br>'+title+'<br>'+body+'</p><p>Word count: '+words+'</p>');
  });
});
