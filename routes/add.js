var data = require("../data.json");

exports.addFriend = function(request, response) {    
	console.log("added friend")
		response.render("index.handlebars", {
		"name":"request.query.name",
		"description":"request.query.description",
		"imageURL":"http://lorempixel.com/500/500/people"
})
	data.friends.push();
 }