"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  
  return (
    <div>
      <h1>My List of Profiles</h1>
      <div>
        <div>
          <Link href='/profile/1'>Profile 1 </Link>
          <Link href='/profile/2'>Profile 2 </Link>
          <Link
           prefetch={false}
           href={{
            pathname: "/profile/3",
            query: {
              userName: "konvod",
              userId: 12,
              person: JSON.stringify({
                age: 18,
              }),
            },
          }}>Profile 3 </Link>
        </div>
      </div>
    </div>
  );
}