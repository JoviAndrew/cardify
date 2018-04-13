var twitterAPI = require('node-twitter-api');

var twitter = new twitterAPI({
   consumerKey: 'xn2t83MV1Cbq4EhDbavmhaVhE',
   consumerSecret: 'LTceKXwk9ZbWiGhaB4i2Ctdl9OAjNi18WmReuBHl2jGRCyLOFw',
   callback: 'http://yoururl.tld/something'
});