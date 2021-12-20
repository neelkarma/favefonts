import { TextInput } from "components/TextInput";
import { useState } from "react";
import type { NextPage } from "next";
import { FontPreview } from "components/FontPreview";
import Head from "next/head";

const Home: NextPage = () => {
  const [text, setText] = useState("");
  return (
    <div className="container max-w-[90%] md:max-w-[70%] lg:max-w-[50%] m-auto pt-5 md:pt-10">
      <Head>
        <title>Fave Fonts</title>
      </Head>
      <h1 className="font-heading font-bold">Fave Fonts</h1>
      <h3 className="font-serif font-semibold italic text-gray-600 dark:text-gray-400">
        A showcase of some of my favourite fonts.
      </h3>
      <TextInput onChange={(e) => setText(e.target.value)} />
      {[
        {
          name: "Inter",
          award: "Best All-Around Font",
        },
        {
          name: "Roboto",
          award: "Runner Up All-Around Font",
        },
        {
          name: "Chivo",
          award: "Best Reading Font",
        },
        {
          name: "Newsreader",
          award: "Best Serif Font",
        },
        {
          name: "IBM Plex Mono",
          award: "Best Monospace Font",
        },
      ].map(({ name, award }, i) => (
        <FontPreview name={name} award={award} previewText={text} key={i} />
      ))}
    </div>
  );
};

export default Home;
