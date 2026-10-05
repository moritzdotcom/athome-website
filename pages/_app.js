import '../styles/globals.css';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  const hideNav = Component.hideNav === true;
  const hideFooter = Component.hideFooter === true;

  return (
    <QueryClientProvider client={queryClient}>
      {!hideNav && <Navbar />}
      <Component {...pageProps} />
      {!hideFooter && <Footer />}
    </QueryClientProvider>
  );
}
