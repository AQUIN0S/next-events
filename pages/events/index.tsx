import Head from "next/head";
import EventList from "../../components/event/EventList";
import EventFilter from "../../components/event/EventFilter";
import { getAllEvents } from "../../util/fetch-events";
import { InferGetStaticPropsType } from "next";

const Home = ({ events }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="background">
      <Head>
        <title>All Events</title>
        <meta name="description" content="View all events!" />
      </Head>
      <main className="content">
        <EventFilter />
        <EventList events={events} />
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events: events,
    },
    revalidate: 10,
  };
}

export default Home;
