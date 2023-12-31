"use client"

import { useAppContext } from "@/context";

export default function Home() {
  const { name, setName } = useAppContext();
    return (
    <main className="flex gap-2 m-4">
      <span>{name}</span>
      <button onClick={() => setName('Ivan')}>Change name</button>    
    </main>
  );
}
