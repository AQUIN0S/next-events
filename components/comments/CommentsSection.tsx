import CommentsList from "./CommentsList";
import { Comment } from "../../util/fetch-comments";
import { useState, Fragment } from "react";
import CommentsForm from "./CommentsForm";

export default function CommentsSection({
  eventId,
  comments,
}: {
  eventId: string;
  comments: Comment[];
}) {
  const [hideComments, setHideComments] = useState(true);

  const toggleHideComments = () => {
    setHideComments(!hideComments);
  };

  return (
    <section>
      <button onClick={toggleHideComments}>Toggle Comments</button>
      {hideComments ? (
        ""
      ) : (
        <Fragment>
          <CommentsForm eventId={eventId} />
          <CommentsList comments={comments} />
        </Fragment>
      )}
    </section>
  );
}
