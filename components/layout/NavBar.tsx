import Link from "next/link";
import styles from "./NavBar.module.scss";

export default function Layout() {
  return (
    <nav className={styles.header}>
      <Link href="/">
        <a>Next Events</a>
      </Link>
      <Link href="/events">
        <a>Browse All Events</a>
      </Link>
    </nav>
  );
}
