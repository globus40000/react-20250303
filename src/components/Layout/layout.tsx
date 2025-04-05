import { FC, PropsWithChildren } from "react";
import { ProgressBar } from "../ProgressBar/progress-bar";
import { Header } from "../Header/header";
import { Footer } from "../Footer/footer";
import { Cart } from "../Cart/cart";

import styles from "./layout.module.css";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.root}>
      <ProgressBar />
      <header>
        <Header />
      </header>
      <section>{children}</section>
      <Cart className={styles.cart} />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
