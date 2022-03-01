import '../styles/globals.css'
import testing from '../lib/ex'

testing()

// Page template
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
