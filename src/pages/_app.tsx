import { NextComponentType, NextPageContext } from 'next'

interface AppProps {
  Component: NextComponentType<NextPageContext>
  pageProps: object
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Component {...pageProps} />
  )
}

export default App
