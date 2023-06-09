import React from 'react';
import Header from './Header';
import Body from './Body';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Works from './Works'; 
import Artists from './Artists'; 
import PageArtist from './PageArtist';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/works" element={<Works />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/works/:artwork" element={<PageArtist />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;