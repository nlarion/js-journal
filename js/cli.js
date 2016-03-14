var wordCount = require('./wordCount.js').wordCount;
var prompt = require('prompt');
prompt.start();

prompt.get('body', function(err, result) {
  var output = wordCount(result.body);
  output.forEach(function(element) {
    console.log(element);
  });
});
