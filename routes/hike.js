/**
 * New node file
 */
exports.index = function(req, res) {
 res.render('hike', {title: 'My Hiking Log'});
};

exports.add_hike = function(req, res) {
	res.send({
		"This": "is a JSON Object",
		"What": "Else should I add"
			});
};