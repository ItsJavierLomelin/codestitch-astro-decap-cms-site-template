import { TOKENS, COPY } from "@data/template";

// ===== SITE CONSTANTS =====
export const SITE = {
	title: TOKENS.bizName,
	tagline: `${TOKENS.mainService} in ${TOKENS.cityState}`,
	description: COPY.metaDescription,
	url: TOKENS.siteUrl,
	author: TOKENS.bizName,
	locale: "en",
};

// ===== BUSINESS INFO =====
export const BUSINESS = {
	name: SITE.title,
	email: TOKENS.email,
	phoneForTel: TOKENS.phoneForTel,
	phoneFormatted: TOKENS.phone,
	logo: "/assets/favicons/favicon.svg",
	address: {
		lineOne: TOKENS.addressOne,
		lineTwo: TOKENS.addressTwo,
		city: TOKENS.city,
		state: TOKENS.state,
		zip: TOKENS.zip,
		mapLink: TOKENS.mapLink,
	},
	socials: {
		facebook: TOKENS.facebook,
		instagram: TOKENS.instagram,
	},
};

// ===== SEO DEFAULTS =====
export const SEO = {
	title: SITE.title,
	description: SITE.description,
};

// ===== OPEN GRAPH DEFAULTS =====
export const OG = {
	locale: "en_US",
	image: "/assets/social.jpg", // Default fallback social image located in public/
};
