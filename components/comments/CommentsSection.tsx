import CommentsList from "./CommentsList";
import { Comment } from "../../util/fetch-comments";
import { useState } from "react";

export default function CommentsSection({ comments }: { comments: Comment[] }) {
  const [hideComments, setHideComments] = useState(true);

  const toggleHideComments = () => {
    setHideComments(!hideComments);
  };

  return (
    <section>
      <button onClick={toggleHideComments}>Toggle Comments</button>
      {hideComments ? "" : <CommentsList comments={comments} />}
    </section>
  );
}
