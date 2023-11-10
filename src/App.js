import { HashRouter, Routes, Route } from "react-router-dom";
import TopLayout from "./layout/topLayout";

import Study from "./pages/study";
import Tool from "./pages/tool";

import FooterLayout from "./layout/footerLayout";

function App() {
  return (
    <HashRouter>
      <TopLayout/>
      <Routes>
        <Route path="/" element={<Study />} />
        <Route path="/tool" element={<Tool />} />
      </Routes>
      <FooterLayout/>
    </HashRouter>
  );
}

export default App;
