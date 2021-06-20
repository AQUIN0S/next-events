import CommentsList from "./CommentsList";
import { Comment } from "../../util/fetch-comments";

export default function CommentsSection({ comments }: { comments: Comment[] }) {
  return (
    <section>
      <button />
      <CommentsList comments={comments} />
    </section>
  );
}
