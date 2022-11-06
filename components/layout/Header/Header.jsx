import React, { useContext } from "react"
import Link from "next/link"
import { FiShoppingCart } from "react-icons/fi"
import { ShopContext } from "context/shopContext"

const Header = () => {
	const context = useContext(ShopContext)
	console.log(context)
	// const { openCart } = useContext(ShopContext)
	return (
		<header className="header">
			<Link href="/" className="logo">
				UAndIDevDesign
			</Link>
			<button onClick={() => openCart()}>
				Cart
				<FiShoppingCart className="icon" />
			</button>
		</header>
	)
}
export default Header
