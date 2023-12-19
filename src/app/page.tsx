"use client";

import Header from "@/components/Header";
import Logo from "@/components/Header/Logo";
import Image from "next/image";
import lhasa from "../../public/next.svg";

export default function Home() {
  return (
    <>
      <div>
        <Header name="Konstantin" age={51} isMan={true}>
          <Logo />
        </Header>
        Main page of my application
      </div>
      <div>
        <div className="w-[500px]">
        <Image quality={50} src={lhasa} alt="lhasa" />
        </div>
      </div>
    </>
  );
}
