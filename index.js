var   http     = require("http"),
      url      = require("url"),
      path     = require("path"),
      fs       = require("fs"),
      events   = require("events"),
      sys      = require("sys");

var request = http.request({
		host: "search.twitter.com",
		port: 80,
		method: "GET",
		path: "/search.json?since_id=" + Twitter.latestTweet + "result_type=recent&rpp=5&q=" + query
	})