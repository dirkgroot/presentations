import {HTMLAttributes} from "react";
import {Backgrounds} from "../components/Backgrounds.tsx";
import avisiLogo from "../assets/avisi_logo.png";

export const AvisiLogoSlide = (props: HTMLAttributes<HTMLElement>) => (
  <section data-background={Backgrounds.FancyBackground} {...props}>
    <p><img src={avisiLogo} alt="Avisi logo" width="35%"/></p>
  </section>
);
