var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	var name = req.query.name;
	var description = req.query.description;

	var newfriend = {
		name: name, 
		description: description, 
		imageURL: "#"
	}

	data.friends.push(newfriend);
	res.redirect('/');
 }