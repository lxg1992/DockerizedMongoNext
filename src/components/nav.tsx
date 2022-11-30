/** @jsxImportSource theme-ui */

import React from "react";

import Link from "next/link";

const Nav = () => (
  <header
    sx={{
      height: "60px",
      width: "100vw",
      bg: "primary",
      borderBottom: "1px solid",
      borderColor: "primary",
    }}
  >
    <nav
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        variant: "containers.page",
        height: "100%",
      }}
    >
      <Link
        href="/"
        sx={{ fontWeight: "bold", fontSize: 4, cursor: "pointer" }}
      >
        Home
      </Link>

      <Link
        href="/notes"
        sx={{ color: "text", fontSize: 3, cursor: "pointer" }}
      >
        Notes
      </Link>
    </nav>
  </header>
);

export default Nav;
