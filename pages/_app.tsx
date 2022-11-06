import { useContext } from "react"
import "../styles/globals.css"
import type { AppProps } from "next/app"
import ShopProvider from "context/shopContext"
import Layout from "components/layout/Layout"
import Cart from "components/Cart/Cart"

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ShopProvider>
			<Layout>
				<Cart />
				<Component {...pageProps} />
			</Layout>
		</ShopProvider>
	)
}
