import { HashRouter, Routes, Route } from "react-router-dom";
import { FloatButton } from 'antd';

import TopLayout from "./layout/topLayout";

import Study from "./pages/study";
import Tool from "./pages/tool";
import Deploy from "./pages/deploy";
import Life from "./pages/life";

import FooterLayout from "./layout/footerLayout";

function App() {
  return (
    <HashRouter>
      <TopLayout/>
      <Routes>
        <Route path="/" element={<Study />} />
        <Route path="/tool" element={<Tool />} />
        <Route path="/deploy" element={<Deploy />} />
        <Route path="/life" element={<Life />} />
      </Routes>
      <FloatButton.BackTop visibilityHeight={20} style={{bottom:'150px',right:'80px'}}/>
      <FooterLayout/>
    </HashRouter>
  );
}

export default App;
