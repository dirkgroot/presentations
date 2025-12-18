import {Deck} from "../../components/Deck.tsx";
import {Avisi25JaarSlide} from "../../slides/Avisi25JaarSlide.tsx";
import {Backgrounds} from "../../components/Backgrounds.tsx";
import styles from "../Presentation.module.scss";
import {Emphasis} from "../../components/Emphasis.tsx";
import {Column, ColumnLayout} from "../../components/ColumnLayout.tsx";

export const AoC2025 = () => (
  <Deck title={"Advent of Code 2025"}>
    {/* Avisi logo(s) */}
    <Avisi25JaarSlide/>

    <section data-background={Backgrounds.WhiteWithFooter}>
      <h1 className={styles.title}>Veelgebruikte technieken<Emphasis>.</Emphasis></h1>
      <ul>
        <li className={"fragment"}>Dynamic programming (opdelen probleem d.m.v. recursie)</li>
        <li className={"fragment"}>Memoization (bij performance issues)</li>
        <li className={"fragment"}>Wiskunde (ABC formule, LCM, GCD, algebra, etc)</li>
        <li className={"fragment"}>Algoritmes (Dijkstra, BFS/(ID)DFS, flood fill, etc)</li>
      </ul>
    </section>

    <section data-background={Backgrounds.WhiteWithFooter}>
      <h1 className={styles.title}>Tips<Emphasis>.</Emphasis></h1>
      <ul>
        <li className={"fragment"}>Gebruik de voorbeelden als testcases</li>
        <li className={"fragment"}>Werk in kleine stappen</li>
        <li className={"fragment"}>Test je tussenstappen</li>
        <li className={"fragment"}>Verifieer je aannames</li>
        <li className={"fragment"}>Analyseer de input</li>
        <li className={"fragment"}>Wees niet bang om opnieuw te beginnen</li>
        <li className={"fragment"}>Keep it simple</li>
        <li className={"fragment"}>Neem af en toe een pauze</li>
        <li className={"fragment"}>Schrijf gerust lelijke code, maar zorg voor een goede functionele decompositie</li>
      </ul>
    </section>

    <section data-background={Backgrounds.RightHalfGrayWithFooter}>
      <ColumnLayout>
        <Column>
          <h1 className={styles.title}>De uitdaging<Emphasis>.</Emphasis></h1>
          <ul style={{listStyleType: "none"}}>
            <li>Maak de puzzels van <b><Emphasis>dag 11</Emphasis></b></li>
            <li>De eerste die 2 ⭐️ haalt, is de winnaar!</li>
          </ul>
        </Column>
        <Column className={"fragment"}>
          <h1 className={styles.title}>Bonus<Emphasis>!</Emphasis></h1>
          <ul style={{listStyleType: "none"}}>
            <li>Behaal zoveel mogelijk ⭐️ voor <b><Emphasis>dag 10</Emphasis></b></li>
            <li>Als je een oplossing voor <Emphasis>deel 2</Emphasis> weet te bedenken, maar deze nog niet
              geïmplementeerd hebt gekregen, dan telt dat als een <Emphasis>halve ⭐️</Emphasis>.
            </li>
            <li>Je moet dan wel bij de jury (Dirk) aannemelijk maken dat jouw oplossing <Emphasis>binnen 15
              seconden</Emphasis> het juiste antwoord geeft.
            </li>
            <li>Als je <Emphasis>dag 10</Emphasis> al (deels) af hebt, ben je uitgesloten van deze bonus.</li>
          </ul>
        </Column>
      </ColumnLayout>
    </section>
  </Deck>
);
