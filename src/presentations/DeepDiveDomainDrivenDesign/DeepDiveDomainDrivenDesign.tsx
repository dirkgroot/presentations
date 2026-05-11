import {PresentationProps} from "../PresentationProps.tsx";
import {Deck} from "../../components/Deck.tsx";
import {AvisiLogoSlide} from "../../slides/AvisiLogoSlide.tsx";
import {WhoAmISlide} from "../../slides/WhoAmISlide.tsx";
import {Backgrounds} from "../../components/Backgrounds.tsx";
import styles from "../Presentation.module.scss";
import {Emphasis} from "../../components/Emphasis.tsx";
import {AutoAnimate} from "../../components/AutoAnimate.tsx";
import {MermaidDiagram} from "@lightenna/react-mermaid-diagram";
import implementingDDDCover from "./implementing-ddd.png";
import dddEvansCover from "./ddd-evans.png";
import triangularArchitecture from "./triangular-architecture.png";
import ddd from "./ddd.png";
import ddd_es from "./ddd-es.png";
import ddd_es_cqrs from "./ddd-es-cqrs.png";
import {Column, ColumnLayout} from "../../components/ColumnLayout.tsx";
import QRCode from "react-qr-code";

interface DeepDiveDomainDrivenDesignProps extends PresentationProps {
  shortVersion: boolean
}

export const DeepDiveDomainDrivenDesign = ({scroll, shortVersion}: DeepDiveDomainDrivenDesignProps) => (
  <Deck title={"Deep Dive Domain-Driven Design"} scroll={scroll}>
    {/* Avisi logo(s) */}
    <AvisiLogoSlide/>

    {/* TITLE */}
    <section>
      <AutoAnimate>
        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>
            <Emphasis>D</Emphasis>eep <Emphasis>D</Emphasis>ive<br/>
            <Emphasis>D</Emphasis>omain <Emphasis>D</Emphasis>riven <Emphasis>D</Emphasis>esign
          </h1>
        </section>
      </AutoAnimate>
    </section>

    {/* Who am I? */}
    <WhoAmISlide/>

    {/* AGENDA */}
    <section data-background={Backgrounds.WhiteWithFooter}>
      <h1 className={styles.title}>Agenda<Emphasis>.</Emphasis></h1>
      <ul>
        <li>Defining DDD</li>
        <li>Diving Deeper (Demo)</li>
        {
          !shortVersion && <li>Departing the Depths<Emphasis>*</Emphasis><br/><small
            className={"fragment"}><Emphasis>*</Emphasis> Software Architecture</small></li>
        }
      </ul>
    </section>

    {/* INTRO: DDD:Definition */}
    <section>
      <AutoAnimate>
        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>Defining DDD</h1>
        </section>

        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>Defining DDD</h1>
          <h2 className={styles.subtitle}>What is DDD<Emphasis>?</Emphasis></h2>
          <span className={"fragment"}>
            Domain-Driven Design is a <Emphasis>software design approach</Emphasis><br/>that focuses on <Emphasis>understanding
            the core business domain</Emphasis><br/>and <Emphasis>modeling it in code</Emphasis>.
          </span>
        </section>

        {/* PART 1: Core concepts */}
        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>Defining DDD</h1>
          <h2 className={styles.subtitle}>Core concepts<Emphasis>.</Emphasis></h2>
          <ul>
            <li className={"fragment"}>Ubiquitous Language</li>
            <li className={"fragment"}>Bounded Context</li>
            <li className={"fragment"}>Tactical Design Patterns</li>
          </ul>
        </section>

        {/* PART 1a: The ubiquitous language */}
        <section data-background={Backgrounds.RightHalfGrayWithFooter}>
          <ColumnLayout>
            <Column centerVertically>
              <h1>Defining DDD</h1>
              <h2 className={styles.subtitle}>Core concepts<Emphasis>.</Emphasis></h2>
            </Column>
            <Column>
              <p>🔥 The most important concept of DDD 🔥</p>
              <h3 className={styles.subtitle}>Ubiquitous Language<Emphasis>.</Emphasis></h3>
              <p>
                Use <Emphasis>one term</Emphasis> for every domain concept and use these
                terms <Emphasis>everywhere</Emphasis>.
              </p>
              <ul>
                <li className={"fragment"}>While talking to...
                  <ul>
                    <li>end users</li>
                    <li>product owners</li>
                    <li>business analysts</li>
                    <li>software engineers</li>
                    <li>etc</li>
                  </ul>
                </li>
                <li className={"fragment"}>In documentation</li>
                <li className={"fragment"}>In product backlog items</li>
                <li className={"fragment"}>In pull request descriptions</li>
                <li className={"fragment"}>In code</li>
              </ul>
            </Column>
          </ColumnLayout>
        </section>

        {/* PART 1b: Bounded Context */}
        <section data-background={Backgrounds.RightHalfGrayWithFooter}>
          <ColumnLayout>
            <Column centerVertically>
              <h1>Defining DDD</h1>
              <h2 className={styles.subtitle}>Core concepts<Emphasis>.</Emphasis></h2>
            </Column>
            <Column>
              <h3 className={styles.subtitle}>Bounded Context<Emphasis>.</Emphasis></h3>
              <p>
                A Bounded Context is an <Emphasis>explicit boundary</Emphasis> within which a domain model exists.
                Inside the boundary all terms and phrases of the Ubiquitous Language have <Emphasis>specific
                meaning</Emphasis>, and the model reflects the Language <Emphasis>with exactness</Emphasis>.
              </p>
              <small><Emphasis>&mdash;</Emphasis> Vernon, V. (2013). <em>Implementing Domain-Driven Design.</em></small>
            </Column>
          </ColumnLayout>
        </section>
      </AutoAnimate>
    </section>

    {/* PART 2: Tactical */}
    <section>
      <AutoAnimate>
        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>DDD<Emphasis>/</Emphasis>Diving Deeper</h1>
        </section>

        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>DDD<Emphasis>/</Emphasis>Diving Deeper</h1>
          <h2 className={styles.subtitle}>Tactical design patterns<Emphasis>.</Emphasis></h2>
          <p>
            <ul>
              <li className={"fragment"}>Value Object</li>
              <li className={"fragment"}>Entity</li>
              <li className={"fragment"}>Aggregate</li>
              <li className={"fragment"}>Repository</li>
              <li className={"fragment"}>Domain Service</li>
              <li className={"fragment"}>Application Service</li>
            </ul>
          </p>
          <h3 className={`fragment ${styles.subtitle}`}>⚙️ Demo application<Emphasis>.</Emphasis></h3>
        </section>

        <section data-background={Backgrounds.RightHalfGrayWithFooter}>
          <ColumnLayout>
            <Column centerVertically>
              <h1>DDD<Emphasis>/</Emphasis>Diving Deeper</h1>
              <h2 className={styles.subtitle}>Tactical design patterns<Emphasis>.</Emphasis></h2>
            </Column>
            <Column>
              <h3 className={styles.subtitle}>Value Object<Emphasis>.</Emphasis></h3>
              <p>
                <ul>
                  <li className={"fragment"}>Models a concept from the Ubiquitous Language</li>
                  <li className={"fragment"}>Immutable</li>
                  <li className={"fragment"}>Free of side effects</li>
                  <li className={"fragment"}>Comparable by <Emphasis>value</Emphasis></li>
                </ul>
              </p>
              <h3 className={`fragment ${styles.subtitle}`}>⚙️ Demo<Emphasis>.</Emphasis></h3>
            </Column>
          </ColumnLayout>
        </section>

        <section data-background={Backgrounds.RightHalfGrayWithFooter}>
          <ColumnLayout>
            <Column centerVertically>
              <h1>DDD<Emphasis>/</Emphasis>Diving Deeper</h1>
              <h2 className={styles.subtitle}>Tactical design patterns<Emphasis>.</Emphasis></h2>
            </Column>
            <Column>
              <h3 className={styles.subtitle}>Entity<Emphasis>.</Emphasis></h3>
              <p>
                <ul>
                  <li className={"fragment"}>Models a concept from the Ubiquitous Language</li>
                  <li className={"fragment"}>
                    Has a <Emphasis>unique identity</Emphasis>
                    <ul>
                      <li>Usually modeled as a <Emphasis>Value Object</Emphasis></li>
                      <li>Should remain <Emphasis>stable</Emphasis> throughout the lifetime of the Entity</li>
                    </ul>
                  </li>
                  <li className={"fragment"}>Contains <Emphasis>mutable state</Emphasis> (so it can change over time)
                  </li>
                  <li className={"fragment"}>Comparable by <Emphasis>identity</Emphasis></li>
                </ul>
              </p>
              <h3 className={`fragment ${styles.subtitle}`}>⚙️ Demo<Emphasis>.</Emphasis></h3>
            </Column>
          </ColumnLayout>
        </section>

        <section data-background={Backgrounds.RightHalfGrayWithFooter}>
          <ColumnLayout>
            <Column centerVertically>
              <h1>DDD<Emphasis>/</Emphasis>Diving Deeper</h1>
              <h2 className={styles.subtitle}>Tactical design patterns<Emphasis>.</Emphasis></h2>
            </Column>
            <Column>
              <h3 className={styles.subtitle}>Aggregate<Emphasis>.</Emphasis></h3>
              <MermaidDiagram id={"domainmodel"} data-id={"domainmodel-diagram"}>
                {
                  // language=Mermaid
                  `%%{init: {
                'themeVariables': {'fontFamily': 'Poppins','fontSize': '26px'},
                'flowchart': {'nodeSpacing': 90,'rankSpacing': 90},
                'class': {'hideEmptyMembersBox': true}
              }}%%
                  classDiagram
                    direction TD
                    namespace UserManagement {
                      class Username {
                        <<value_object>>
                      }

                      class User {
                        <<aggregate_root>>
                      }
                    }

                    namespace Content {
                      class RichText {
                        <<value_object>>
                      }

                      class Post {
                        <<entity>>
                      }

                      class PostID {
                        <<value_object>>
                      }

                      class Contribution {
                        <<aggregate_root>>
                      }

                      class ContributionID {
                        <<value_object>>
                      }
                    }

                    User *--> Username: identified by
                    Contribution *--> ContributionID: identified by
                    Contribution *--> Post: opening post
                    Contribution *--> Post: replies
                    Post *--> PostID: identified by
                    Post *--> RichText
                    Post *--> Username: author
                    Post *--> Username: liked by
                    style User fill: lightblue
                    style Contribution fill: lightyellow
                    style ContributionID fill: lightyellow
                    style Post fill: lightyellow
                    style PostID fill: lightyellow
                    style RichText fill: lightyellow
                    style Username fill: lightgreen
                  `}
              </MermaidDiagram>
            </Column>
          </ColumnLayout>
        </section>

        <section data-background={Backgrounds.RightHalfGrayWithFooter}>
          <ColumnLayout>
            <Column centerVertically>
              <h1>DDD<Emphasis>/</Emphasis>Diving Deeper</h1>
              <h2 className={styles.subtitle}>Tactical design patterns<Emphasis>.</Emphasis></h2>
            </Column>
            <Column>
              <h3 className={styles.subtitle}>Aggregate<Emphasis>.</Emphasis></h3>
              <p>
                <ul>
                  <li className={"fragment"}>Models a concept from the Ubiquitous Language</li>
                  <li className={"fragment"}>
                    Clusters one or more <Emphasis>Entities</Emphasis> and/or <Emphasis>Value Objects</Emphasis>
                  </li>
                  <li className={"fragment"}>
                    Represents a <Emphasis>Consistency Boundary</Emphasis>
                    <ul>
                      <li>All state within an Aggregate <Emphasis>must</Emphasis> be consistent at all times</li>
                      <li>We're referring to <Emphasis>transactional consistency</Emphasis>, not <em>eventual
                        consistency</em>
                      </li>
                    </ul>
                  </li>
                  <li className={"fragment"}>
                    The <Emphasis>Aggregate Root</Emphasis> maintains consistency
                    <ul>
                      <li>This is an <Emphasis>Entity</Emphasis></li>
                      <li>All changes to the aggregate are made through the Aggregate Root</li>
                    </ul>
                  </li>
                </ul>
              </p>
              <h3 className={`fragment ${styles.subtitle}`}>⚙️ Demo<Emphasis>.</Emphasis></h3>
            </Column>
          </ColumnLayout>
        </section>

        <section data-background={Backgrounds.RightHalfGrayWithFooter}>
          <ColumnLayout>
            <Column centerVertically>
              <h1>DDD<Emphasis>/</Emphasis>Diving Deeper</h1>
              <h2 className={styles.subtitle}>Tactical design patterns<Emphasis>.</Emphasis></h2>
            </Column>
            <Column>
              <h3 className={styles.subtitle}>Repository<Emphasis>.</Emphasis></h3>
              <p>
                <ul>
                  <li className={"fragment"}>Models CRUD operations on Aggregates</li>
                  <li className={"fragment"}>
                    Uses terms from the Ubiquitous Language
                    <ul>
                      <li>For method and parameter names</li>
                      <li>
                        Parameter types and return types are <Emphasis>Aggregates</Emphasis> or <Emphasis>Value
                        Objects</Emphasis>
                      </li>
                    </ul>
                  </li>
                  <li className={"fragment"}>
                    Only the Repository's <Emphasis>interface</Emphasis> is part of the Domain Model,<br/>not the
                    implementation
                  </li>
                </ul>
              </p>
              <h3 className={`fragment ${styles.subtitle}`}>⚙️ Demo<Emphasis>.</Emphasis></h3>
            </Column>
          </ColumnLayout>
        </section>

        <section data-background={Backgrounds.RightHalfGrayWithFooter}>
          <ColumnLayout>
            <Column centerVertically>
              <h1>DDD<Emphasis>/</Emphasis>Diving Deeper</h1>
              <h2 className={styles.subtitle}>Tactical design patterns<Emphasis>.</Emphasis></h2>
            </Column>
            <Column>
              <h2 className={styles.subtitle}>Domain Service<Emphasis>.</Emphasis></h2>
              <p>
                <ul>
                  <li className={"fragment"}>
                    Models <Emphasis>business logic</Emphasis> that doesn't fit into one aggregate
                  </li>
                  <li className={"fragment"}>Is <Emphasis>stateless</Emphasis></li>
                  <li className={"fragment"}>
                    Uses terms from the Ubiquitous Language
                    <ul>
                      <li>For method and parameter names</li>
                      <li>
                        Parameter types and return types are <Emphasis>Aggregates</Emphasis> or <Emphasis>Value
                        Objects</Emphasis>
                      </li>
                    </ul>
                  </li>
                </ul>
              </p>
            </Column>
          </ColumnLayout>
        </section>

        <section data-background={Backgrounds.RightHalfGrayWithFooter}>
          <ColumnLayout>
            <Column centerVertically>
              <h1>DDD<Emphasis>/</Emphasis>Diving Deeper</h1>
              <h2 className={styles.subtitle}>Tactical design patterns<Emphasis>.</Emphasis></h2>
            </Column>
            <Column>
              <h3 className={styles.subtitle}>Domain Service<Emphasis>.</Emphasis></h3>
              <p>
                Under what conditions would an operation not belong on an existing Entity (5) or Value Object? It is
                difficult to give an exhaustive list of reasons, but I’ve listed a few here.<br/><br/>You can use a
                Domain Service to
                <ul>
                  <li>Perform a significant business process</li>
                  <li>Transform a domain object from one composition to another</li>
                  <li>Calculate a Value requiring input from more than one domain object</li>
                </ul>
              </p>
              <small><Emphasis>&mdash;</Emphasis> Vernon, V. (2013). <em>Implementing Domain-Driven Design.</em></small>
              <h3 className={`fragment ${styles.subtitle}`}>⚙️ Demo<Emphasis>.</Emphasis></h3>
            </Column>
          </ColumnLayout>
        </section>

        <section data-background={Backgrounds.RightHalfGrayWithFooter}>
          <ColumnLayout>
            <Column centerVertically>
              <h1>DDD<Emphasis>/</Emphasis>Diving Deeper</h1>
              <h2 className={styles.subtitle}>Tactical design patterns<Emphasis>.</Emphasis></h2>
            </Column>
            <Column>
              <h3 className={styles.subtitle}>Domain Service<Emphasis>.</Emphasis></h3>
              <p>
                <em>More examples:</em><br/>
                <ul>
                  <li>Compute user reputation</li>
                  <li>Create a timeline</li>
                  <li>Contribution moderation</li>
                </ul>
              </p>
            </Column>
          </ColumnLayout>
        </section>

        <section data-background={Backgrounds.RightHalfGrayWithFooter}>
          <ColumnLayout>
            <Column centerVertically>
              <h1>DDD<Emphasis>/</Emphasis>Diving Deeper</h1>
              <h2 className={styles.subtitle}>Tactical design patterns<Emphasis>.</Emphasis></h2>
            </Column>
            <Column>
              <h3 className={styles.subtitle}>Application Service<Emphasis>.</Emphasis></h3>
              <p>
                <ul>
                  <li className={"fragment"}>The <Emphasis>direct clients</Emphasis> of the domain model</li>
                  <li className={"fragment"}>Implement <Emphasis>use case flows</Emphasis></li>
                  <li className={"fragment"}>Control <Emphasis>database transactions</Emphasis></li>
                  <li className={"fragment"}>Control <Emphasis>security</Emphasis></li>
                </ul>
              </p>
              <h3 className={`fragment ${styles.subtitle}`}>⚙️ Demo<Emphasis>.</Emphasis></h3>
            </Column>
          </ColumnLayout>
        </section>

        <section data-background={Backgrounds.RightHalfGrayWithFooter}>
          <ColumnLayout>
            <Column centerVertically>
              <h1>DDD<Emphasis>/</Emphasis>Diving Deeper</h1>
              <h2 className={styles.subtitle}>Tactical design patterns<Emphasis>.</Emphasis></h2>
            </Column>
            <Column>
              <h3 className={styles.subtitle}>Domain Service ↔️ Application Service<Emphasis>?</Emphasis></h3>
              <div className={"fragment"}>
                <p><b>Rule of thumb<Emphasis>:</Emphasis></b> The domain model should be <em>high-level</em>. It should
                  be <Emphasis>highly reusable</Emphasis> for various applications, with different</p>
                <ul>
                  <li>Use cases</li>
                  <li>Security requirements</li>
                  <li>Storage/transactionality requirements</li>
                </ul>
              </div>
            </Column>
          </ColumnLayout>
        </section>
      </AutoAnimate>
    </section>

    {/* PART 3: Software Architecture */}
    <section data-visibility={shortVersion ? "hidden" : "visible"}>
      <AutoAnimate>
        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>DDD<Emphasis>/</Emphasis>Departing the Depths</h1>
          <h2 className={styles.subtitle}>Or<Emphasis>:</Emphasis> Software Architecture<Emphasis>.</Emphasis></h2>
        </section>

        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>DDD<Emphasis>/</Emphasis>Departing the Depths</h1>
          <h2 className={styles.subtitle}>What application architecture should I use<Emphasis>?</Emphasis></h2>
          <ul>
            <li className={"fragment"}>N-Tier</li>
            <li className={"fragment"}>Clean Architecture</li>
            <li className={"fragment"}>Hexagonal Architecture</li>
          </ul>
          <div className={"fragment"}>
            <p>
              <b>Opinionated answer<Emphasis>:</Emphasis></b> It doesn't really matter, as long as <b>business
              logic</b>, <b>application logic</b> and <b>data access</b> are <Emphasis>clearly separated</Emphasis>.
            </p>
            <small>Vaughn Vernon recommends using Hexagonal Architecture in his book Implementing Domain-Driven
              Design.</small>
          </div>
        </section>

        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>DDD<Emphasis>/</Emphasis>Departing the Depths</h1>
          <h2 className={styles.subtitle}>Triangular Architecture<Emphasis>.</Emphasis></h2>
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

        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>DDD<Emphasis>/</Emphasis>Departing the Depths</h1>
          <h2 className={styles.subtitle}>Zooming out even further<Emphasis>.</Emphasis></h2>
        </section>

        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>DDD<Emphasis>/</Emphasis>Departing the Depths</h1>
          <h2 className={styles.subtitle}>Just DDD<Emphasis>.</Emphasis></h2>
          <img src={ddd} alt={"Just DDD"}/>
        </section>

        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>DDD<Emphasis>/</Emphasis>Departing the Depths</h1>
          <h2 className={styles.subtitle}>DDD + Event Sourcing<Emphasis>.</Emphasis></h2>
          <img src={ddd_es} alt={"DDD + Event Sourcing"}/>
        </section>

        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>DDD<Emphasis>/</Emphasis>Departing the Depths</h1>
          <h2 className={styles.subtitle}>DDD + Event Sourcing + CQRS<Emphasis>.</Emphasis></h2>
          <img src={ddd_es_cqrs} alt={"DDD, ES, CQRS"}/>
        </section>

        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>DDD<Emphasis>/</Emphasis>Departing the Depths</h1>
          <h2 className={styles.subtitle}>But... Why<Emphasis>?</Emphasis> 🤨</h2>
          <p className={"fragment"}>
            <b>Opinionated answer<Emphasis>:</Emphasis></b> Only if you need <Emphasis>massive</Emphasis> horizontal
            scalability.
          </p>
        </section>
      </AutoAnimate>
    </section>

    <section data-background={Backgrounds.WhiteWithFooter}>
      <h1 className={styles.title}>Summary<Emphasis>.</Emphasis></h1>
      <h2 className={styles.subtitle}>It's all about communication<Emphasis>.</Emphasis></h2>
      <p className={"fragment"}>
        Strategic DDD is about <Emphasis>naming things</Emphasis> and using the same
        names <Emphasis>everywhere</Emphasis>,<br/> while avoiding <Emphasis>ambiguity</Emphasis>.
      </p>
      <p className={"fragment"}>
        Tactical DDD provides <Emphasis>well-defined abstractions</Emphasis> (the tactical patterns)
        <br/>to represent those things in code in
        a <Emphasis>clean</Emphasis> and <Emphasis>consistent</Emphasis> manner.
      </p>
    </section>

    <section data-background={Backgrounds.WhiteWithFooter}>
      <h1 className={styles.title}>Exercises<Emphasis>.</Emphasis></h1>
      <ul>
        <li>Split the <Emphasis><code>Contribution</code></Emphasis> aggregate into two
          aggregates: <Emphasis><code>Contribution</code></Emphasis> and <Emphasis><code>Post</code></Emphasis></li>
        <li>New feature<Emphasis>:</Emphasis> Reply to replies</li>
        {!shortVersion && <>
          <li>Introduce <Emphasis>Event Sourcing</Emphasis></li>
          <li>
            Introduce <Emphasis>CQRS</Emphasis>
            <ul>
              <li>Keep track of user reputation in an optimized projection database</li>
            </ul>
          </li>
        </>}
      </ul>
    </section>

    <section data-background={Backgrounds.WhiteWithFooter}>
      <h1 className={styles.title}>Further reading<Emphasis>.</Emphasis></h1>
      <ColumnLayout>
        <Column>
          <p>
            <a href={"https://www.goodreads.com/book/show/15756865-implementing-domain-driven-design"}>
              Implementing Domain-Driven Design
            </a>
            <br/>&mdash; Vaughn Vernon<br/><br/>
          </p>
          <p>
            <a href={"https://www.goodreads.com/book/show/15756865-implementing-domain-driven-design"}>
              <img src={implementingDDDCover} width={350} alt={"Implementing DDD Cover"}/>
            </a>
          </p>
          <QRCode value={"https://www.goodreads.com/book/show/15756865-implementing-domain-driven-design"}/>
        </Column>
        <Column>
          <p>
            <a href={"https://www.goodreads.com/book/show/179133.Domain_Driven_Design"}>
              Domain-Driven Design: Tackling Complexity in the Heart of Software
            </a>
            <br/>&mdash; Eric Evans
          </p>
          <p>
            <a href={"https://www.goodreads.com/book/show/179133.Domain_Driven_Design"}>
              <img src={dddEvansCover} width={350} alt={"DDD Cover"}/>
            </a>
          </p>
          <QRCode value={"https://www.goodreads.com/book/show/179133.Domain_Driven_Design"}/>
        </Column>
      </ColumnLayout>
    </section>

    <section data-background={Backgrounds.WhiteWithFooter}>
      <h1 className={styles.title}>Thank you!</h1>
      <h2 className={styles.subtitle}>Links</h2>
      <ul style={{listStyleType: "none"}}>
        {
          shortVersion
            ? <li>
              <b>Slides</b>&nbsp;
              <a href={"https://presentations.dirkgroot.nl/deep-dive-ddd/short"} target={"_blank"}>
                https://presentations.dirkgroot.nl/deep-dive-ddd/short
              </a><br/><br/>
              <QRCode value={"https://presentations.dirkgroot.nl/deep-dive-ddd/short"} size={300}></QRCode>
            </li>
            : <li>
              <b>Slides</b>&nbsp;
              <a href={"https://presentations.dirkgroot.nl/deep-dive-ddd"} target={"_blank"}>
                https://presentations.dirkgroot.nl/deep-dive-ddd
              </a><br/><br/>
              <QRCode value={"https://presentations.dirkgroot.nl/deep-dive-ddd"} size={300}></QRCode>
            </li>
        }
        <li>
          <b>Example code</b>&nbsp;
          <a href={"https://github.com/dirkgroot/deep-dive-ddd"} target={"_blank"}>
            https://github.com/dirkgroot/deep-dive-ddd
          </a><br/><br/>
          <QRCode value={"https://github.com/dirkgroot/deep-dive-ddd"} size={300}></QRCode>
        </li>
      </ul>
    </section>
  </Deck>
);
