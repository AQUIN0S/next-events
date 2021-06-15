import { Event } from "../../dummy-data/data";
import Link from "next/link";
import styles from "./EventItem.module.scss";

export default function EventItem({ event }: { event: Event }) {
  const { title, image, date, location, id } = event;

  const humanReadableDate = new Date(date).toLocaleDateString("en-UK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li>
      <img className={styles.image} src={"/" + image} alt={title} />
      <h2>{title}</h2>
      <time>{humanReadableDate}</time>
      <address>{formattedAddress}</address>
      <div>
        <Link href={exploreLink}>Explore Event</Link>
      </div>
    </li>
  );
}
