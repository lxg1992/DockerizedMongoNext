// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nc from "next-connect";

const handler = nc()
  .get((req, res) => {
    res.send("Test GET");
  })
  .post((req, res) => {
    res.json({ data: "Test POST" });
  });

export default handler;
