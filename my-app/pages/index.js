import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Banner } from "../components/banner/Banner";
import { Navbar } from "../components/navbar/Navbar";
import { SectionCard } from "../components/card/SectionCard";
import { getVideos } from "../lib/videos";


const inter = Inter({ subsets: ["latin"] });


export async function getServerSideProps(context) {
  const HollywoodVideos = await getVideos("hollywood%20movies");
  const disneyVideos = await getVideos("disney%20trailers");
  const travelVideos = await getVideos("travel%20videos");
  const kidsVideos = await getVideos("kids%20movies%20trailers");
  return {
    props: { HollywoodVideos, disneyVideos, travelVideos, kidsVideos },
  };
}

export default function Home({
  HollywoodVideos,
  disneyVideos,
  travelVideos,
  kidsVideos,
}) {
  return (
    <>
      <Head>
        <title>Netflix </title>
        <meta name="description" content="Netlifx" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <Navbar username="piotrek@test.pl" />
        <Banner
          title="Forrest Gump"
          subTitle="A history of Forrest Gump"
          imgUrl="https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2020/09/Forrest-Gump-Tom-Hanks.jpg"
        />
        <div className={styles.sectionWrapper}>
          <SectionCard
            title={"Hollywood"}
            videos={HollywoodVideos}
            size="large"
          />
          <SectionCard title={"Disney"} videos={disneyVideos} size="small" />
          <SectionCard title={"Travel"} videos={travelVideos} size="medium" />
          <SectionCard title={"For Kids"} videos={kidsVideos} size="small" />
        </div>
      </div>
    </>
  );
}
