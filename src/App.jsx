import Navbar from './components/Navbar'
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Outlet/>
    </>
  )
}

export default App
