import { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import { GetStaticPropsContext } from "next";
import { getEventById, getAllEventIds, Event } from "../../util/fetch-events";

const EventPage = ({ event }: { event: Event }) => {
  if (event) {
    const humanReadableDate = new Date(event.date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    const head = (
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
    );

    return (
      <Fragment>
        {head}
        <div className="background">
          <main className="content">
            <h1>{event.title}</h1>
            <img src={`/${event.image}`} />
            <p>{humanReadableDate}</p>
            <p>{event.location}</p>
            <p>{event.description}</p>
          </main>
        </div>
      </Fragment>
    );
  } else {
    return (
      <div className="background">
        <main className="content">
          <h1>Event Does Not Exist!</h1>
          <p>That event either does not exist any more or never did...</p>
          <p>
            <Link href="/events">Go back to events</Link>
          </p>
        </main>
      </div>
    );
  }
};

export async function getStaticProps({
  params,
}: GetStaticPropsContext): Promise<
  | {
      props: {
        event: Event;
      };
      revalidate: number;
      notFound?: undefined;
    }
  | {
      notFound: boolean;
      props?: undefined;
      revalidate?: undefined;
    }
> {
  if (!params || !params.eventid || Array.isArray(params.eventid)) {
    return {
      notFound: true,
    };
  }

  const event = await getEventById(params.eventid);

  if (event) {
    return {
      props: {
        event: event,
      },
      revalidate: 10,
    };
  }

  return {
    notFound: true,
  };
}

export async function getStaticPaths() {
  const paths: { params: { eventid: string } }[] = [];
  const eventIds = await getAllEventIds();

  for (const eventId of eventIds) {
    paths.push({ params: { eventid: eventId } });
  }

  return { paths, fallback: true };
}

export default EventPage;
