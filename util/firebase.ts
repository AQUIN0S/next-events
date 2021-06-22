export const firebasePath =
  "https://next-events-18655-default-rtdb.firebaseio.com";

export const eventsPath = `${firebasePath}/events`;

export const newsletterPath = `${firebasePath}/newsletter`;

export const commentsPath = (eventID: string) =>
  `${eventsPath}/${eventID}/comments`;
