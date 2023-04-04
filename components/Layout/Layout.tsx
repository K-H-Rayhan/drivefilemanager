import Head from "next/head";
import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Open_Sans } from "next/font/google";
import Header from "../Header/Header";
import BreadCrumb from "./BreadCrumb";
import styles from "../../styles/Base.module.scss";

const font = Open_Sans({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className={`${font.className}`}>
      <Head>
        <title>I Love Nextjs</title>
        <meta name="description" content="Nextjs is so good" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.layout}>
        <Sidebar />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
