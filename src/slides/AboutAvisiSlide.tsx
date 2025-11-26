import {Backgrounds} from "../components/Backgrounds.tsx";
import {Emphasis} from "../components/Emphasis.tsx";
import {Column, ColumnLayout} from "../components/ColumnLayout.tsx";
import avisi_photo from "./avisi_photo.png";

export const AboutAvisiSlide = () => (
  <section data-background={Backgrounds.WhiteWithFooter}>
    <h1>Avisi<Emphasis>?</Emphasis></h1>
    <ColumnLayout>
      <Column>
        <ul style={{listStyleType: "none"}}>
          <li>Software company in Arnhem, the Netherlands</li>
          <li>Founded in 2000</li>
          <li>~100 employees</li>
          <li>
            Software development<br/>
            Cloud services<br/>
            Consultancy<br/>
            Innovation
          </li>
        </ul>
      </Column>
      <Column>
        <img src={avisi_photo} alt="Avisi photo"/>
      </Column>
    </ColumnLayout>
  </section>
);
