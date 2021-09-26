import ActiveLink from "../ActiveLink/ActiveLink";
import styles from "./siteHeader.module.css";
import { BsFillHeartFill } from "react-icons/bs";
import { FcMenu } from "react-icons/fc";
import { useState } from "react";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className={styles.headerImage} />
      <nav>
        <div className={styles.headerLinks}>
          <ActiveLink
            className="inline text-2xl cursor-pointer"
            to="/"
            label={<BsFillHeartFill />}
            activeOnlyWhenExact={true}
          />

          <div
            className={`${
              isOpen ? styles.headerItemsOpen : styles.headerItems
            } ${styles.kek}`}
          >
            <ActiveLink
              to="/"
              activeOnlyWhenExact={true}
              label="Home"
              className={isOpen ? styles.navItemOpen : styles.navItem}
              onClick={() => setIsOpen(false)}
            />
            <ActiveLink
              to="/heroes"
              activeOnlyWhenExact={false}
              label="Heroes"
              className={isOpen ? styles.navItemOpen : styles.navItem}
              onClick={() => setIsOpen(false)}
            />
            <ActiveLink
              to="/items"
              activeOnlyWhenExact={true}
              label="Items"
              className={isOpen ? styles.navItemOpen : styles.navItem}
              onClick={() => setIsOpen(false)}
            />
            <ActiveLink
              to="/buildings"
              activeOnlyWhenExact={true}
              label="Buildings"
              className={isOpen ? styles.navItemOpen : styles.navItem}
              onClick={() => setIsOpen(false)}
            />
            <ActiveLink
              to="/activities"
              activeOnlyWhenExact={true}
              label="Activities"
              className={isOpen ? styles.navItemOpen : styles.navItem}
              onClick={() => setIsOpen(false)}
            />
            <ActiveLink
              to="/beginner-tips"
              activeOnlyWhenExact={true}
              label="Beginner Tips"
              className={isOpen ? styles.navItemOpen : styles.navItem}
              onClick={() => setIsOpen(false)}
            />
          </div>
          <FcMenu
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className={styles.menuIcon}
          />
        </div>
      </nav>
    </header>
  );
}
