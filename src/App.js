import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';
import Signup from './components/pages/Signup';
// import Home from './components/pages/Home';
// import Login from './components/pages/Login';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
