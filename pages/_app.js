import Layout from "../components/layout";
import '../styles/globals.css';
import '../styles/layout-components.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
