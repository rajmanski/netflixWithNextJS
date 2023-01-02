import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Banner } from "../components/banner/Banner";
import { Navbar } from "../components/navbar/Navbar";
import { SectionCard } from "../components/card/SectionCard";


export default function Home() {

  const HollywoodVideos = [
    {
      imgUrl: '/static/tom-hanks-in-forrest-gump-1.jpeg'
    },
    {
      imgUrl: '/static/tom-hanks-in-forrest-gump-1.jpeg'
    },
    {
      imgUrl: '/static/tom-hanks-in-forrest-gump-1.jpeg'
    },
    {
      imgUrl: '/static/tom-hanks-in-forrest-gump-1.jpeg'
    },
  ]

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
        imgUrl="https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2020/09/Forrest-Gump-Tom-Hanks.jpg"
      />
      <div className={styles.sectionWrapper}>
        <SectionCard title={'Hollywood'} videos={HollywoodVideos} size='large'/>
        <SectionCard title={'Disney'} videos={HollywoodVideos} size='medium'/>
      </div>
      

    </>
  );
}
