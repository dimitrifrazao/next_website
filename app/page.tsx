import Image from "next/image";
import React from "react";
import ProjectLink from "./components/projects";
import Links from "./components/links";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <link rel="icon" href="./favicon.png" sizes="any" />
      <div className="flex min-h-screen flex-col items-left justify-between p-20">
        <div className="px-5 py-4">
          <Image
            src="./profile.jpg"
            alt="Next.js Logo"
            width={350}
            height={37}
            priority
            className="rounded-md"
          />
          <div className="pt-4 leading-loose">
            <h1>
              Hi, my name is Dimitri Frazao. <br />
              I&apos;m a software engineer working at Amazon. <br />
              Please, check out some of my personal projects below.
            </h1>
          </div>
        </div>

        <div className="mb-10 grid text-center gap-4 lg:max-w-2xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
          {ProjectLink(
            "https://dimitrifrazao.github.io/game_of_life/#/game",
            "Game of Life",
            "A Conway's game of life clone"
          )}
          {ProjectLink(
            "https://dimitrifrazao.github.io/wordle_static/",
            "Wordle",
            "Wordle clone using Typescript & React"
          )}
          {ProjectLink(
            "https://dimitrifrazao.github.io/web_synth_static/",
            "Web Synth",
            "A subtractive polysynth on your browser"
          )}
        </div>

        {/* <div className="mb-10 grid text-center gap-4 lg:max-w-2xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
          {ProjectLink(
            "https://dimitrifrazao.github.io/wordle_front/",
            "Wordle",
            "Play my Wordle app made with React and Flask."
          )}
          {ProjectLink(
            "https://www.dimitrifrazao.com/iogame",
            "IO Game",
            "Multiplayer game made with Node.js, Express and Socket.io."
          )}
        </div> */}
        {Links()}
      </div>
    </main>
  );
}
