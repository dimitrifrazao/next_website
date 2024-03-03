import React from "react";

export default function Header(title: string) {
  return (
    <header className="w-full text-left">
      <div className="mb-10 ml-10 mr-10 ">
        <h1 className="text-2xl text-left font-bold">{title}</h1>
      </div>
    </header>
  );
}
