import Client from "shopify-buy"

export const client = Client.buildClient({
	storefrontAccessToken: process.env.SHOPIFY_STORE_FRONT_ACCCESS_TOKEN,
	domain: process.env.SHOPIFY_STORE_DOMAIN,
})
