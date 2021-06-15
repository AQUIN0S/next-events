import { getEventById } from "../../dummy-data/data";
import { useRouter } from "next/router";
import { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";

const Event = () => {
  const router = useRouter();
  const eventID = Array.isArray(router.query.eventid)
    ? router.query.eventid[0]
    : router.query.eventid;

  const eventDetails = getEventById(eventID!);

  if (eventDetails) {
    const humanReadableDate = new Date(eventDetails.date).toLocaleDateString(
      "en-UK",
      {
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    );

    const head = (
      <Head>
        <title>{eventDetails.title}</title>
        <meta name="description" content={eventDetails.description} />
      </Head>
    );

    return (
      <Fragment>
        {head}
        <div className="background">
          <main className="content">
            <h1>{eventDetails.title}</h1>
            <img src={`/${eventDetails.image}`} />
            <p>{humanReadableDate}</p>
            <p>{eventDetails.location}</p>
            <p>{eventDetails.description}</p>
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

export default Event;
