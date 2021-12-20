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
      <div className="fade-in-up before-fade-in-up">
        <h1 className="font-heading font-bold">Fave Fonts</h1>
        <h3 className="font-serif font-semibold italic text-gray-600 dark:text-gray-400">
          A showcase of some of my favourite fonts.
        </h3>
        <TextInput onChange={(e) => setText(e.target.value)} />
      </div>
      <FontPreview
        name="Inter"
        award="Best All-Around Font"
        previewText={text}
        className={`fade-in-up before-fade-in-up delay-[150ms]`}
      />
      <FontPreview
        name="Roboto"
        award="Runner-Up All-Around Font"
        previewText={text}
        className={`fade-in-up before-fade-in-up delay-[200ms]`}
      />
      <FontPreview
        name="Chivo"
        award="Best Reading Font"
        previewText={text}
        className={`fade-in-up before-fade-in-up delay-[250ms]`}
      />
      <FontPreview
        name="Newsreader"
        award="Best Serif Font"
        previewText={text}
        className={`fade-in-up before-fade-in-up delay-[300ms]`}
      />
      <FontPreview
        name="IBM Plex Mono"
        award="Best Monospace Font"
        previewText={text}
        className={`fade-in-up before-fade-in-up delay-[350ms]`}
      />
    </div>
  );
};

export default Home;
