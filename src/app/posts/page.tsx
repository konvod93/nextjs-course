"use client"

import Link from "next/link";


export default function Posts() {
  function randomThreeDigitNumber() {
    return Math.floor(Math.random() * (1000 - 100) + 100);
  }
  return (
    <main>
      <h2 className="font-bold">Home page</h2>
      <h1 className="font-bold text-amber-500">Client component</h1>
      <p>{randomThreeDigitNumber()}</p>
      <Link href="/">Link to back home</Link>
    </main>
  );
}
