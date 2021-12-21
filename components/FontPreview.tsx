import { FC } from "react";
import { FadeInUp } from "./FadeInUp";

export const FontPreview: FC<{
  name: string;
  award: string;
  previewText: string;
  delay?: number;
}> = ({ name, award, previewText, delay }) => {
  return (
    <FadeInUp delay={delay}>
      <div className="my-3 p-5 rounded-lg transition hover:bg-gray-200 dark:hover:bg-gray-700">
        <h3 className="text-xl font-semibold font-heading text-gray-500 dark:text-gray-400">
          {name}
          <span className="font-medium font-serif italic"> - {award}</span>
        </h3>
        <h1 className="text-4xl my-3" style={{ fontFamily: name }}>
          {previewText || "The quick brown fox jumps over the lazy dog."}
        </h1>
      </div>
      <hr className="dark:border-gray-700" />
    </FadeInUp>
  );
};
