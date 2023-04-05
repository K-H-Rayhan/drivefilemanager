// Internal imports
import Head from "next/head";
import React, { useState } from "react";
import { Open_Sans } from "next/font/google";

// External imports
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import styles from "../../styles/Base.module.scss";

const font = Open_Sans({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  // Sidebar for mobile state
  const [mobileSideMenu, setMobileSideMenu] = useState(false);
  return (
    <div className={`${font.className}`}>
      <Head>
        <title>I Love Nextjs</title>
        <meta name="description" content="Nextjs is so good" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        toggleMobileMenu={() => {
          setMobileSideMenu((prev) => !prev);
        }}
      />
      <div className={styles.layout}>
        <Sidebar
          mobile={mobileSideMenu}
          hideMobileMenu={() => {
            setMobileSideMenu(false);
          }}
        />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
