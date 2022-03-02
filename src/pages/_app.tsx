import '@fontsource/inter/variable.css'
import '../style/globals.css'

import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

type CustomAppProps = AppProps & {
  Component: NextPage & {
    disableLayout?: boolean
  }
}

function CustomApp({ Component, pageProps }: CustomAppProps) {
  return Component.disableLayout ? (
    <Component {...pageProps} />
  ) : (
    <div className='stylized-bg min-h-screen'>
      <Component {...pageProps} />
    </div>
  )
}

export default CustomApp
