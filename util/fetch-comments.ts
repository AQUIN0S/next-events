const db_path = "https://next-events-18655-default-rtdb.firebaseio.com";

type FirebaseCommentResponse = {
  [key: string]: SerializableComment;
};

export type SerializableComment = {
  id: string;
  timestamp: string;
  name: string;
  content: string;
};

export type Comment = {
  id: string;
  timestamp: Date;
  name: string;
  content: string;
};

export async function getCommentsForEvent(eventId: string) {
  const response = await fetch(`${db_path}/events/${eventId}/comments.json`);
  const parsedResponse: FirebaseCommentResponse = await response.json();

  const comments: SerializableComment[] = [];

  for (const key in parsedResponse) {
    const { timestamp, name, content } = parsedResponse[key];
    comments.push({
      id: `${eventId} ${key}`,
      timestamp,
      name,
      content,
    });
  }

  return comments;
}
