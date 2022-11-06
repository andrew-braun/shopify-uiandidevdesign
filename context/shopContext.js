import React, { useState, useEffect } from "react"
import { client } from "utils/shopify/shopify-store"
const ShopContext = React.createContext()

export default function ShopProvider({ children }) {
	const [products, setProducts] = useState()
	const [product, setProduct] = useState()
	const [checkout, setCheckout] = useState()
	const [isCartOpen, setIsCartOpen] = useState(false)

	async function createCheckout() {
		const checkout = await client.checkout.create()
		localStorage.setItem("checkout_id", checkout.id)
		setCheckout(checkout)
	}

	async function fetchCheckout(checkoutId) {
		client.checkout.fetch(checkoutId).then((checkout) => {
			setCheckout(checkout)
		})
	}

	async function addItemToCheckout(variantId, quantity) {
		const lineItemToAdd = [
			{
				variantId,
				quantity: parseInt(quantity, 10),
			},
		]
		const checkout = await client.checkout.addLineItems(
			this.state.checkout.id,
			lineItemToAdd
		)
		setCheckout(checkout)
		console.log("added", checkout)
	}

	const closeCart = () => {
		setIsCartOpen(false)
	}

	const openCart = () => {
		setIsCartOpen(true)
	}

	useEffect(() => {
		if (localStorage.checkout_id) {
			fetchCheckout(localStorage.checkout_id)
		} else {
			createCheckout()
		}
	})

	return (
		<ShopContext.Provider
			value={{
				products,
				product,
				checkout,
				isCartOpen,
				closeCart,
				openCart,
				addItemToCheckout,
			}}
		>
			{children}
		</ShopContext.Provider>
	)
}

const ShopConsumer = ShopContext.Consumer
export { ShopConsumer, ShopContext }
