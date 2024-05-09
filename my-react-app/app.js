import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./src/pages/Home.js";
import About from "./src/pages/About.js";
import KasaLocation from "./src/pages/KasaLocation.js";
import Page404 from "./src/pages/Page404.js";
import { DataDone } from "./src/components/DataContext.js";
import Navigation from "./src/components/Navigation.js";
import Footer from "./src/components/Footer.js";

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
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </DataDone>
    </BrowserRouter>
  );
};

export default App;

