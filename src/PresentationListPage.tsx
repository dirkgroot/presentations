import {Link} from "react-router-dom";
import styles from "./PresentationListPage.module.scss";

export const PresentationListPage = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <h1 className={styles.title}>My Presentations</h1>
      <table className={styles.table}>
        <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Standard</th>
          <th>Scroll</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th>Designing with Types (Kotlin examples)</th>
          <td>
            We are on an everlasting quest for bug-free software. Ideally, we design our software in a way that
            prevents bugs from being introduced. Are we fully utilizing every feature of our programming language to
            achieve this? Can we do better? Let's explore together!
          </td>
          <td><Link to="/designing-with-types" target="_blank">open</Link></td>
          <td><Link to="/designing-with-types/scroll" target="_blank">open</Link></td>
        </tr>
        <tr>
          <th>Designing with Types (Java examples)</th>
          <td>
            We are on an everlasting quest for bug-free software. Ideally, we design our software in a way that
            prevents bugs from being introduced. Are we fully utilizing every feature of our programming language to
            achieve this? Can we do better? Let's explore together!
          </td>
          <td><Link to="/designing-with-types-java" target="_blank">open</Link></td>
          <td><Link to="/designing-with-types-java/scroll" target="_blank">open</Link></td>
        </tr>
        <tr>
          <th>FP and OOP: Best Friends Forever?</th>
          <td>
            Modern programming languages are increasingly becoming a mix of multiple paradigms. Object-Oriented
            Programming languages (OOP) like Java and Kotlin, for example, are being further extended with concepts from
            Functional Programming languages (FP). Think of immutability and lambda expressions. What happens when we
            combine both programming styles in a single codebase? Can OOP and FP complement each other?
            <br/><br/>
            In this talk, we'll explore what happens when we introduce FP patterns in OOP code. Perhaps it will turn out
            that OOP and FP are indeed BFFs!
          </td>
          <td><Link to="/fp-oop-bffs" target="_blank">open</Link></td>
          <td><Link to="/fp-oop-bffs/scroll" target="_blank">open</Link></td>
        </tr>
        <tr>
          <th>Deep Dive: Domain-Driven Design</th>
          <td>
            How do I name this entity? How do I deal with ambiguous terms? Where do I implement business rules? Is this
            validation part of the business logic, or does it belong to the application logic? Which entities need to be
            in scope for this database transaction?
            <br/><br/>
            In this deep dive, we explore the concepts of Domain-Driven Design (DDD) and how they can help you to answer
            these kinds of questions. We cover all DDD concepts, including Ubiquitous Language and Bounded Context,
            Aggregates, Entities, Value Objects, and how they fit into a software architecture. We do this by applying
            it to a practical example, so that you can see how these concepts fit into practice.
          </td>
          <td><Link to="/deep-dive-ddd" target="_blank">open</Link></td>
          <td><Link to="/deep-dive-ddd/scroll" target="_blank">open</Link></td>
        </tr>
        <tr>
          <th>Getting better, against all odds</th>
          <td>
            Getting better is not always as easy as it seems. Team and organisation dynamics can make it really hard to
            make the improvements we need. In this interactive talk we use a case study to identify essential qualities
            we need to get better as a team.
          </td>
          <td><Link to="/getting-better-against-all-odds" target="_blank">open</Link></td>
          <td><Link to="/getting-better-against-all-odds/scroll" target="_blank">open</Link></td>
        </tr>
        </tbody>
      </table>
    </div>
  </section>
);
