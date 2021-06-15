import { Event } from "../../dummy-data/data";
import EventItem from "./EventItem";
import styles from "./EventList.module.scss";

export default function EventList({ events }: { events: Event[] }) {
  return (
    <ul className={styles.list}>
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
}
