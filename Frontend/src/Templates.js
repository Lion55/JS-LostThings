var fs = require('fs');
var ejs = require('ejs');


exports.Advertisement_OneItem = ejs.compile(fs.readFileSync('./Frontend/templates/Advertisement_OneItem.ejs', "utf8"));
exports.AdvertisementDetails_OneItem = ejs.compile(fs.readFileSync('./Frontend/templates/AdvertisementDetails_OneItem.ejs', "utf8"));
