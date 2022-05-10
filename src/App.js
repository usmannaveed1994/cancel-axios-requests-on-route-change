import { Route, Routes, Link, useLocation } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import './index.css';
import { useEffect } from 'react';
import { cancelPreviousPageRequests } from './baseService';

let previousPath = '';
let currentPath = '';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (!previousPath && !currentPath) {
      previousPath = location.pathname;
      currentPath = location.pathname;
    } else {
      previousPath = currentPath;
      currentPath = location.pathname;
    }
    if (previousPath !== currentPath) {
      cancelPreviousPageRequests(previousPath);
    }
  }, [location.pathname]);

  return (
    <div >
      <nav>
        <Link to="page1">Page 1</Link>
        <Link to="page2">Page 2</Link>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Page1 />} exact />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
