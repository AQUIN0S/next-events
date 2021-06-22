import { newsletterPath } from "./firebase";

type Recipient = {
  name: string;
  email: string;
};

export async function submitNewsletterRecipient(recipient: Recipient) {
  fetch(`${newsletterPath}.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipient),
  });
}
