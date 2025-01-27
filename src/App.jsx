import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { About, Contact, Home, Projects } from './pages';
import TagManager from 'react-gtm-module';
import { ContraHire } from './components/ContraHire';

const tagManagerArgs = {
  gtmId: import.meta.env.VITE_APP_GTM_ID,
};

TagManager.initialize(tagManagerArgs);

export const App = () => {
  return (
    <main className='min-h-screen bg-slate-300/20'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
};
