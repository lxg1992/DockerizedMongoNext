/** @jsxImportSource theme-ui */

import React from "react";

import Link from "next/link";

import Note from "../../db/models/Note";
import dbConnect from "../../db/dbConnect";

export async function getServerSideProps(ctx: any) {
  // await dbConnect();
  // const notess = await Note.find({});
  // await Note.create({ title: "Test", text: "test text" });
  const res = await fetch(`http://localhost:3000/api/note/`);
  const { data } = await res.json();

  const help: string | undefined =
    process.env.HELP_APP_URL || "env var undetected";

  return {
    props: {
      notes: data,
    },
  };
}

const Notes = ({ notes }: { notes: any[] }) => {
  // const notes = new Array(15)
  //   .fill(1)
  //   .map((e, i) => ({ id: i, title: `This is my note ${i}` }));

  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>My Notes</h1>

      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {notes.map((note) => (
          <div key={note.id} sx={{ width: "33%", p: 2 }}>
            <Link
              key={note.id}
              href="/notes/[id]"
              as={`/notes/${note.id}`}
              sx={{ textDecoration: "none", cursor: "pointer" }}
            >
              <div sx={{ variant: "containers.card" }}>
                <strong>{note.title}</strong>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
