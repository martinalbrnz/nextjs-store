import Layout from "../components/layout";
import '../styles/globals.css';
import '../styles/layout-components.css';
import '../styles/main-page.css';
import '../styles/about-page.css';
import '../styles/user-page.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
