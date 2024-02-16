import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CardInfo from "./Pages/CardInfo";

//REACT ROUTER DOM 
import { Route, Routes } from "react-router-dom";

//PAGES
import Home from "./Pages/Home";
import SelectPay from "./Pages/SelectPay";

function App() {

  return (
    <>
      <Navbar />
         <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Select payment" element={<SelectPay />} />
          <Route path="/Info" element={<CardInfo />} />
         </Routes>
      <Footer />
    </>
  )
}

export default App