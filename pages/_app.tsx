import "styles/globals.css";
import "@fontsource/chivo";
import "@fontsource/inter";
import "@fontsource/newsreader";
import "@fontsource/roboto";
import "@fontsource/ibm-plex-mono";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
      <Component {...pageProps} />
    </div>
  );
}

export default App;
