import '@fontsource/inter/variable.css'
import 'tailwindcss/tailwind.css'

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
    <div className='bg-gray-100 min-h-screen'>
      <Component {...pageProps} />
    </div>
  )
}

export default CustomApp
