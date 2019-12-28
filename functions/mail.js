require('dotenv').config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async event => {
	if (!event.body || event.httpMethod !== 'POST') {
		return {
			statusCode: 400,
			headers,
			body: JSON.stringify({
				status: 'Invalid http method',
			}),
		};
	}

	const data = JSON.parse(event.body);

	try {
		const msg = {
			to: 'amoutonbrady@gmail.com',
			from: 'test@example.com',
			subject: 'Sending with Twilio SendGrid is Fun',
			text: 'and easy to do anywhere, even with Node.js',
			html: `<pre>${JSON.stringify(data, null, 4)}</pre>`,
		};

		await sgMail.send(msg);

		return {
			statusCode: 200,
			headers,
			body: JSON.stringify({
				status: 'It works! Beep Boop',
			}),
		};
	} catch (err) {
		console.log(err);

		return {
			statusCode: 400,
			headers,
			body: JSON.stringify({
				status: err,
			}),
		};
	}
};
