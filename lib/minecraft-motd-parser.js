var rules = {
    color: [
	    '§0': 'color:#000000',
	    '§1': 'color:#0000AA',
	    '§2': 'color:#00AA00',
	    '§3': 'color:#00AAAA',
	    '§4': 'color:#AA0000',
	    '§5': 'color:#AA00AA',
	    '§6': 'color:#FFAA00',
	    '§7': 'color:#AAAAAA',
	    '§8': 'color:#555555',
	    '§9': 'color:#5555FF',
	    '§a': 'color:#55FF55',
	    '§b': 'color:#55FFFF',
	    '§c': 'color:#FF5555',
	    '§d': 'color:#FF55FF',
	    '§e': 'color:#FFFF55',
	    '§f': 'color:#FFFFFF',
	],		
    weight: [
    	'§l': 'font-weight:bold',
    ],
    decoration: [
    	'§m': 'text-decoration:line-through',
    	'§n': 'text-decoration:underline',
    ],
    style: [
    	'§o': 'font-style:italic',
    ]
};

module.exports = {

	parse: function (string, callback) {

		// Checks
		if (typeof string !== 'string') {
			return callback('Invalid MOTD provided: Must be a string');
		}

		var res = [];

		// Loop through the string, two characters at a time
		// If we encounter a rule, we start a new object collecting
		// all applying rules and the string
		// Rules within an array replace each other
		// §r will remove all rules and create a blank object

		for (var i = 0; i < string.length; i++) {
			var testString = string[i] + string[i + 1];
		};

		callback(null, res);

	}

};

function matchRule (string) {
	
}