import CommentItem from "./CommentItem";
import { Comment } from "../../util/fetch-comments";

export default function CommentsList({ comments }: { comments: Comment[] }) {
  const commentItems = comments.map(({ id, name, content, timestamp }) => {
    return (
      <CommentItem
        key={id}
        name={name}
        content={content}
        timestamp={timestamp}
      />
    );
  });
  return <div>{commentItems}</div>;
}
