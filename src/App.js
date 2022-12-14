import Routes from "./routes/Routes"
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div>
      <Header/>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
