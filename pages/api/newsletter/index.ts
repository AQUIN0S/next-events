import { NextApiRequest, NextApiResponse } from "next";
import { submitNewsletterRecipient } from "../../../util/newsletter";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    submitNewsletterRecipient({
      name: req.body.name,
      email: req.body.email,
    });
    res.send(200);
  }
}
