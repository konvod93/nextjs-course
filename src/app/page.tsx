"use client";
import { userStore } from '@/store/user'

export default function Home() {
  const user = userStore((state: any) => state.user) 
  const updateUser = userStore((state: any) => state.updateUser)
  
  const sub = userStore.subscribe(() => {
    // trigger another function
  })

  sub()
    return (
    <main className="flex gap-2 m-4">
      <p>{user.full_name}</p>
      <input className='border' type="text" onChange={(e: any) => {
        updateUser({
          full_name: e.target.value
        })
      }} />   
    </main>
  );
}
