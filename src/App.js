import "./styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Home/Homepage";
import Aboutpage from "./pages/About/Aboutpage";
import Contactpage from "./pages/Contact/Contactpage";
import Errorpage from "./pages/Error/Errorpage";
import Layout from "./Components/Layout";

function App() {
  return (
    <div className="App">
      {
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout><Homepage /></Layout>} />
            <Route path="/aboutpage" element={<Layout><Aboutpage /></Layout>} />
            <Route path="/contactpage" element={<Layout><Contactpage /></Layout>} />
            <Route path="/errorpage" element={<Layout headertype="errorpages" erroertype="errorfooter" ><Errorpage /></Layout>} />
            <Route path="*" element={<Layout><Homepage /></Layout>} />
          </Routes>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
