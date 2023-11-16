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
      <a href="https://github.com/zzugbb" target="_blank" rel="noreferrer" style={{position:'fixed', right: 0, top:0, zIndex: 9999}}>
        <img decoding="async" width="149" height="149" 
          src="https://github.blog/wp-content/uploads/2008/12/forkme_right_green_007200.png?resize=149%2C149" 
          class="attachment-full size-full" alt="Fork me on GitHub" loading="lazy" data-recalc-dims="1"/>
      </a>
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
