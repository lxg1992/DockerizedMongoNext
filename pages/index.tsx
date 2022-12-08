/** @jsxImportSource theme-ui */

import React from "react";

import Link from "next/link";

export async function getStaticProps(ctx: any) {
  // const result = await fetch('/api/') fetch the actual data
  // setup the container mongo to run by itself
  //
  const help: string | undefined =
    process.env.HELP_APP_URL || "env var undetected";

  const mongouri: string | undefined = process.env.MONGODB_URI || "no mongo";

  return {
    props: {
      help,
      mongouri,
    },
  };
}

export default function Home({
  help,
  mongouri,
}: {
  help: string;
  mongouri: string;
}) {
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
          This is a really dope note taking app. {mongouri}
        </h1>
      </div>
    </div>
  );
}
