import { useState, FormEvent } from "react";

export default function SubscriptionForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submitCommentHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    fetch(`/api/newsletter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    });

    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={submitCommentHandler}>
      <div>
        <label htmlFor="name">Name:</label>
        <br />
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <br />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          id="email"
          type="email"
          required
        />
      </div>
      <button type="submit">Submit Comment</button>
    </form>
  );
}
