import { AppProps } from 'next/app'
import 'fontsource-montserrat/400.css'

import 'styles/normalize.css'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Component {...pageProps} />

      <style jsx global>
        {`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          #__next {
            min-height: 100vh;
          }
          body {
            display: flex;
            flex-flow: column wrap;
            background-color: #181818;
            color: rgb(222, 222, 222);
            font-family: 'Montserrat', 'Arial, sans-serif';
            font-weight: 400;
            font-size: 18px;
          }
        `}
      </style>
    </>
  )
}

export default App
