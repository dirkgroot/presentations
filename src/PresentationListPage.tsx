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
        </tbody>
      </table>
    </div>
  </section>
);
