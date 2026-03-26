import { Footer, Layout, ThemeSwitch } from 'nextra-theme-blog'
import { Head } from 'nextra/components'
import 'nextra-theme-blog/style.css'
import '../styles/main.css'

export const metadata = {
  metadataBase: new URL('https://gdhanda-portfolio.vercel.app'),
  title: {
    default: 'Gavin Dhanda Software Portfolio',
    template: '%s | Gavin Dhanda'
  },
  description: 'Computer Science and Business Economics @ Brown University.',
  openGraph: {
    siteName: 'Gavin Dhanda Software Portfolio',
    description: 'Computer Science and Business Economics @ Brown University.',
    images: ['/images/aboutme/ranch.jpg']
  },
  robots: 'follow, index'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Layout>
          {children}
          <Footer>
            <small>
              <time>{new Date().getFullYear()}</time> © Gavin Dhanda.{' '}
              <ThemeSwitch />
            </small>
          </Footer>
        </Layout>
      </body>
    </html>
  )
}
