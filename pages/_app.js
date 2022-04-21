import '../styles/globals.css'
import { CanvasProvider } from '../providers/canvas'

function MyApp({ Component, pageProps }) {
  return (
  <CanvasProvider>
	  <Component {...pageProps} />
  </CanvasProvider>
  )
}

export default MyApp
