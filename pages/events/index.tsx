import Head from "next/head";
import EventList from "../../components/event/EventList";
import EventFilter from "../../components/event/EventFilter";
import { getAllEvents } from "../../dummy-data/data";

const Home = () => {
  return (
    <div className="background">
      <Head>
        <title>All Events</title>
        <meta name="description" content="View all events!" />
      </Head>
      <main className="content">
        <EventFilter />
        <EventList events={getAllEvents()} />
      </main>
    </div>
  );
};

export default Home;
