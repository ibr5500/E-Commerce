import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';
import Signup from './components/pages/Signup';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Product from './components/pages/Product';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/signup"
          element={<Signup />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/products"
          element={<Product />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
