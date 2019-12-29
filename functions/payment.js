require('dotenv').config();
// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const headers = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Headers': 'Content-Type',
};

exports.handler = async event => {
	if (!event.body || event.httpMethod !== 'POST') {
		return {
			statusCode: 400,
			headers,
			body: JSON.stringify({
				success: false,
				status: 'invalid http method',
			}),
		};
	}

	const data = JSON.parse(event.body);
	console.log(data);

	if (!data.title || !data.price) {
		console.error('Required information is missing.');

		return {
			statusCode: 400,
			headers,
			body: JSON.stringify({
				success: false,
				status: 'missing information',
			}),
		};
	}

	// stripe payment processing begins here
	try {
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ['card'],
			line_items: [
				{
					name: data.title,
					description: 'Guide TT Gearbox',
					amount: Math.ceil(data.price * 100),
					currency: 'eur',
					quantity: 1,
				},
			],
			success_url:
				'https://ttgearbox.com/success?session_id={CHECKOUT_SESSION_ID}',
			cancel_url: 'https://ttgearbox.com/offers',
		});

		return {
			statusCode: 200,
			headers,
			body: JSON.stringify({
				success: true,
				session,
			}),
		};
	} catch (err) {
		console.log(err);

		return {
			statusCode: 400,
			headers,
			body: JSON.stringify({
				success: false,
				status: err,
			}),
		};
	}
};
