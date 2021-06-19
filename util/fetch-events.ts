export interface Event extends EventDetails {
  id: string;
}

type EventDetails = {
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
};

type FireBaseEventResponse = {
  [key: string]: EventDetails;
};

const db_path = "https://next-events-18655-default-rtdb.firebaseio.com/events";

export async function getFeaturedEvents(): Promise<Event[]> {
  const response = await fetch(db_path + ".json");
  const parsedResponse: FireBaseEventResponse = await response.json();
  const events = parseIntoEventArray(parsedResponse);
  return events.filter((event) => event.isFeatured);
}

export async function getAllEventIds() {
  const response = await fetch(db_path + ".json");
  const parsedResponse: FireBaseEventResponse = await response.json();
  const eventIds: string[] = [];
  for (const id in parsedResponse) {
    eventIds.push(id);
  }

  return eventIds;
}

export async function getAllEvents(): Promise<Event[]> {
  const response = await fetch(db_path + ".json");
  const parsedResponse: FireBaseEventResponse = await response.json();
  const events = parseIntoEventArray(parsedResponse);
  return events;
}

export async function getFilteredEvents({
  year,
  month,
}: {
  year: number;
  month: number;
}): Promise<Event[]> {
  const response = await fetch(db_path + ".json");
  const parsedResponse: FireBaseEventResponse = await response.json();
  const events = parseIntoEventArray(parsedResponse);

  let filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export async function getEventById(id: string): Promise<Event | undefined> {
  const response = await fetch(`${db_path}/${id}.json`);
  const parsedResponse: EventDetails = await response.json();
  return { ...parsedResponse, id };
}

function parseIntoEventArray(eventObject: FireBaseEventResponse): Event[] {
  const events: Event[] = [];

  for (const key in eventObject) {
    events.push({ ...eventObject[key], id: key });
  }

  return events;
}
