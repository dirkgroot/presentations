import {PresentationProps} from "./PresentationProps.tsx";
import {Deck} from "../components/Deck.tsx";
import {Avisi25JaarSlide} from "../slides/Avisi25JaarSlide.tsx";
import {WhoAmISlide} from "../slides/WhoAmISlide.tsx";
import {Backgrounds} from "../components/Backgrounds.tsx";
import {AutoAnimate} from "../components/AutoAnimate.tsx";

export const GettingBetterAgainstAllOdds = ({scroll}: PresentationProps) => (
  <Deck title="Getting better, against all odds" scroll={scroll}>
    {/* Avisi logo(s) */}
    <Avisi25JaarSlide/>

    {/* Who am I? */}
    <WhoAmISlide/>

    {/* PART 1: Show of hands */}
    <section data-background={Backgrounds.WhiteWithFooter}>
      <h1>Freedom</h1>
      <ul>
        <li className={"fragment"}>Are you free to choose your way of working?</li>
        <li className={"fragment"}>Are you limited by company policies?</li>
        <li className={"fragment"}>Are you limited by company policies which are dictated by certifications?</li>
      </ul>
    </section>
    <section data-background={Backgrounds.WhiteWithFooter}>
      <h1>Resistance</h1>
      <h4>How do you feel when a colleague suggests an improvement?</h4>
      <ul>
        <li className={"fragment"}>Cynical: <em>"Why do this, here's 10 other things we can do"</em></li>
        <li className={"fragment"}>Enthusiastic: <em>"Let's go!"</em></li>
        <li className={"fragment"}>Constructive: <em>"How can we make this happen?"</em></li>
       </ul>
    </section>
    <section data-background={Backgrounds.WhiteWithFooter}>
      <h1>Scope</h1>
      <h4>What would you like to improve ASAP?</h4>
      <ul>
        <li className={"fragment"}>A few minor improvements</li>
        <li className={"fragment"}>A few major improvements</li>
        <li className={"fragment"}>Everything!</li>
      </ul>
    </section>

    {/* PART 2: Case study */}
    <AutoAnimate>
      <section data-background={Backgrounds.FancyWithFooter}>
        <h1 style={{color: "white"}}>Case study</h1>
        <h2 style={{color: "white"}}><em>Getting better, against all odds</em></h2>
      </section>
      <section data-background={Backgrounds.WhiteWithFooter}>
        <h1>Case study</h1>
        <h2>Software system</h2>
        <ul>
          <li>Changes take "forever"</li>
          <li>10+ year old codebase</li>
          <li>Heavily overengineered</li>
          <li>Brittle unit tests</li>
          <li>Subject to certification</li>
          <li>Proprietary test tool for E2E and certification tests</li>
        </ul>
      </section>
      <section data-background={Backgrounds.WhiteWithFooter}>
        <h1>Case study</h1>
        <h3>Team</h3>
        <ul>
          <li>Has been disbanded and revived twice in the past 10 years</li>
          <li>Limited historical knowledge</li>
          <li>Sees the need for improvement, but doesn't know how</li>
          <li>Under pressure to deliver features</li>
        </ul>
      </section>
      <section data-background={Backgrounds.WhiteWithFooter}>
        <h1>Case study</h1>
        <h2>Organisation</h2>
        <ul>
          <li>Multiple instances of declaring the product EOL and "reviving" it again sometime later</li>
          <li>Product vision is unclear and has changed multiple times</li>
          <li>Management is very reluctant about making big improvements to the system</li>
        </ul>
      </section>
    </AutoAnimate>

    {/* PART 3: Conclusion */}
    <section data-background={Backgrounds.WhiteWithFooter}>
      <h1>Conclusion</h1>
      <h3>Getting better requires</h3>
      <ul>
        <li className={"fragment"}>Insight</li>
        <li className={"fragment"}>Expertise</li>
        <li className={"fragment"}>Critical mindset</li>
        <li className={"fragment"}>Sense of responsibility</li>
        <li className={"fragment"}>Persuasiveness</li>
        <li className={"fragment"}>Patience</li>
        <li className={"fragment"}>Trust</li>
        <li className={"fragment"}>Courage</li>
      </ul>
      <br/>
      <br/>
      <div className={"fragment"}>
        <h3>Which of these are your strong suits?</h3>
        <h3>Which ones need improvement?</h3>
      </div>
    </section>

    {/* CLOSING THOUGHTS */}
    <section data-background={Backgrounds.WhiteWithFooter}>
      <h1>Closing thoughts</h1>
      <div>
        <h3>How to fly, according to Douglas Adams</h3>
        <small>From <em>Life, the Universe and Everything (The Hitchhiker's Guide to the Galaxy)</em></small>
      </div>
      <ol>
        <li className={"fragment"}>Throw yourself to the ground</li>
        <li className={"fragment"}>While falling, get <em>distracted</em> by something</li>
        <li className={"fragment"}>Miss the ground completely</li>
      </ol>
    </section>
  </Deck>
);
