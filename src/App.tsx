import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AppLayout } from './layouts/AppLayout';
import { LandingPage } from './pages/LandingPage';
import { DesignSystemPage } from './pages/DesignSystemPage';

function App() {
  const [currentHash, setCurrentHash] = useState(() => 
    typeof window !== 'undefined' ? window.location.hash : ''
  );

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      // Scroll to top on page switches to ensure smooth navigation
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isDesignSystem = currentHash === '#design-system';

  return (
    <ThemeProvider>
      <AppLayout>
        {isDesignSystem ? <DesignSystemPage /> : <LandingPage />}
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
