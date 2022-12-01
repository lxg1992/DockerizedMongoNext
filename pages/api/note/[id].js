import nc from "next-connect";
import notes from "../../../src/data/data";

const getNote = (id) => notes.find((note) => note.id === parseInt(id));

const handler = nc()
  .get((req, res) => {
    const note = getNote(req.query.id);
    if (!note) {
      res.statusCode(404);
      return res.end();
    }
    res.json({ data: note });
  })
  .patch((req, res) => {
    const note = getNote(req.query.id);
    if (!note) {
      res.statusCode(404);
      return res.end();
    }

    const idx = notes.findIndex((n) => n.id === parseInt(req.query.id));
    const updated = { ...note, ...req.body };
    notes[idx] = updated;
    res.json({ data: updated });
  })
  .delete((req, res) => {
    const note = getNote(req.query.id);
    if (!note) {
      res.statusCode(404);
      return res.end();
    }
    const i = notes.findIndex((n) => n.id === parseInt(req.query.id));
    notes.splice(i, 1);

    res.json({ data: req.query.id });
  });

export default handler;
