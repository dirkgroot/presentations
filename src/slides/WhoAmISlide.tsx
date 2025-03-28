import {Backgrounds} from "../components/Backgrounds.tsx";
import {Emphasis} from "../components/Emphasis.tsx";

export const WhoAmISlide = () => (
  <section data-background={Backgrounds.WhiteWithFooter}>
    <h1><code><Emphasis>$</Emphasis> whoami<Emphasis>_</Emphasis></code></h1>
    <ul>
      <li><Emphasis><b>Name</b></Emphasis> Dirk Groot</li>
      <li><Emphasis><b>Born in</b></Emphasis> 1977<Emphasis><sup>*</sup></Emphasis></li>
      <li><Emphasis><b>Lives in</b></Emphasis> Arnhem, The Netherlands</li>
      <li><Emphasis><b>Software engineer for</b></Emphasis> 25+ years</li>
    </ul>
    <p><small><Emphasis><sup>*</sup></Emphasis> You do the math, I stopped counting</small></p>
  </section>
);
