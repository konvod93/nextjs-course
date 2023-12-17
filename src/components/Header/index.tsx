"use client";

import Logo from "./Logo";
import Menu from "./Menu";

// declare as a type my props

export default function Header(props: any) {
  return (
    <header>
      {props.name}
      <Logo />
      <div>Header item</div>
      <Menu />
    </header>
  );
}