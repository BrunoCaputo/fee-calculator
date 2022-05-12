import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { AuthUserProvider } from "../providers/auth.provider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthUserProvider>
      <Component {...pageProps} />
    </AuthUserProvider>
  );
}

export default MyApp;
