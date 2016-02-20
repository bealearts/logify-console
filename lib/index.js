'use strict';

var util = require('util');
var con = require('console-browserify');

var format = '%s [%s] %s - %s';

module.exports = function createConsole(modulePath)
{
	return {
		log: function() {
			arguments[0] = util.format(format, timestamp(), 'DEBUG', modulePath, arguments[0]);
			con.log.apply(con, arguments);
		},

		info: function() {
			arguments[0] = util.format(format, timestamp(), 'INFO', modulePath, arguments[0]);
			con.info.apply(con, arguments);
		},

		warn: function() {
			arguments[0] = util.format(format, timestamp(), 'WARN', modulePath, arguments[0]);
			con.warn.apply(con, arguments);
		},

		error: function() {
			arguments[0] = util.format(format, timestamp(), 'ERROR', modulePath, arguments[0]);
			con.error.apply(con, arguments);
		},

		time: con.time.bind(con),

		timeEnd: con.timeEnd.bind(con),

		trace: con.trace.bind(con),

		dir: con.dir.bind(con)
	};
}



function timestamp()
{
	var now = new Date();
	return now.toISOString();
}