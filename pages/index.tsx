import Head from "next/head";
import EventList from "../components/event/EventList";
import { getFeaturedEvents } from "../util/fetch-events";
import { InferGetStaticPropsType } from "next";

const Home = ({ events }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="background">
      <Head>
        <title>Featured Events</title>
        <meta name="description" content="View events in your area!" />
      </Head>
      <main className="content">
        <EventList events={events} />
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const events = await getFeaturedEvents();
  return {
    props: {
      events: events,
    },
    revalidate: 10,
  };
}

export default Home;
