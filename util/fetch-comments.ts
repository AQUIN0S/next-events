import { commentsPath } from "./firebase";

type FirebaseCommentResponse = {
  [key: string]: {
    timestamp: string;
    name: string;
    content: string;
  };
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

export type CommentContent = {
  timestamp: string;
  name: string;
  content: string;
};

export async function getCommentsForEvent(eventID: string) {
  const response = await fetch(`${commentsPath(eventID)}.json`);
  const parsedResponse: FirebaseCommentResponse = await response.json();

  const comments: SerializableComment[] = [];

  for (const key in parsedResponse) {
    const { timestamp, name, content } = parsedResponse[key];
    comments.push({
      id: `${eventID} ${key}`,
      timestamp,
      name,
      content,
    });
  }

  return comments;
}

export async function submitCommentForEvent(
  comment: CommentContent,
  eventID: string
) {
  fetch(`${commentsPath(eventID)}.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  });
}
