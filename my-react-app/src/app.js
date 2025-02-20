import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import KasaLocation from "./pages/KasaLocation.js";
import Page404 from "./pages/Page404.js";
import { DataDone } from "./components/DataContext.js";
import Navigation from "./components/Navigation.js";
import Footer from "./components/Footer.js";

const App = () => {
  let basename = "/";
  
  if (window.location.hostname ==="http://localhost:3001/") {//change apres deploiment sur github
  }
  return (
    <BrowserRouter basename={basename}>
      <DataDone>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/location/:id" element={<KasaLocation />} />
          <Route path="/projet-8" element={<Home />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </DataDone>
    </BrowserRouter>
  );
};

export default App;

