import '../styles/globals.css'
import NavBar from '/components/Navbar'

function MyApp({ Component, pageProps }) {

  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W8437GR"

height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

  return (
  <>
    <NavBar/>
    <Component {...pageProps} />
  </>
  );
}

export default MyApp
