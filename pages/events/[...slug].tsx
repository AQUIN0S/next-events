import Head from "next/head";
import EventFilter from "../../components/event/EventFilter";
import EventList from "../../components/event/EventList";
import { getFilteredEvents } from "../../util/fetch-events";
import { InferGetServerSidePropsType, GetServerSidePropsContext } from "next";

const FilteredEvents = ({
  events,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="background">
      <Head>
        <title>Filtered Events</title>
        <meta name="description" content="View all events!" />
      </Head>
      <main className="content">
        <EventFilter />
        <EventList events={events} />
      </main>
    </div>
  );
};

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  if (!Array.isArray(query.slug) || query.slug.length != 2) {
    return {
      notFound: true,
    };
  }

  const events = await getFilteredEvents({
    year: +query.slug[0],
    month: +query.slug[1],
  });

  return {
    props: {
      events: events,
    },
  };
}

export default FilteredEvents;
