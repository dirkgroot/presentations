import {Deck} from "../components/Deck.tsx";
import {WhoAmISlide} from "../slides/WhoAmISlide.tsx";
import {Avisi25JaarSlide} from "../slides/Avisi25JaarSlide.tsx";
import {Backgrounds} from "../components/Backgrounds.tsx";
import {AutoAnimate} from "../components/AutoAnimate.tsx";
import styles from "./Presentation.module.scss";
import story_1 from "./story_1.svg";
import story_2 from "./story_2.svg";
import {Emphasis} from "../components/Emphasis.tsx";

export const StudentTour = () => (
  <Deck title={"Student Tour"}>
    {/* Avisi logo(s) */}
    <Avisi25JaarSlide/>

    {/* Who am I? */}
    <WhoAmISlide/>

    <AutoAnimate>
      <section data-background={Backgrounds.WhiteWithFooter}>
        <h2 className={styles.subtitle}>Als software developer ben ik vooral...</h2>
        <h2 className={"fragment"}>nieuwe dingen aan het maken</h2>
      </section>
      <section data-background={Backgrounds.WhiteWithFooter}>
        <h2 className={styles.subtitle}>Als software developer ben ik vooral...</h2>
        <h2>bestaande software aan het onderhouden</h2>
      </section>
      <section data-background={Backgrounds.WhiteWithFooter}>
        <h2 className={styles.subtitle}>Als software developer ben ik vooral...</h2>
        <h2>problemen aan het oplossen</h2>
      </section>
    </AutoAnimate>

    <AutoAnimate>
      <section data-background={Backgrounds.WhiteWithFooter}>
        <h2 className={styles.subtitle}>Software development is...</h2>
        <h2 className={"fragment"}>individueel werk</h2>
      </section>
      <section data-background={Backgrounds.WhiteWithFooter}>
        <h2 className={styles.subtitle}>Software development is...</h2>
        <h2>teamwerk</h2>
      </section>
    </AutoAnimate>

    <section data-background={Backgrounds.WhiteWithFooter}>
      <h1 className={styles.title}>De realiteit</h1>
      <h2 className={styles.subtitle}>Het is geen of/of</h2>
    </section>

    <AutoAnimate>
      <section data-background={Backgrounds.WhiteWithFooter}>
        <h1 className={styles.title}>Story time!</h1>
        <img src={story_1} alt={"Diagram"}/>
      </section>

      <section data-background={Backgrounds.WhiteWithFooter}>
        <h1 className={styles.title}>Story time!</h1>
        <img src={story_2} alt={"Diagram"}/>
      </section>
    </AutoAnimate>

    {/* Thanks! */}
    <section data-background={Backgrounds.WhiteWithFooter}>
      <h1>Thank you<Emphasis>!</Emphasis></h1>
    </section>
  </Deck>
);
