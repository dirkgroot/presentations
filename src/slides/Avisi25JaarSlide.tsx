import {HTMLAttributes} from "react";
import {Backgrounds} from "../components/Backgrounds.tsx";
import avisi25JaarLogo from "../assets/avisi_25_jaar_logo.png";
import avisiLogo from "../assets/avisi_logo.png";

export const Avisi25JaarSlide = (props: HTMLAttributes<HTMLElement>) => (
  <section data-background={Backgrounds.FancyBackground} {...props}>
    <p><img src={avisi25JaarLogo} alt="Avisi 25 jaar logo" width="20%"/></p>
    <p><img src={avisiLogo} alt="Avisi logo" width="35%"/></p>
  </section>
);
