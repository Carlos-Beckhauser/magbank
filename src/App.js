import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.scss";
import Footer from "./components/Footer";
import AccountModal from "./components/AccountModal";
import Home from "./views/Home";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Router>
      <Navbar handleCreateAcc={() => setShowModal(true)} />

      <Routes>
        <Route path="/">
          <Home handleClick={() => setShowModal(true)} />
        </Route>
        <Route path="/login">
          <h2>Hello React Router !!!</h2>
        </Route>
      </Routes>

      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
    </Router>
  );
};

export default App;
