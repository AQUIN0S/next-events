import { Comment } from "../../util/fetch-comments";

export default function CommentItem({ comment }: { comment: Comment }) {
  const { name, timestamp, content } = comment;
  return (
    <div>
      <h3>{name}</h3>
      <p>Date: {timestamp.toDateString()}</p>
      <p>{content}</p>
    </div>
  );
}
