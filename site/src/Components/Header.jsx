import React from "react";

export default function Header(props) {


  return (
    <header className="header" style={{backgroundImage: `url(${props.image})`}}>
      <h1>
        {props.children}
      </h1>
    </header>
  );
}
