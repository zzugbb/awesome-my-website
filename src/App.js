import { HashRouter, Routes, Route } from "react-router-dom";
import TopLayout from "./layout/topLayout";
import FooterLayout from "./layout/footerLayout";

function App() {
  return (
    <HashRouter>
      <TopLayout/>
      <Routes>
      </Routes>
      <FooterLayout/>
    </HashRouter>
  );
}

export default App;
