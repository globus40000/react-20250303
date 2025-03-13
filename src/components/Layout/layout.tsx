import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="layout">
      <header>Header</header>
      <section>{children}</section>
      <footer>Footer</footer>
    </div>
  );
};
