"use client";

import Header from "@/components/Header";

export default function Home() {
  const name = "Konstantin"
  return (
    <div>
      <Header name={name} />
      Main page of my application
    </div>
  )
}
