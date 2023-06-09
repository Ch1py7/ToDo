import { NextComponentType } from 'next'
import '../styles/globals.css'

interface AppProps {
  Component: NextComponentType
  pageProps: object
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Component {...pageProps} />
  )
}

export default App
