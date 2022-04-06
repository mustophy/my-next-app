import '../styles/reset.css'
import '../styles/map.css'
import '../styles/plugins.css'
import '../styles/style.css'
import '../styles/yourstyle.css'
import '../styles/style-dark.css'
import '../styles/style2.css'
import "plyr-react/dist/plyr.css";


import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
       <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
