exports.wordCount = function(body) {
  var output = [];
  output = body.split(" ");
  return output.length;
};
