import GlobalStyles from '../styles/GlobalStyles/global';
import Navbar from '../components/Header/Navbar';
import { Toaster } from 'react-hot-toast';
import { UserContext } from '../lib/authContext';
import { useUserData } from '../lib/authHook';

function App({ Component, pageProps }) {
  
  const userData = useUserData();

  return (
    <UserContext.Provider value={ userData }>
      <GlobalStyles />
      <Navbar />
      <main><Component {...pageProps} /></main>
      <Toaster />
    </UserContext.Provider>
  );
  
}

export default App;
