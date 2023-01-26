"use client";
import Link from "next/link";
import Button from "@mui/material/Button";
import MuiTest from "@/components/MuiTest";
export default function Home(): JSX.Element {
  return (
    <main>
      <Link href={"/user"}>User</Link>
      <MuiTest />
    </main>
  );
}
