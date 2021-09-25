import ActiveLink from "../ActiveLink/ActiveLink";
import styles from "./siteHeader.module.css";
export default function SiteHeader() {
  return (
    <header>
      <div className={styles.headerImage}/>
      <nav>
        <div className={styles.headerLinks}>
          <div className={styles.headerItems}>
            <ActiveLink to="/" activeOnlyWhenExact={true} label="Home" />
            <ActiveLink
              to="/heroes"
              activeOnlyWhenExact={false}
              label="Heroes"
            />
            <ActiveLink to="/items" activeOnlyWhenExact={true} label="Items" />
            <ActiveLink
              to="/buildings"
              activeOnlyWhenExact={true}
              label="Buildings"
            />
            <ActiveLink
              to="/activities"
              activeOnlyWhenExact={true}
              label="Activities"
            />
            <ActiveLink
              to="/beginner-tips"
              activeOnlyWhenExact={true}
              label="Beginner Tips"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
