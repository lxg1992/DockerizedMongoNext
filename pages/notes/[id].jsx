/** @jsxImportSource theme-ui */

import React from "react";

import { useRouter } from "next/router";

const Note = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>Note: {id} </h1>
    </div>
  );
};

export default Note;
