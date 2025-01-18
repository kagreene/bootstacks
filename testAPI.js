const http = require('https');

const options = {
	method: 'GET',
	hostname: 'nfl-api-data.p.rapidapi.com',
	port: null,
	path: '/nfl-team-schedule?id=12',
	headers: {
		'x-rapidapi-key': 'ffe79c53aamsh10b1ad53d0d78cbp16aec5jsn5af7bd6b3b1f',
		'x-rapidapi-host': 'nfl-api-data.p.rapidapi.com'
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();