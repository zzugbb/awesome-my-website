import { HashRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/mainPage";

import TopLayout from "./layout/topLayout";

import Study from "./pages/study";
import Tool from "./pages/tool";
import Deploy from "./pages/deploy";
import Life from "./pages/life";
import About from "./pages/about";

import FooterLayout from "./layout/footerLayout";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/study" element={
          <>
            <TopLayout/>
            <Study />
            <FooterLayout/>
          </>
        }>
        </Route>
        <Route path="/tool" element={
          <>
            <TopLayout/>
            <Tool />
            <FooterLayout/>
          </>
        }/>
        <Route path="/deploy" element={
          <>
            <TopLayout/>
            <Deploy />
            <FooterLayout/>
          </>
        }/>
        <Route path="/life" element={
          <>
            <TopLayout/>
            <Life/>
            <FooterLayout/>
          </>
        }/>
        <Route path="/about" element={
          <>
            <TopLayout/>
            <About />
            <FooterLayout/>
          </>
        } />
      </Routes>
    </HashRouter>
  );
}

export default App;
