import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Banner } from "../components/banner/Banner";
import { Navbar } from "../components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Netflix </title>
        <meta name="description" content="Netlifx" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar username="piotrek@test.pl"/>
      <Banner
        title="Forrest Gump"
        subTitle="A history of Forrest Gump"
        imgUrl="https://1.bp.blogspot.com/-yb-5UYWGn-s/YOgZx-2KtJI/AAAAAAAEJag/xwdbzJDViikSLkeaA9W3vM_ZhXGuQxy1gCLcBGAsYHQ/s2048/tom-hanks-in-forrest-gump-1.jpeg"
      />

      {/* <Card /> */}
    </>
  );
}
