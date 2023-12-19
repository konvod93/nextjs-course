"use client";

import Header from "@/components/Header";
import Logo from "@/components/Header/Logo";

export default function Home() {  
  return (
    <div>
      <Header name="Konstantin" age={51} isMan={true}>
        <Logo />
      </Header>      
      Main page of my application
    </div>
  )
}
