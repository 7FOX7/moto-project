const faqs = [
	{
		id: 'faqGeneral',
		category: 'General', 
		faqs: [
			{
				id: 'faqGeneral1', 
				question: 'What types of motorcycles do you offer?', 
				answer: 'We provide a wide range of motorcycles, including cruisers, sport bikes, touring bikes, and off-road models.'
			}
		]
	},
	{
		id: 'faqSpecialDeals',
		category: 'Special Deals',
		faqs: [
			{
				id: 'faqSpecialDeals1', 
				question: 'What special deals are currently available?',
				answer: 'We have seasonal discounts and promotions. Please check frequently to stay up-to-date.'
			},
			{
				id: 'faqSpecialDeals2', 
				question: 'What special deals are currently available?', 
				answer: 'We have seasonal discounts and promotions. Please check frequently to spay up-to-date.'
			}, 
		]
	},
	{
	id: 'faqEvents',
	category: 'Events',
	faqs: [
		{
			id: 'faqEvents1', 
			question: 'What types of events do you organize?',
			answer: 'We have a variety of events, including camping rides, workshops, and social gatherings.'
		},
		{
			id: 'faqEvents2', 
			question: 'How do I register for an event?',
			answer: 'You can register for events on our website or contact our event team for more information.'
		}
	]
	},
	{
	id: 'faqDelivery',
	category: 'Delivery',
	faqs: [
		{
			id: 'faqDelivery1', 
			question: 'Do you offer delivery services?',
			answer: 'Yes, delivery is available for online purchases. Fees and times vary based on location.'
		}
	]
	}, 
	{
	id: 'faqSupport',
	category: 'Support',
	faqs: [
		{
			id: 'faqSupport1', 
			question: 'What should I do if I encounter a problem with my motorcycle?',
			answer: 'Contact our support team immediately. We offer assistance and can schedule a service appointment if needed.'
		}
		]
	}, 
	{
		id: 'faqContactUs',
		category: 'Contact Us',
		faqs: [
			{
				id: 'faqContactUs1', 
				question: 'How can I get in touch with customer service?',
				answer: 'Reach our customer service team via phone, email, or live chat on our website.'
			}
		]
	}
]

export default faqs

/*
	sample component strcuture for the 'FAQ' section: 

	<FaqSection>
		
	</FaqSection>
	
	const FaqContent = () => {
		return (
			<Grid2 
				container 
			>

			</Grid2>
		)	
	}
*/