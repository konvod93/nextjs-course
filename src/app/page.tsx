import Link from "next/link";


export default function Home() {
  function randomThreeDigitNumber() {
    return Math.floor(Math.random() * (1000 - 100) + 100);
  }
  return (
    <main>
      <h2 className="font-bold">Home page</h2>
      <h1 className="font-bold text-sky-500">Server component</h1>
      <p>{randomThreeDigitNumber()}</p>
      <Link href="/posts">Link to posts page</Link>
    </main>
  );
}
