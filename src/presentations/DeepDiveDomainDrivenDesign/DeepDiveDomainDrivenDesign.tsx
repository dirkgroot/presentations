import {PresentationProps} from "../PresentationProps.tsx";
import {Deck} from "../../components/Deck.tsx";
import {Avisi25JaarSlide} from "../../slides/Avisi25JaarSlide.tsx";
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
import presentatlion_link_qr from "./presentation_link_qr.png";
import gitlab_link_qr from "./gitlab_link_qr.png";
import {Column, ColumnLayout} from "../../components/ColumnLayout.tsx";

export const DeepDiveDomainDrivenDesign = ({scroll}: PresentationProps) => (
  <Deck title={"Deep Dive Domain-Driven Design"} scroll={scroll}>
    {/* Avisi logo(s) */}
    <Avisi25JaarSlide/>

    {/* TITLE */}
    <section>
      <AutoAnimate>
        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>
            <Emphasis>D</Emphasis>eep <Emphasis>D</Emphasis>ive<br/>
            <Emphasis>D</Emphasis>omain <Emphasis>D</Emphasis>riven <Emphasis>D</Emphasis>esign
          </h1>
          <h2 className={`${styles.subtitle} fragment`}>(DD<Emphasis>:</Emphasis>DDD)</h2>
        </section>
        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>
            <Emphasis>D</Emphasis>eep <Emphasis>D</Emphasis>ive<br/>
            <Emphasis>D</Emphasis>omain <Emphasis>D</Emphasis>riven <Emphasis>D</Emphasis>esign
          </h1>
          <h2 className={styles.subtitle}>(DD😃DD)</h2>
        </section>
      </AutoAnimate>
    </section>

    {/* Who am I? */}
    <WhoAmISlide/>

    {/* AGENDA */}
    <section data-background={Backgrounds.WhiteWithFooter}>
      <h1 className={styles.title}>Agenda<Emphasis>.</Emphasis></h1>
      <ul>
        <li>Definition</li>
        <li>Diving Deeper (Demo)</li>
        <li>Departing the Depths<Emphasis>*</Emphasis><br/><small className={"fragment"}><Emphasis>*</Emphasis> Software
          Architecture</small></li>
      </ul>
      <p>

      </p>
    </section>

    {/* INTRO: DDD:Definition */}
    <section>
      <AutoAnimate>
        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>DDD<Emphasis>/</Emphasis>Definition</h1>
        </section>

        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>DDD<Emphasis>/</Emphasis>Definition</h1>
          <h2 className={styles.subtitle}>What is DDD<Emphasis>?</Emphasis></h2>
          <span className={"fragment"}>
            Domain-Driven Design is a <Emphasis>software design approach</Emphasis><br/>that focuses on <Emphasis>understanding
            the core business domain</Emphasis><br/>and <Emphasis>modeling it in code</Emphasis>.
          </span>
        </section>

        {/* PART 1: Strategic DDD */}
        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>DDD<Emphasis>/</Emphasis>Definition</h1>
          <h2 className={styles.subtitle}>Strategic DDD<Emphasis>.</Emphasis></h2>
          <ul>
            <li className={"fragment"}>Ubiquitous Language</li>
            <li className={"fragment"}>Bounded Context</li>
          </ul>
        </section>

        {/* PART 1a: The ubiquitous language */}
        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>DDD<Emphasis>/</Emphasis>Definition</h1>
          <h2 className={styles.subtitle}>Ubiquitous Language<Emphasis>.</Emphasis></h2>
          <p>🔥 The most important concept of DDD 🔥</p>
        </section>
        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>DDD<Emphasis>/</Emphasis>Definition</h1>
          <h2 className={styles.subtitle}>Ubiquitous Language<Emphasis>.</Emphasis></h2>
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
        </section>

        {/* PART 1b: Bounded Context */}
        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>DDD<Emphasis>/</Emphasis>Definition</h1>
          <h2 className={styles.subtitle}>Bounded Context<Emphasis>.</Emphasis></h2>
          <p>
            A Bounded Context is an <Emphasis>explicit boundary</Emphasis> within which a domain model exists. Inside
            the boundary all terms and phrases of the Ubiquitous Language have <Emphasis>specific meaning</Emphasis>,
            and the model reflects the Language <Emphasis>with exactness</Emphasis>.
          </p>
          <small><Emphasis>&mdash;</Emphasis> Vernon, V. (2013). <em>Implementing Domain-Driven Design.</em></small>
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
          <h2 className={styles.subtitle}>Tactical patterns<Emphasis>.</Emphasis></h2>
          <ul>
            <li className={"fragment"}>Value Object</li>
            <li className={"fragment"}>Entity</li>
            <li className={"fragment"}>Aggregate</li>
            <li className={"fragment"}>Repository</li>
            <li className={"fragment"}>Domain Service</li>
            <li className={"fragment"}>Application Service</li>
          </ul>
        </section>

        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>DDD<Emphasis>/</Emphasis>Diving Deeper</h1>
          <h2 className={styles.subtitle}>Value Object<Emphasis>.</Emphasis></h2>
          <ul>
            <li className={"fragment"}>Models a concept from the Ubiquitous Language</li>
            <li className={"fragment"}>Immutable</li>
            <li className={"fragment"}>Free of side effects</li>
            <li className={"fragment"}>Comparable by <Emphasis>value</Emphasis></li>
          </ul>
        </section>

        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>DDD<Emphasis>/</Emphasis>Diving Deeper</h1>
          <h2 className={styles.subtitle}>Entity<Emphasis>.</Emphasis></h2>
          <ul>
            <li className={"fragment"}>Models a concept from the Ubiquitous Language</li>
            <li className={"fragment"}>
              Has a <Emphasis>unique identity</Emphasis>
              <ul>
                <li>Usually modeled as a <Emphasis>Value Object</Emphasis></li>
                <li>Should remain <Emphasis>stable</Emphasis> throughout the lifetime of the Entity</li>
              </ul>
            </li>
            <li className={"fragment"}>Contains <Emphasis>mutable state</Emphasis> (so it can change over time)</li>
            <li className={"fragment"}>Comparable by <Emphasis>identity</Emphasis></li>
          </ul>
        </section>

        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>DDD<Emphasis>/</Emphasis>Diving Deeper</h1>
          <h2 className={styles.subtitle}>Aggregate<Emphasis>.</Emphasis></h2>
          <ul>
            <li className={"fragment"}>Models a concept from the Ubiquitous Language</li>
            <li className={"fragment"}>
              Clusters one or more <Emphasis>Entities</Emphasis> and/or <Emphasis>Value Objects</Emphasis>
            </li>
            <li className={"fragment"}>
              Represents a <Emphasis>Consistency Boundary</Emphasis>
              <ul>
                <li>All state within an Aggregate <Emphasis>must</Emphasis> be consistent at all times</li>
                <li>We're referring to <Emphasis>transactional consistency</Emphasis>, not <em>eventual consistency</em>
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
        </section>

        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>DDD<Emphasis>/</Emphasis>Diving Deeper</h1>
          <h2 className={styles.subtitle}>Aggregate<Emphasis>.</Emphasis></h2>
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
        </section>

        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>DDD<Emphasis>/</Emphasis>Diving Deeper</h1>
          <h2 className={styles.subtitle}>Repository<Emphasis>.</Emphasis></h2>
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
        </section>

        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>DDD<Emphasis>/</Emphasis>Diving Deeper</h1>
          <h2 className={styles.subtitle}>Domain Service<Emphasis>.</Emphasis></h2>
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
        </section>

        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>DDD<Emphasis>/</Emphasis>Diving Deeper</h1>
          <h2 className={styles.subtitle}>Domain Service<Emphasis>.</Emphasis></h2>
          <p>
            Under what conditions would an operation not belong on an existing Entity (5) or Value Object? It is
            difficult to give an exhaustive list of reasons, but I’ve listed a few here.<br/>
            You can use a Domain Service to
            <ul>
              <li>Perform a significant business process</li>
              <li>Transform a domain object from one composition to another</li>
              <li>Calculate a Value requiring input from more than one domain object</li>
            </ul>
          </p>
          <small><Emphasis>&mdash;</Emphasis> Vernon, V. (2013). <em>Implementing Domain-Driven Design.</em></small>
        </section>

        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>DDD<Emphasis>/</Emphasis>Diving Deeper</h1>
          <h2 className={styles.subtitle}>Domain Service<Emphasis>.</Emphasis></h2>
          <p>
            <b>Other examples:</b><br/>
            <ul>
              <li>Compute user reputation</li>
              <li>Create a timeline</li>
              <li>Contribution moderation</li>
            </ul>
          </p>
        </section>

        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>DDD<Emphasis>/</Emphasis>Diving Deeper</h1>
          <h2 className={styles.subtitle}>Application Service<Emphasis>.</Emphasis></h2>
          <ul>
            <li className={"fragment"}>The <Emphasis>direct clients</Emphasis> of the domain model</li>
            <li className={"fragment"}>Implement <Emphasis>use case flows</Emphasis></li>
            <li className={"fragment"}>Control <Emphasis>database transactions</Emphasis></li>
            <li className={"fragment"}>Control <Emphasis>security</Emphasis></li>
          </ul>
        </section>

        <section data-background={Backgrounds.WhiteWithFooter}>
          <h1 className={styles.title}>DDD<Emphasis>/</Emphasis>Diving Deeper</h1>
          <h2 className={styles.subtitle}>Domain Service ↔️ Application Service<Emphasis>?</Emphasis></h2>
          <div className={"fragment"}>
            <p><b>Rule of thumb<Emphasis>:</Emphasis></b> The domain model should be "high-level".<br/>
              It should be <Emphasis>highly reusable</Emphasis> for various applications, with different</p>
            <ul>
              <li>Use cases</li>
              <li>Security requirements</li>
              <li>Storage/transactionality requirements</li>
            </ul>
          </div>
        </section>

        {/*<section data-background={Backgrounds.WhiteWithFooter}>*/}
        {/*  <h1 className={styles.title}>DDD<Emphasis>/</Emphasis>Downtime</h1>*/}
        {/*  <h2 className={styles.subtitle}>Relax and grab a drink<Emphasis>.</Emphasis></h2>*/}
        {/*  <h2 className={styles.subtitle}>☕️🫖🥤🍺</h2>*/}
        {/*</section>*/}
      </AutoAnimate>
    </section>

    <section data-background={Backgrounds.WhiteWithFooter}>
      <h1 className={styles.title}>DDD<Emphasis>/</Emphasis>Downtime</h1>
      <h2 className={styles.subtitle}>Time for food<Emphasis>!</Emphasis></h2>
      <h2 className={styles.subtitle}>☕️🫖🥤🍺</h2>
    </section>

    {/* PART 3: Software Architecture */}
    <section>
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
      <h1 className={styles.title}>Exercises<Emphasis>.</Emphasis></h1>
      <ul>
        <li>Split the <Emphasis><code>Contribution</code></Emphasis> aggregate into two
          aggregates: <Emphasis><code>Contribution</code></Emphasis> and <Emphasis><code>Post</code></Emphasis></li>
        <li>New feature<Emphasis>:</Emphasis> Reply to replies</li>
        <li>Introduce <Emphasis>Event Sourcing</Emphasis></li>
        <li>
          Introduce <Emphasis>CQRS</Emphasis>
          <ul>
            <li>Keep track of user reputation in an optimized projection database</li>
          </ul>
        </li>
      </ul>
    </section>

    <section data-background={Backgrounds.WhiteWithFooter}>
      <h1 className={styles.title}>Further reading<Emphasis>.</Emphasis></h1>
      <ColumnLayout>
        <Column>
          <p>
            <a href={"https://www.goodreads.com/book/show/15756865-implementing-domain-driven-design"}>
              Implementing Domain-Driven Design<br/>&mdash; Vaughn Vernon
            </a>
          </p>
          <p>
            <a href={"https://www.goodreads.com/book/show/15756865-implementing-domain-driven-design"}>
              <img src={implementingDDDCover} alt={"Implementing DDD Cover"}/>
            </a>
          </p>
        </Column>
        <Column>
          <p>
            <a href={"https://www.goodreads.com/book/show/179133.Domain_Driven_Design"}>
              Domain-Driven Design: Tackling Complexity in the Heart of Software &mdash; Eric Evans
            </a>
          </p>
          <p>
            <a href={"https://www.goodreads.com/book/show/179133.Domain_Driven_Design"}>
              <img src={dddEvansCover} alt={"DDD Cover"}/>
            </a>
          </p>
        </Column>
      </ColumnLayout>
    </section>

    <section data-background={Backgrounds.WhiteWithFooter}>
      <h1 className={styles.title}>Thank you!</h1>
      <h2 className={styles.subtitle}>Links</h2>
      <ul style={{listStyleType: "none"}}>
        <li>
          <b>Slides</b>&nbsp;
          <a href={"https://presentations.dirkgroot.nl/deep-dive-ddd"}>
            https://presentations.dirkgroot.nl/deep-dive-ddd
          </a><br/>
          <img src={presentatlion_link_qr} alt={"Presentation link QR code"} width="300px" height="300px"/>
        </li>
        <li>
          <b>Example code</b>&nbsp;
          <a href={"https://gitlab.com/dirk.groot/deep-dive-ddd"}>
            https://gitlab.com/dirk.groot/deep-dive-ddd
          </a><br/>
          <img src={gitlab_link_qr} alt={"GitLab link QR code"} width="300px" height="300px"/>
        </li>
      </ul>
    </section>
  </Deck>
);
