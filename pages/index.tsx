import Head from "next/head";
import { getFeaturedEvents } from "../dummy-data/data";
import EventList from "../components/event/EventList";

const Home = () => {
  return (
    <div className="background">
      <Head>
        <title>Featured Events</title>
        <meta name="description" content="View events in your area!" />
      </Head>
      <main className="content">
        <EventList events={getFeaturedEvents()} />
      </main>
    </div>
  );
};

export default Home;
