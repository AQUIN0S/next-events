import { FormEvent, useRef } from "react";

export default function CommentsForm({ eventId }: { eventId: string }) {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const commentInputRef = useRef<HTMLTextAreaElement>(null);

  const submitCommentHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    fetch(`/api/comments/${eventId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameInputRef.current!.value,
        content: commentInputRef.current!.value,
        timestamp: Date.now(),
      }),
    });
  };

  return (
    <form onSubmit={submitCommentHandler}>
      <div>
        <label htmlFor="name">Name:</label>
        <br />
        <input id="name" type="text" ref={nameInputRef} required />
      </div>
      <div>
        <label htmlFor="comment">Your Comment:</label>
        <br />
        <textarea
          ref={commentInputRef}
          name="comment"
          id="comment"
          cols={30}
          rows={10}
          required
        />
      </div>
      <button type="submit">Submit Comment</button>
    </form>
  );
}
