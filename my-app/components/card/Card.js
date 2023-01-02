import Image from "next/image";
import { useState } from "react";
import styles from "./Card.module.css";
import { motion } from "framer-motion";
import cls from "classnames";

export const Card = (props) => {
  const {
    imgUrl = "/static/tom-hanks-in-forrest-gump-1.jpeg",
    size = "medium",
    id,
  } = props;

  const [imgSrc, setImgSrc] = useState(imgUrl);
  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  const handleOnError = () => {
    setImgSrc("/static/No_Cover.jpg");
  };

  const scale = id === 0 ? {scaleY : 1.1} : {scale: 1.1};

  return (
    <div className={styles.container}>
      <motion.div
        className={cls(styles.imgMotionWrapper, classMap[size])}
        whileHover={scale}
      >
        <Image
          src={imgSrc}
          alt="image"
          layout="fill"
          className={styles.cardImg}
          onError={handleOnError}
        />
      </motion.div>
    </div>
  );
};
