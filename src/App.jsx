import Navbar from './components/Navbar'
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom'

function App() {
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 300); // wait for render
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
