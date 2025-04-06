import { FC } from "react";
import { ProgressBar } from "../ProgressBar/progress-bar";
import { Header } from "../Header/header";
import { Footer } from "../Footer/footer";
import { CartContainerAuthorized } from "../Cart/cart-container-authorized";
import { Outlet } from "react-router";

import styles from "./layout.module.css";

export const Layout: FC = () => {
  return (
    <div className={styles.root}>
      <ProgressBar />
      <header>
        <Header />
      </header>
      <section>
        <Outlet />
      </section>
      <CartContainerAuthorized className={styles.cart} />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
