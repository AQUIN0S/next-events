export default function CommentItem({
  name,
  content,
  timestamp,
}: {
  name: string;
  content: string;
  timestamp: Date;
}) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Date: {timestamp.toDateString()}</p>
      <p>{content}</p>
    </div>
  );
}
