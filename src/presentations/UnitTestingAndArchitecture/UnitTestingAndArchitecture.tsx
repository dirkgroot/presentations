import {PresentationProps} from "../PresentationProps.tsx";
import {AvisiLogoSlide} from "../../slides/AvisiLogoSlide.tsx";
import {Deck} from "../../components/Deck.tsx";
import {Backgrounds} from "../../components/Backgrounds.tsx";
import {Emphasis} from "../../components/Emphasis.tsx";
import styles from "../Presentation.module.scss";
import {AutoAnimate} from "../../components/AutoAnimate.tsx";
import {Column, ColumnLayout} from "../../components/ColumnLayout.tsx";
import QRCode from "react-qr-code";
import triangularArchitecture from "../DeepDiveDomainDrivenDesign/triangular-architecture.png";

export const UnitTestingAndArchitecture = ({scroll}: PresentationProps) => (
  <Deck title={"Unit testing & Architecture"} scroll={scroll}>
    <AvisiLogoSlide/>

    {/* AGENDA */}
    <section data-background={Backgrounds.WhiteWithFooter}>
      <h1 className={styles.title}>Unit testing & Architecture<Emphasis>.</Emphasis></h1>
      <h2 className={styles.subtitle}>Agenda<Emphasis>.</Emphasis></h2>
      <ul>
        <li>Test types</li>
        <li>Why do we test?</li>
        <li>Test desiderata</li>
        <li>Software architecture & testing</li>
      </ul>
    </section>

    <section>
      <AutoAnimate>
        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>Test types<Emphasis>.</Emphasis></h1>
        </section>

        <section data-background={Backgrounds.RightHalfGrayWithFooter}>
          <ColumnLayout>
            <Column centerVertically>
              <h1 className={styles.title}>Test types<Emphasis>.</Emphasis></h1>
            </Column>
            <Column centerVertically>
              <h3 className={styles.subtitle}>Relevant ones for this talk</h3>
              <p>
                <ul>
                  <li>Unit test</li>
                  <li>Integration test</li>
                  <li>End-to-end test</li>
                </ul>
              </p>
              <div className={"fragment"}>
                <hr/>
                <h3 className={styles.subtitle}>Questions</h3>
                <p>
                  <ul>
                    <li>What do we test in each of the test types?</li>
                    <li>How do we test in each of the test types?</li>
                  </ul>
                </p>
              </div>
            </Column>
          </ColumnLayout>
        </section>

        <section data-background={Backgrounds.RightHalfGrayWithFooter}>
          <ColumnLayout>
            <Column centerVertically>
              <h1 className={styles.title}>Test types<Emphasis>.</Emphasis></h1>
              <h2 className={styles.subtitle}>Practical definitions<Emphasis>.</Emphasis></h2>
            </Column>
            <Column centerVertically>
              <h3 className={styles.subtitle}>A test type is about <Emphasis>what</Emphasis> you test,
                not <s><Emphasis>how</Emphasis></s> you test!
              </h3>
              <p>Everything else is irrelevant:
                <ul>
                  <li>Test framework</li>
                  <li>Test tooling</li>
                  <li>Test environment</li>
                </ul>
              </p>
            </Column>
          </ColumnLayout>
        </section>

        <section data-background={Backgrounds.RightHalfGrayWithFooter}>
          <ColumnLayout>
            <Column centerVertically>
              <h1 className={styles.title}>Test types<Emphasis>.</Emphasis></h1>
              <h2 className={styles.subtitle}>Practical definitions<Emphasis>.</Emphasis></h2>
            </Column>
            <Column centerVertically>
              <h3 className={styles.subtitle}>What does a <Emphasis>unit test</Emphasis> test?</h3>
              <p>A (small) unit of <Emphasis>system behaviour</Emphasis>.</p>
            </Column>
          </ColumnLayout>
        </section>

        <section data-background={Backgrounds.RightHalfGrayWithFooter}>
          <ColumnLayout>
            <Column centerVertically>
              <h1 className={styles.title}>Test types<Emphasis>.</Emphasis></h1>
              <h2 className={styles.subtitle}>Practical definitions<Emphasis>.</Emphasis></h2>
            </Column>
            <Column centerVertically>
              <h3 className={styles.subtitle}>What does a <Emphasis>integration test</Emphasis> test?</h3>
              <p>Whether parts of the system <Emphasis>integrate</Emphasis> correctly.</p>
            </Column>
          </ColumnLayout>
        </section>

        <section data-background={Backgrounds.RightHalfGrayWithFooter}>
          <ColumnLayout>
            <Column centerVertically>
              <h1 className={styles.title}>Test types<Emphasis>.</Emphasis></h1>
              <h2 className={styles.subtitle}>Practical definitions<Emphasis>.</Emphasis></h2>
            </Column>
            <Column centerVertically>
              <h3 className={styles.subtitle}>What does an <Emphasis>end-to-end test</Emphasis> test?</h3>
              <p>An <Emphasis>end-to-end</Emphasis> scenario from the end user's perspective.</p>
            </Column>
          </ColumnLayout>
        </section>
      </AutoAnimate>
    </section>

    {/* WHY DO WE TEST? */}
    <section>
      <AutoAnimate>
        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1>Why do we test<Emphasis>?</Emphasis></h1>
          <h2 className={`${styles.subtitle} fragment`}>Two goals</h2>
          <ol>
            <li className={"fragment"}>Deploy to production with confidence</li>
            <li className={"fragment"}>
              Make changes without introducing defects
              <ul>
                <li>Introduce new features</li>
                <li>Change existing features</li>
                <li>Improve the design</li>
              </ul>
            </li>
          </ol>
        </section>
      </AutoAnimate>
    </section>

    {/* TEST DESIDERATA */}
    <section>
      <AutoAnimate>
        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>Test desiderata<Emphasis>.</Emphasis></h1>
          <h2 className={styles.subtitle}>12 properties of tests that help achieve our goals<Emphasis>.</Emphasis></h2>
        </section>

        {
          [
            ["Isolated", "Tests should return the same results regardless of the order in which they are run."],
            ["Composable", "If tests are isolated, then I can run 1 or 10 or 100 or 1,000,000 and get the same results."],
            ["Fast", "Tests should run quickly."],
            ["Inspiring", "Passing the tests should inspire confidence."],
            ["Writable", "Tests should be cheap to write relative to the cost of the code being tested."],
            ["Readable", "Tests should be comprehensible for reader, invoking the motivation for writing this particular test."],
            ["Behavioral", "Tests should be sensitive to changes in the behavior of the code under test. If the behavior changes, the test result should change."],
            ["Structure-insensitive", "Tests should not change their result if the structure of the code changes."],
            ["Automated", "Tests should run without human intervention."],
            ["Specific", "If a test fails, the cause of the failure should be obvious."],
            ["Deterministic", "If nothing changes, the test result shouldn't change."],
            ["Predictive", "If the tests all pass, then the code under test should be suitable for production."],
          ].map(([title, description]) =>
            <section data-background={Backgrounds.RightHalfGrayWithFooter}>
              <ColumnLayout>
                <Column centerVertically>
                  <h1>Test desiderata<Emphasis>.</Emphasis></h1>
                  <h2 className={styles.subtitle}>12 properties of tests that help achieve our
                    goals<Emphasis>.</Emphasis></h2>
                </Column>
                <Column centerVertically>
                  <h3 className={styles.subtitle}>{title}</h3>
                  <p>{description}</p>
                  <small><Emphasis>&mdash;</Emphasis> Beck, K. (2019). <em>Test Desiderata</em>.</small>
                </Column>
              </ColumnLayout>
            </section>
          )
        }
      </AutoAnimate>
    </section>

    <section>
      <AutoAnimate>
        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>Software architecture & testing<Emphasis>.</Emphasis></h1>
          <h2 className={styles.subtitle}>Recap: Triangular Architecture<Emphasis>.</Emphasis></h2>
          <img className={"fragment"} src={triangularArchitecture} alt={"Triangular Architecture Diagram"}/>
          <ul>
            <li className={"fragment"}><Emphasis>Application</Emphasis> implements use cases and coördinates actions
              between <Emphasis>Domain</Emphasis> and <Emphasis>Infrastructure</Emphasis></li>
            <li className={"fragment"}><Emphasis>Domain</Emphasis> implements the domain model</li>
            <li className={"fragment"}><Emphasis>Infrastructure</Emphasis> implements repositories defined
              in <Emphasis>Domain</Emphasis> and other infrastructure concerns
            </li>
          </ul>
        </section>

        <section data-background={Backgrounds.RightHalfGrayWithFooter}>
          <ColumnLayout>
            <Column centerVertically>
              <h1>Triangular Architecture<Emphasis>.</Emphasis></h1>
              <h2 className={styles.subtitle}>How to test each layer<Emphasis>?</Emphasis></h2>
            </Column>
            <Column centerVertically>
              <h3 className={styles.subtitle}>What type of tests for each layer<Emphasis>?</Emphasis></h3>
              <p><img src={triangularArchitecture} alt={"Triangular Architecture Diagram"}/></p>
              <ul>
                <li><Emphasis>Domain</Emphasis>: <span className={"fragment"}>Unit tests</span></li>
                <li><Emphasis>Infrastructure</Emphasis>: <span className={"fragment"}>Integration tests</span></li>
                <li><Emphasis>Application</Emphasis>: <span
                  className={"fragment"}>Unit tests and end-to-end tests</span></li>
              </ul>
            </Column>
          </ColumnLayout>
        </section>

        <section data-background={Backgrounds.RightHalfGrayWithFooter}>
          <ColumnLayout>
            <Column centerVertically>
              <h1>Triangular Architecture<Emphasis>.</Emphasis></h1>
              <h2 className={styles.subtitle}>How to test each layer<Emphasis>?</Emphasis></h2>
            </Column>
            <Column centerVertically>
              <h3 className={styles.subtitle}>Unit tests for <Emphasis>Domain</Emphasis></h3>
              <ul>
                <li className={"fragment"}>What should we test?</li>
                <li className={"fragment"}>What trade-off between test desiderata should we make?</li>
              </ul>
            </Column>
          </ColumnLayout>
        </section>

        <section data-background={Backgrounds.RightHalfGrayWithFooter}>
          <ColumnLayout>
            <Column centerVertically>
              <h1>Triangular Architecture<Emphasis>.</Emphasis></h1>
              <h2 className={styles.subtitle}>How to test each layer<Emphasis>?</Emphasis></h2>
            </Column>
            <Column centerVertically>
              <h3 className={styles.subtitle}>Integration tests for <Emphasis>Infrastructure</Emphasis></h3>
              <ul>
                <li className={"fragment"}>What should we test?</li>
                <li className={"fragment"}>What trade-off between test desiderata should we make?</li>
              </ul>
            </Column>
          </ColumnLayout>
        </section>

        <section data-background={Backgrounds.RightHalfGrayWithFooter}>
          <ColumnLayout>
            <Column centerVertically>
              <h1>Triangular Architecture<Emphasis>.</Emphasis></h1>
              <h2 className={styles.subtitle}>How to test each layer<Emphasis>?</Emphasis></h2>
            </Column>
            <Column centerVertically>
              <h3 className={styles.subtitle}>Unit tests for <Emphasis>Application</Emphasis></h3>
              <ul>
                <li className={"fragment"}>What should we test?</li>
                <li className={"fragment"}>What trade-off between test desiderata should we make?</li>
              </ul>
            </Column>
          </ColumnLayout>
        </section>
      </AutoAnimate>
    </section>

    <section data-background={Backgrounds.WhiteWithFooter}>
      <h1 className={styles.title}>Further reading<Emphasis>.</Emphasis></h1>
      <ul style={{listStyleType: "none"}}>
        <li>
          <a href={"https://medium.com/@kentbeck_7670/test-desiderata-94150638a4b3"} target={"_blank"}>
            <b>Test desiderata</b>
          </a> (article by Kent Beck)
        </li>
      </ul>
    </section>

    <section data-background={Backgrounds.WhiteWithFooter}>
      <h1 className={styles.title}>Thank you!</h1>
      <h2 className={styles.subtitle}>Links</h2>
      <ul style={{listStyleType: "none"}}>
        <li>
          <b>Slides</b>&nbsp;
          <a href={"https://presentations.dirkgroot.nl/unit-testing-and-architecture"} target={"_blank"}>
            https://presentations.dirkgroot.nl/unit-testing-and-architecture
          </a><br/><br/>
          <QRCode value={"https://presentations.dirkgroot.nl/unit-testing-and-architecture"} size={250}></QRCode>
        </li>
      </ul>
    </section>
  </Deck>
);
