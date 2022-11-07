import { Html, Head, Main, NextScript } from 'next/document'
import PWAHead from '~/features/core/components/PWAHead'

export default function Document() {
  return (
    <Html>
      <Head>
        <PWAHead />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
