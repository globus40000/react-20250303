import { FC, PropsWithChildren } from "react";
import { ProgressBar } from "../ProgressBar/progress-bar";
import { Header } from "../Header/header";
import { Footer } from "../Footer/footer";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="layout">
      <ProgressBar />
      <header>
        <Header />
      </header>
      <section>{children}</section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
