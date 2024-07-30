import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SideBar from './components/SideBar.js';

import Dummy2 from './pages/Dummy2';
import HomePage from './pages/Home';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <div className="main-wrapper">
          <Header />
          <SideBar />
          <div className="main-content">
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/dummy2" element={<Dummy2 />} />
              {/* Add more routes here */}
            </Routes>
          </div>
        </div>
      </Router>
    </React.StrictMode>
  );
}

export default App;
