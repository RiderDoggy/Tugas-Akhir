import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Beranda from "./pages/Beranda"
import Header from './components/Header'
import ProfileDesa from "./pages/Profile-Desa"
import Footer from './components/Footer';
import UMKMDetail from './pages/UmkmDetail'
import DetailPost from './pages/DetailPost'
import DetailArtikel from './pages/DetailArtikel';
import Umkm from './pages/Umkm';

function App() {
  return (
    <div className="App">      
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Beranda/>} />
          <Route path="/profiledesa" element={<ProfileDesa/>} />
          <Route exact path="umkmDetail/:id" element={<UMKMDetail/>} />
          <Route path="/artikel/:id" element={<DetailArtikel/>} />
          <Route path="/post/:id" element={<DetailPost/>} />
          <Route path="/umkm" element={<Umkm/>} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
