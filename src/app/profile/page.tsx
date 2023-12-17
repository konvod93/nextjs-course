"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  
  return (
    <div>
      <h1>My List of Profiles</h1>
      <div>
        <ul className="cursor-pointer">
          <Link href='/profile/1'>Profile 1</Link>
          <Link href='/profile/2'>Profile 2</Link>
          <Link href='profile/3'>Profile 3</Link>
        </ul>
      </div>
    </div>
  );
}