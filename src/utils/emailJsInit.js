import { init, send } from 'emailjs-com';

export function initEmailJS() {
  init(config.EMAILJS_KEY);
}

function sendFeedback (templateId, variables) {
	send(
  	'service_foipwoo', templateId,
  	variables
  	).then()
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
}

export function sendEmail(orderId, name, email, products) {
  const templateId = 'template_p6ppa1p';
  let productsText = '';
  products.forEach((product, i) => {
    productsText += `Item ${i+1} - ${product.title}: ${product.price} * ${product.count};  `
  });
  const text = productsText + `Thanks for you order #${orderId}!`;

	sendFeedback(templateId, {message: text ,from_name: name, reply_to: email})
}