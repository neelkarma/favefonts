import { ChangeEventHandler, FC } from "react";

export const TextInput: FC<{ onChange: ChangeEventHandler<HTMLInputElement> }> =
  ({ onChange }) => {
    return (
      <input
        type="text"
        onChange={onChange}
        placeholder="Preview Text"
        className="
        min-w-full rounded-lg h-10 p-5 mt-5 transition
        border-[1px] border-gray-400 dark:border-gray-500 
        bg-gray-100 dark:bg-gray-700
        hover:bg-gray-200 dark:hover:bg-gray-600
        focus:bg-white dark:focus:bg-gray-800
        focus:ring-4 focus:ring-offset-blue-500 focus:outline-none
        "
      />
    );
  };
