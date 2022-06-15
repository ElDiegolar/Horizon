
let navbarItems = [
	{
		name: 'Home',
		icon: 'fas fa-home',
		link: ''
	},
	{
		name: 'About',
		icon: 'fas fa-address-card',
		link: 'about'
	},
	{
		name: 'Logos',
		icon: 'fas fa-blog',
		link: 'logos'
	},
	{
		name: 'FAQ',
		icon: 'fas fa-question-circle',
		link: 'faq'
	},
	{
		name: 'Contact',
		icon: 'fas fa-phone-alt',
		link: 'contact'
	}
]

let navbarAccounts = [
	{
		link: 'https://www.facebook.com/',
		icon: 'fab fa-facebook'
	},
	{
		link: 'https://www.instagram.com/',
		icon: 'fab fa-instagram'
	},
	{
		link: 'https://twitter.com/',
		icon: 'fab fa-twitter'
	}
]

let LogosData = [
	{
		img: require('../../images/pics/Demos/1.jpg'),
		alt: 'blog 1'
	},
	{
		img: require('../../images/pics/Demos/2.jpg'),
		alt: 'blog 2'
	},
	{
		img: require('../../images/pics/Demos/3.jpg'),
		alt: 'blog 3'
	},
	{
		img: require('../../images/pics/Demos/5.jpg'),
		alt: 'blog 4'
	},
	{
		img: require('../../images/pics/Demos/4.jpg'),
		alt: 'blog 5'
	}
]

let faqItems = [
	{
		id_one: 'headingOne',
		data_bs_target: '#collapseOne',
		aria_controls: 'collapseOne',
		id_two: 'collapseOne',
		aria_labelledby: 'headingOne',
		title: 'Question 1',
		show: true
	},
	{
		id_one: 'headingTwo',
		data_bs_target: '#collapseTwo',
		aria_controls: 'collapseTwo',
		id_two: 'collapseTwo',
		aria_labelledby: 'headingTwo',
		title: 'Question 2',
		show: false
	},
	{
		id_one: 'headingThree',
		data_bs_target: '#collapseThree',
		aria_controls: 'collapseThree',
		id_two: 'collapseThree',
		aria_labelledby: 'headingThree',
		title: 'Question 3',
		show: false
	}
]

let contact = [
	{
		type: 'e-mail',
		info: 'support@horizon.com',
		icon: 'fas fa-envelope'
	},
	{
		type: 'phone-number',
		info: '000 0000',
		icon: 'fas fa-phone-alt'
	},
	{
		type: 'address-location',
		info: '000 Alpha Road, Malta',
		icon: 'fas fa-map-marker-alt'
	}
]

export
{
	navbarItems,
	navbarAccounts,
	LogosData,
	faqItems,
	contact
}