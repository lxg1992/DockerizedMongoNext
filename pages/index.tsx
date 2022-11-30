/** @jsxImportSource theme-ui */

import React from "react";

import Link from "next/link";

export async function getStaticProps(ctx: any) {
  const help: string | undefined = process.env.HELP_APP_URL;

  return {
    props: {
      help,
    },
  };
}

export default function Home({ help } : { help: string}) {
  return (
    <div sx={{ height: `calc(100vh - 60px)` }}>
      <div
        sx={{
          variant: "containers.page",
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
      >
        <h1 sx={{ fontSize: 8, my: 0 }}>
          This is a really dope note taking app. {help}
        </h1>
      </div>
    </div>
  );
}
