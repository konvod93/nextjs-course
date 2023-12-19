"use client";

import Menu from "./Menu";

// declare as a type my props

export default function Header(props: any) {
  return (
    <header>       
      <div>Header item</div>
      <Menu {...props} />
      {props.children}
    </header>
  );
}