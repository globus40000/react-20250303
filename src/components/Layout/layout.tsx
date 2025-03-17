import { FC, PropsWithChildren } from "react";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="layout">
      <header>Header</header>
      <section>{children}</section>
      <footer>Footer</footer>
    </div>
  );
};
