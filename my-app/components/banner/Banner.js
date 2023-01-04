import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./Banner.module.css";



export const Banner = (props) => {
  const { title, subTitle, imgUrl, videoId } = props;
  const router = useRouter();

  const handleOnPlay = (e) => {
    e.preventDefault();
    router.push(`/video/${videoId}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <div className={styles.left}>
          <div className={styles.nseriesWrapper}>
            <p className={styles.firstLetter}>N</p>
            <p className={styles.series}>S E R I E S</p>
          </div>
          <h1 className={styles.title}>{title}</h1>
          <h3 className={styles.subTitle}>{subTitle}</h3>
          <div className={styles.playBtnWrapper}>
            <button className={styles.btnWithIcon} onClick={handleOnPlay}>
              <Image
                src={'/static/play_arrow.svg'}
                alt="Play arrow icon"
                width="32"
                height="32"
              />
              <span className={styles.playText}>Play</span>
            </button>
          </div>
        </div>
      </div>
      <div
        className={styles.bannerImg}
        style={{
          backgroundImage: `url(${imgUrl})`,
          width: "100%",
          height: "600px",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
        }}
      ></div>
    </div>
  );
};
