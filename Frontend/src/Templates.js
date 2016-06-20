var fs = require('fs');
var ejs = require('ejs');


exports.Advertisement_OneItem = ejs.compile(fs.readFileSync('./Frontend/templates/Advertisement_OneItem.ejs', "utf8"));
