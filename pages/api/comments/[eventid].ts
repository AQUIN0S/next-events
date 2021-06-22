import { NextApiRequest, NextApiResponse } from "next";
import { submitCommentForEvent } from "../../../util/fetch-comments";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    submitCommentForEvent(
      {
        timestamp: new Date(req.body.timestamp).toString(),
        name: req.body.name,
        content: req.body.content,
      },
      req.query.eventid.toString()
    );
    res.send(200);
  }
}
