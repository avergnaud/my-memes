// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

/* The custom app components are always rendered to every page */

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
