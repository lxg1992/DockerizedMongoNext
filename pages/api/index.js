// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nc from "next-connect";
import dbConnect from "../../db/dbConnect";
import Note from "../../db/models/Note";

// const handler = nc()
//   .get((req, res) => {
//     res.send("Test GET");
//   })
//   .post((req, res) => {
//     res.json({ data: "Test POST" });
//   });

const handler = nc()
  .get(async (req, res) => {
    try {
      await dbConnect();
      const notes = await Note.find({});
      return res.statusCode(201).json({ success: true, data: notes });
    } catch (e) {
      return res.statusCode(400).json({ success: false });
    }
  })
  .post(async (req, res) => {
    return res.json({ data: "Test POST" });
  });

export default handler;
