/** @jsxImportSource theme-ui */

import React from "react";

import Link from "next/link";

export function getStaticProps() {
  // get cms data
  return {
    props: {
      content: {
        title: "This is my nice app",
      },
    },
  };
}

export default function Home({ content }: { content: any }) {
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
        <h1 sx={{ fontSize: 8, my: 0 }}>{content.title}</h1>
      </div>
    </div>
  );
}
