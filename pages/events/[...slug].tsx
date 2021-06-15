import Head from "next/head";
import EventFilter from "../../components/event/EventFilter";
import EventList from "../../components/event/EventList";
import { getFilteredEvents } from "../../dummy-data/data";
import { useRouter } from "next/router";

const FilteredEvents = () => {
  const router = useRouter();
  const query = router.query.slug;
  if (!router.isReady) {
    return (
      <div className="background">
        <Head>
          <title>Filtered Events</title>
          <meta name="description" content="View all events!" />
        </Head>
        <main className="content">
          <EventFilter />
          <p>Loading....</p>
        </main>
      </div>
    );
  }

  if (Array.isArray(query) && query.length === 2) {
    return (
      <div className="background">
        <Head>
          <title>Filtered Events</title>
          <meta name="description" content="View all events!" />
        </Head>
        <main className="content">
          <EventFilter />
          <EventList
            events={getFilteredEvents({
              year: parseInt(query[0]),
              month: parseInt(query[1]),
            })}
          />
        </main>
      </div>
    );
  }

  return (
    <div className="background">
      <Head>
        <title>Filtered Events</title>
        <meta name="description" content="View all events!" />
      </Head>
      <main className="content">
        <EventFilter />
        <p>Invalid search parameters!</p>
      </main>
    </div>
  );
};

export default FilteredEvents;
