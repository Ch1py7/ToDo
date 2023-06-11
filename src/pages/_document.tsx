import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <title>{'To\\/do'}</title>
      </Head>
      <body className='bg-[#161616]'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
