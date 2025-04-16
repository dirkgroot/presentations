import {createRoot} from "react-dom/client";
import "highlight.js/scss/ir-black.scss";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "./index.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DesigningWithTypes} from "./presentations/DesigningWithTypes.tsx";
import {PresentationListPage} from "./PresentationListPage.tsx";

createRoot(document.body).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PresentationListPage/>}/>
      <Route path="/designing-with-types" element={<DesigningWithTypes/>}/>
      <Route path="/designing-with-types/scroll" element={<DesigningWithTypes scroll/>}/>
    </Routes>
  </BrowserRouter>,
);
