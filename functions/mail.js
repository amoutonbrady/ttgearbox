require('dotenv').config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const headers = {
	'Access-Control-Allow-Origin': 'https://ttgearbox.com',
	'Access-Control-Allow-Headers': 'Content-Type',
};

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
			to: process.env.EMAIL_TARGET || 'contact@ttgearbox.com',
			from: data.email,
			subject: `[DEMANDE] - ${data.motive}`,
			text: '?',
			html: `<pre>${JSON.stringify(data, null, 4)}</pre>`,
		};

		await sgMail.send(msg);

		return {
			statusCode: 200,
			headers,
			body: JSON.stringify({
				success: true,
			}),
		};
	} catch (err) {
		console.log(err);

		return {
			statusCode: 400,
			headers,
			body: JSON.stringify({
				success: false,
			}),
		};
	}
};
