import { BrowserRouter, Route, Routes } from "react-router";
import Index from "./pages/index";
import Header from "./components/header";
import About from "./pages/about";
/* import ___ from location("./pages/___") */

import "./style/index.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Index />} />

          {/** FOLLOW THIS TEMPLATE BELOW TO ADD PAGES TO THE MENU BAR ON TOP OF PAGE**/}
          <Route path="/about.tsx" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
