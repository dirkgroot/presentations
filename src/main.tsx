import {createRoot} from "react-dom/client";
import "highlight.js/scss/ir-black.scss";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "./index.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DesigningWithTypesKotlin} from "./presentations/DesigningWithTypesKotlin.tsx";
import {PresentationListPage} from "./PresentationListPage.tsx";
import {DesigningWithTypesJava} from "./presentations/DesigningWithTypesJava.tsx";
import {GettingBetterAgainstAllOdds} from "./presentations/GettingBetterAgainstAllOdds.tsx";
import {FpOopBestFriendsForever} from "./presentations/FpOopBestFriendsForever.tsx";

createRoot(document.body).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PresentationListPage/>}/>
      <Route path="/designing-with-types" element={<DesigningWithTypesKotlin/>}/>
      <Route path="/designing-with-types/scroll" element={<DesigningWithTypesKotlin scroll/>}/>
      <Route path="/designing-with-types-java" element={<DesigningWithTypesJava/>}/>
      <Route path="/designing-with-types-java/scroll" element={<DesigningWithTypesJava scroll/>}/>
      <Route path="/fp-oop-bffs" element={<FpOopBestFriendsForever/>}/>
      <Route path="/getting-better-against-all-odds" element={<GettingBetterAgainstAllOdds/>}/>
      <Route path="/getting-better-against-all-odds/scroll" element={<GettingBetterAgainstAllOdds scroll/>}/>
    </Routes>
  </BrowserRouter>,
);
