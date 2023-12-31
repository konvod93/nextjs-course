"use client"
import { toast } from "sonner";


export default function Home() {
  function randomThreeDigitNumber() {
    return Math.floor(Math.random() * (1000 - 100) + 100);
  }
  return (
    <main>
      <button onClick={() => toast.success('Success!')} className="px-5 py-3 text-white bg-blue-500 rounded">Notify me!</button>
    </main>
  );
}
