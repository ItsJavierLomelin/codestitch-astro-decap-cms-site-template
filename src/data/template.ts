// ===== TEMPLATE VARIABLES =====
// Every {Token} below is a slot. Replace the value of each one for a new site.
// Business facts (name, phone, email, address) live in src/data/client.ts and
// pull from the TOKENS block here, so you only edit this file for a new client.

export const TOKENS = {
	bizName: "{Biz Name}",
	mainService: "{Main Service}",
	cityState: "{City, ST}",
	city: "{City}",
	state: "{ST}",
	phone: "{Phone}",
	phoneForTel: "{Phone Digits}",
	email: "{Email}",
	addressOne: "{Address Line One}",
	addressTwo: "{Address Line Two}",
	zip: "{Zip}",
	mapLink: "{Map Link}",
	siteUrl: "{Site URL}",
	founder: "{Owner Name}",
	founderTitle: "{Owner Title}",
	facebook: "{Facebook URL}",
	instagram: "{Instagram URL}",
	serviceOne: "{Service One}",
	serviceTwo: "{Service Two}",
	serviceThree: "{Service Three}",
	serviceFour: "{Service Four}",
};

const T = TOKENS;

export const COPY = {
	metaDescription: `{Meta Description for ${T.bizName}}`,
	hero: {
		topper: `{Hero Topper}`,
		titleLineOne: `{Hero Headline Line One}`,
		titleLineTwo: `{Hero Headline Line Two}`,
		text: `{Hero Paragraph}`,
		primaryButton: `{Hero Primary Button}`,
		secondaryButton: `{Hero Secondary Button}`,
		imageAlt: `{Hero Image Alt}`,
	},
	services: [
		{ icon: "service1", title: T.serviceOne, text: `{Service One Blurb}` },
		{ icon: "service2", title: T.serviceTwo, text: `{Service Two Blurb}` },
		{ icon: "service3", title: T.serviceThree, text: `{Service Three Blurb}` },
	],
	about: {
		topper: `{About Topper}`,
		title: `{About Title}`,
		paragraphOne: `{About Paragraph One}`,
		paragraphTwo: `{About Paragraph Two}`,
		quote: `{Owner Quote}`,
		button: `{About Button}`,
		imageOneAlt: `{About Image One Alt}`,
		imageTwoAlt: `{About Image Two Alt}`,
	},
	mainServiceSection: {
		topper: `{Main Service Topper}`,
		title: `{Main Service Title}`,
		paragraphOne: `{Main Service Paragraph One}`,
		paragraphTwo: `{Main Service Paragraph Two}`,
	},
	gallery: {
		topper: `{Gallery Topper}`,
		title: `{Gallery Title}`,
		button: `{Gallery Button}`,
		quoteButton: `{Quote Button}`,
		alts: ["{Gallery Alt One}", "{Gallery Alt Two}", "{Gallery Alt Three}", "{Gallery Alt Four}", "{Gallery Alt Five}", "{Gallery Alt Six}", "{Gallery Alt Seven}", "{Gallery Alt Eight}", "{Gallery Alt Nine}"],
	},
	testimonials: {
		topper: `{Reviews Topper}`,
		title: `{Reviews Title}`,
		text: `{Reviews Intro}`,
		button: `{Reviews Button}`,
		items: [
			{ name: "{Reviewer One}", role: "{Reviewer One Role}", text: `{Review One}` },
			{ name: "{Reviewer Two}", role: "{Reviewer Two Role}", text: `{Review Two}` },
		],
	},
	reviews: [
		{ name: "{Reviewer One}", role: "{Reviewer One Role}", text: `{Review One}` },
		{ name: "{Reviewer Two}", role: "{Reviewer Two Role}", text: `{Review Two}` },
		{ name: "{Reviewer Three}", role: "{Reviewer Three Role}", text: `{Review Three}` },
		{ name: "{Reviewer Four}", role: "{Reviewer Four Role}", text: `{Review Four}` },
		{ name: "{Reviewer Five}", role: "{Reviewer Five Role}", text: `{Review Five}` },
		{ name: "{Reviewer Six}", role: "{Reviewer Six Role}", text: `{Review Six}` },
	],
	faq: {
		topper: `{FAQ Topper}`,
		title: `{FAQ Title}`,
		items: [
			{ q: `{FAQ Question One}`, a: `{FAQ Answer One}` },
			{ q: `{FAQ Question Two}`, a: `{FAQ Answer Two}` },
			{ q: `{FAQ Question Three}`, a: `{FAQ Answer Three}` },
			{ q: `{FAQ Question Four}`, a: `{FAQ Answer Four}` },
		],
	},
	cta: {
		titleLineOne: `{CTA Headline Line One}`,
		titleLineTwo: `{CTA Headline Line Two}`,
		text: `{CTA Paragraph}`,
		button: `{CTA Button}`,
	},
	contact: {
		topper: `{Contact Topper}`,
		title: `{Contact Title}`,
		text: `{Contact Paragraph}`,
		button: `{Contact Submit Button}`,
	},
	footer: {
		blurb: `{Footer Blurb}`,
		creditName: T.bizName,
	},
	pages: {
		home: { title: `{Home Page Title}`, description: `{Home Meta Description}` },
		about: { title: `{About Page Title}`, description: `{About Meta Description}`, banner: `{About Banner}` },
		projects: { title: `{Projects Page Title}`, description: `{Projects Meta Description}`, banner: `{Projects Banner}` },
		reviews: { title: `{Reviews Page Title}`, description: `{Reviews Meta Description}`, banner: `{Reviews Banner}` },
		contact: { title: `{Contact Page Title}`, description: `{Contact Meta Description}`, banner: `{Contact Banner}` },
		blog: { title: `{Blog Page Title}`, description: `{Blog Meta Description}`, banner: `{Blog Banner}` },
		project1: { title: `{Project One Title}`, description: `{Project One Meta Description}` },
		project2: { title: `{Project Two Title}`, description: `{Project Two Meta Description}` },
	},
};
