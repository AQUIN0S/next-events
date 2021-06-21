import CommentItem from "./CommentItem";
import { Comment } from "../../util/fetch-comments";

export default function CommentsList({ comments }: { comments: Comment[] }) {
  const commentItems = comments.map((comment) => {
    return <CommentItem key={comment.id} comment={comment} />;
  });
  return <div>{commentItems}</div>;
}
