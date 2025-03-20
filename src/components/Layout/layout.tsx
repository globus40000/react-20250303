import { FC, PropsWithChildren } from "react";
import { ProgressBar } from "../ProgressBar/progress-bar";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="layout">
      <ProgressBar />
      <header>Header</header>
      <section>{children}</section>
      <footer>Footer</footer>
    </div>
  );
};
