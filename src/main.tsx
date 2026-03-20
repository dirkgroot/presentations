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
import {FpOopBestFriendsForever} from "./presentations/FpOOpBestFriendsForever/FpOopBestFriendsForever.tsx";
import {StudentTour} from "./presentations/StudentTour/StudentTour.tsx";
import {DeepDiveDomainDrivenDesign} from "./presentations/DeepDiveDomainDrivenDesign/DeepDiveDomainDrivenDesign.tsx";
import {AoC2025} from "./presentations/AoC2025/AoC2025.tsx";

createRoot(document.body).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PresentationListPage/>}/>
      <Route path="/designing-with-types" element={<DesigningWithTypesKotlin/>}/>
      <Route path="/designing-with-types/scroll" element={<DesigningWithTypesKotlin scroll/>}/>
      <Route path="/designing-with-types-java" element={<DesigningWithTypesJava/>}/>
      <Route path="/designing-with-types-java/scroll" element={<DesigningWithTypesJava scroll/>}/>
      <Route path="/fp-oop-bffs" element={<FpOopBestFriendsForever/>}/>
      <Route path="/fp-oop-bffs/scroll" element={<FpOopBestFriendsForever scroll/>}/>
      <Route path="/getting-better-against-all-odds" element={<GettingBetterAgainstAllOdds/>}/>
      <Route path="/getting-better-against-all-odds/scroll" element={<GettingBetterAgainstAllOdds scroll/>}/>
      <Route path="/deep-dive-ddd" element={<DeepDiveDomainDrivenDesign shortVersion={false}/>}/>
      <Route path="/deep-dive-ddd/scroll" element={<DeepDiveDomainDrivenDesign shortVersion={false} scroll/>}/>
      <Route path="/deep-dive-ddd/short" element={<DeepDiveDomainDrivenDesign shortVersion={true}/>}/>
      <Route path="/deep-dive-ddd/short/scroll" element={<DeepDiveDomainDrivenDesign shortVersion={true} scroll/>}/>
      <Route path="/student-tour" element={<StudentTour/>}/>
      <Route path="/aoc-2025" element={<AoC2025/>}/>
    </Routes>
  </BrowserRouter>,
);
