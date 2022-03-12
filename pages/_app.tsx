import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import { store } from '../redux/store/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <ChakraProvider>
      <Provider store={store}>

        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  </>
}

export default MyApp
