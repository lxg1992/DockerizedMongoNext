/** @jsxImportSource theme-ui */

import React from "react";

import { useRouter } from "next/router";

export async function getServerSideProps({
  params,
  req,
  res,
}: {
  params: any;
  req: any;
  res: any;
}) {
  const response = await fetch(`http://localhost:3000/api/note/${params.id}`);

  if (!response.ok) {
    res.writeHead(302, { Location: "/notes" });
    res.end();
    return {
      props: {},
    };
  }

  const { data } = await response.json();
  return {
    props: {
      note: data,
    },
  };
}

const Note = ({ note }: { note: { title: string; id: number } }) => {
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>Note: {note.title} </h1>
    </div>
  );
};

export default Note;
