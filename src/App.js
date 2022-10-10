// import logo from './logo.svg';
import "./App.css";
import Headers from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LeftSection from "./components/LeftSection";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <BrowserRouter>
        <Headers />
      </BrowserRouter>
      {/* <LeftSection /> */}
      <MainSection />
      <Footer />
    </>
  );
}

export default App;
