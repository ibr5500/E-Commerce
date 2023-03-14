import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';
// import Home from './components/pages/Home';
// import Signup from './components/pages/Signup';
import Login from './components/pages/Login';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
