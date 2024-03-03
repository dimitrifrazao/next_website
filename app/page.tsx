import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import Container from "postcss/lib/container";
import ProjectLink from "./components/projects";
import Header from "./components/header";
import Links from "./components/links";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="flex min-h-screen flex-col items-left justify-between p-20">
        <div>
          <Image
            src="/profile.jpg"
            alt="Next.js Logo"
            width={300}
            height={37}
            priority
            className="rounded-md"
          />
        </div>
        <div>
          <h1>
            Hi, my name is Dimitri Frazao. <br />
            I&apos;m a software engineer at Amazon Games. <br />
            Please check out some of my personal web projects.
          </h1>
        </div>

        <div className="mb-32 grid text-center gap-4 lg:max-w-2xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
          {ProjectLink(
            "http://184.72.91.22:5000/",
            "Wordle",
            "Play my Wordle app made with React and Flask."
          )}
          {ProjectLink(
            "http://184.72.91.22:3000/",
            "IO Game",
            "Multiplayer game made with Node.js, Express and Socket.io."
          )}
        </div>
        {Links()}
      </div>
    </main>
  );
}
