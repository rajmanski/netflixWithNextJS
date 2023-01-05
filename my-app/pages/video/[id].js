import { useRouter } from "next/router";
import Modal from "react-modal";
import styles from '../../styles/Video.module.css'
import clsx from "classnames";

Modal.setAppElement("#__next");

export async function getStaticProps() {
  const video = {
    title: 'Title',
    publishTime: '2023-01-01',
    description: 'A history of something something.A history of something something.A history of something something.A history of something something.A history of something something.A history of something something.A history of something something.A history of something something.A history of something something.A history of something something.A history of something something.A history of something something.',
    channelTitle: 'Channel name',
    viewCount: 10000,
  }
  return {
    props: {
      video
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  const listOfVideos = ['bLvqoHBptjg', '6hB3S9bIaco', 's7EdQ4FqbhY'];

  const paths = listOfVideos.map((id) => ({
    params: {id}
  }));

  return {paths, fallback: 'blocking'};
}

const Video = ({video}) => {
  const router = useRouter();
  const {title, publishTime, description, channelTitle, viewCount} = video;

  return (
    <div className={styles.container}>
      Video {router.query.id}
      <Modal
        isOpen={true}
        contentLabel="Watch the video"
        onRequestClose={() => router.back()}
        overlayClassName={styles.overlay}
        className={styles.modal}
      >
        <iframe
          id="ytplayer"
          className={styles.videoPlayer}
          type="text/html"
          width="100%"
          height="360"
          src={`https://www.youtube.com/embed/${router.query.id}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
          frameBorder="0"
        ></iframe>

        <div className={styles.modalBody}>
          <div className={styles.modalBodyContent}>
            <div className={styles.col1}>
              <p className={styles.publishTime}>{publishTime}</p>
              <p className={styles.title}>{title}</p>
              <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.col2}>
              <p className={clsx(styles.subText, styles.subTextWrapper)}>
                <span className={styles.textColor}>Cast: </span>
                <span className={styles.channelTitle}>{channelTitle}</span>
              </p>
              <p className={clsx(styles.subText, styles.subTextWrapper)}>
                <span className={styles.textColor}>View Count: </span>
                <span className={styles.channelTitle}>{viewCount}</span>
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Video;
