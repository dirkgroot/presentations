import {Deck} from "../../components/Deck.tsx";
import {PresentationProps} from "../PresentationProps.tsx";
import {Avisi25JaarSlide} from "../../slides/Avisi25JaarSlide.tsx";
import {WhoAmISlide} from "../../slides/WhoAmISlide.tsx";
import {Backgrounds} from "../../components/Backgrounds.tsx";
import styles from "../Presentation.module.scss";
import {Emphasis} from "../../components/Emphasis.tsx";
import {Column, ColumnLayout} from "../../components/ColumnLayout.tsx";
import slides_qr from "./slides_qr.png";
import code_qr from "./code_qr.png";

export const FpOopBestFriendsForever = ({scroll}: PresentationProps) => (
  <Deck title={"FP and OOP: BFFs?"} scroll={scroll}>
    {/* Avisi logo(s) */}
    <Avisi25JaarSlide/>

    {/* Who am I? */}
    <WhoAmISlide/>

    {/* Title */}
    <section data-background={Backgrounds.WhiteWithFooter}>
      <h1 className={styles.title}><Emphasis>FP</Emphasis> and <Emphasis>OOP</Emphasis>:<br/>Best Friends
        Forever<Emphasis>?</Emphasis></h1>
      <h2 className={styles.subtitle}>Combining the best of two worlds</h2>
    </section>

    {/* Introduction */}
    <section data-background={Backgrounds.WhiteWithFooter}>
      <h1 className={styles.title}>Background<Emphasis>.</Emphasis></h1>
      <h2 className={styles.subtitle}>FP has become mainstream</h2>
      <ul>
        <li className={"fragment"}>FP languages on the JVM: Scala, Clojure</li>
        <li className={"fragment"}>FP features are being adopted by existing OOP languages (Java, C#, C++)</li>
        <li className={"fragment"}>FP features are built into new languages (Kotlin, Rust)</li>
      </ul>
    </section>

    {/* So what? */}
    <section data-background={Backgrounds.WhiteWithFooter}>
      <h1 className={styles.title}>So what<Emphasis>?</Emphasis></h1>
      <h2 className={`${styles.subtitle} fragment`}>Let's refactor some FP into an OOP program<br/>
        and see what happens<Emphasis>!</Emphasis>
      </h2>
      <h3 className={`${styles.subtitle} fragment`}>Goals<Emphasis>:</Emphasis></h3>
      <ul>
        <li className={"fragment"}>Prefer immutability</li>
        <li className={"fragment"}>Treat functions as first-class citizens</li>
        <li className={"fragment"}>Minimize exception handling</li>
      </ul>
    </section>

    {/* Summary */}
    <section data-background={Backgrounds.WhiteWithFooter}>
      <h1 className={styles.title}>Summary<Emphasis>.</Emphasis></h1>
      <ul>
        <li className={"fragment"}>Starting point: An piece of OO/procedural code</li>
        <li className={"fragment"}>
          Introduced FP techniques and patterns
          <ul>
            <li>Algebraic datatype: <Emphasis><code>Status</code></Emphasis></li>
            <li>Functor: <Emphasis><code>map</code></Emphasis></li>
            <li>Monad: <Emphasis><code>flatMap</code></Emphasis></li>
            <li>Currying: <Emphasis><code>(ProductName) -&gt; (Quantity) -&gt; ShoppingCartItem</code></Emphasis></li>
            <li>Applicative functor: <Emphasis><code>apply</code></Emphasis></li>
          </ul>
        </li>
        <li className={"fragment"}><Emphasis>Bonus</Emphasis>: We solved input validation, once and for all! 🥳</li>
      </ul>
    </section>

    {/* Conclusion */}
    <section data-background={Backgrounds.WhiteWithFooter}>
      <h1 className={styles.title}>OOP and FP: BFFs<Emphasis>?</Emphasis></h1>
      <h2 className={styles.subtitle}><Emphasis>Yes!</Emphasis><br/>
        But a good relationship is about giving and receiving</h2>
    </section>

    {/* Trade-offs */}
    <section data-background={Backgrounds.WhiteWithFooter}>
      <h1 className={styles.title}>Trade-offs<Emphasis>.</Emphasis></h1>
      <ColumnLayout>
        <Column className={"fragment"}>
          <h2 className={styles.subtitle}>FP</h2>
          <ul style={{listStyleType: "none"}}>
            <li><b style={{color: "darkred"}}>-</b> Allow some impure code</li>
            <li><b style={{color: "green"}}>+</b> Encapsulation</li>
          </ul>
        </Column>
        <Column className={"fragment"}>
          <h2 className={styles.subtitle}>OOP</h2>
          <ul style={{listStyleType: "none"}}>
            <li><b style={{color: "darkred"}}>-</b> Constructors</li>
            <li><b style={{color: "darkred"}}>-</b> Exceptions</li>
            <li><b style={{color: "green"}}>+</b> Immutability / referential transparency</li>
            <li><b style={{color: "green"}}>+</b> More patterns</li>
            <li><b style={{color: "green"}}>+</b> First-class functions</li>
          </ul>
        </Column>
      </ColumnLayout>
    </section>

    {/* Thanks! */}
    <section data-background={Backgrounds.WhiteWithFooter}>
      <h1>Thank you<Emphasis>!</Emphasis></h1>
      <ul style={{listStyleType: "none"}}>
        <li>
          <b>Slides</b>&nbsp;
          <a href={"https://presentations.dirkgroot.nl/fp-oop-bffs"} target={"_blank"}>
            https://presentations.dirkgroot.nl/fp-oop-bffs
          </a><br/>
          <img src={slides_qr} alt={"Presentation link QR code"} width="300px" height="300px"/>
        </li>
        <li>
          <b>Example code</b>&nbsp;
          <a href={"https://github.com/dirkgroot/fp-oop-bffs"} target={"_blank"}>
            https://github.com/dirkgroot/fp-oop-bffs
          </a><br/>
          <img src={code_qr} alt={"Code link QR code"} width="300px" height="300px"/>
        </li>
      </ul>
    </section>
  </Deck>
);
