import { FC, PropsWithChildren } from "react";
import { ProgressBar } from "../ProgressBar/progress-bar";
import { Header } from "../Header/header";
import { Footer } from "../Footer/footer";
import { CartContainerAuthorized } from "../Cart/cart-container-authorized";

import styles from "./layout.module.css";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.root}>
      <ProgressBar />
      <header>
        <Header />
      </header>
      <section>{children}</section>
      <CartContainerAuthorized className={styles.cart} />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
