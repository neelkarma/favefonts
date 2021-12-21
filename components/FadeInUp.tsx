import { FC, useEffect, useRef } from "react";

export const FadeInUp: FC<{ delay?: number }> = ({ children, delay }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(
      () => ref.current!.classList.remove("translate-y-16", "opacity-0"),
      delay || 0
    );
  }, [delay]);

  return (
    <div
      ref={ref}
      className="transition duration-700 ease-out translate-y-16 opacity-0"
    >
      {children}
    </div>
  );
};
