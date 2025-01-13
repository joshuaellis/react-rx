// Required for theme styles, previously was imported under the hood
import 'nextra-theme-docs/style.css'

import {Banner, Head} from 'nextra/components'
import {getPageMap} from 'nextra/page-map'
import {Footer, Layout, Navbar} from 'nextra-theme-docs'

export const metadata = {
  // ... your metadata API
  // https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}

const navbar = <Navbar logo={<b>Nextra</b>} projectLink="https://github.com/shuding/nextra" />
const footer = (
  <Footer className="flex-col items-center md:items-start">
    <span>
      MIT {new Date().getFullYear()} ©{' '}
      <a href="https://sanity.io" target="_blank">
        Sanity
      </a>
      .
    </span>
  </Footer>
)

export default async function RootLayout({children}) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
        backgroundColor={{
          dark: 'rgb(15, 23, 42)',
          light: 'rgb(254, 252, 232)',
        }}
        color={{
          hue: {dark: 304, light: 339.63},
          saturation: {dark: 41, light: 68.07},
        }}
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/sanity-io/react-rx/tree/current/website"
          editLink="Edit this page on GitHub"
          sidebar={{defaultMenuCollapseLevel: 1}}
          footer={footer}
          // ...Your additional theme config options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
