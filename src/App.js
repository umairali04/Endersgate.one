import React from "react"
import './App.css';
import Header from "./components/Header"
import Aos from "aos"
import "aos/dist/aos.css"
import { Route, Routes } from 'react-router-dom';
import routes from './routes';

function App() {

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      Aos.init({
        easing: 'ease-in-out-back',
        duration: 400,
        offset: 300,
        throttleDelay: 0
      })
    })
    return () => window.removeEventListener('scroll', () => {})
  }, [])

  return (
    <>
      <Header/>
      <Routes>
        {routes.map(route => <Route key={Math.random().toString()} path={route.path} element={route.component} />)}
      </Routes>
    </>
  );
}

export default App;
