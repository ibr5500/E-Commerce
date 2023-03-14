import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';
// import Home from './components/pages/Home';
import Signup from './components/pages/Signup';

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
