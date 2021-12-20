import "styles/globals.css";
import "@fontsource/chivo";
import "@fontsource/inter";
import "@fontsource/newsreader";
import "@fontsource/roboto";
import "@fontsource/ibm-plex-mono";
import { useEffect } from "react";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  useEffect(
    () =>
      document
        .querySelectorAll(".before-fade-in-up")
        .forEach((replacer) => replacer.classList.remove("before-fade-in-up")),
    []
  );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
      <Component {...pageProps} />
    </div>
  );
}

export default App;
