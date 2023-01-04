import { useRouter } from "next/router";
import Modal from "react-modal";
import styles from '../../styles/Video.module.css'

Modal.setAppElement("#__next");

const Video = () => {
  const router = useRouter();

  return (
    <div>
      Video {router.query.id}
      <Modal
        isOpen={true}
        contentLabel="Watch the video"
        onRequestClose={() => router.back()}
        overlayClassName={styles.overlay}
      >
        <div>Modal body</div>
      </Modal>
    </div>
  );
};

export default Video;
