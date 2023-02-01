import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom'; 

const theme = extendTheme({
  colors: {
    primary: "#D2A2FF",
    secondary: "rgba(50,50,50,255)",
    menu: "#292832",
    elemental: "rgba(8,8,19,255)",
    water: "#93dbff",
    nftbg: "#A48C66",
    roadmap: "#080813",
    footer: "#171717",
    gold: "#bc8b30",
    yellow: "#FFAB10",
    fire: "#ffbb88",
    earth: "#9f8a7e",
    venom: "#8cffaf",
    mystic: "#b9c6c7",
    void: "#c87cfc",
    galleryGold: "#FFDB8A"
  },
  fonts: {
    poppins: "Poppins"
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ChakraProvider theme={theme} >
        <App />
      </ChakraProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
