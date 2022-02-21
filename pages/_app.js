import '../styles/reset.css'
import '../styles/plugins.css'
import '../styles/style.css'
import '../styles/yourstyle.css'
import '../styles/style-dark.css'
import '../styles/style2.css'


import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
       <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
