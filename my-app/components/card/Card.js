import Image from 'next/image';
import { useState } from 'react';
import styles from './Card.module.css';
import { motion } from 'framer-motion';
import cls from 'classnames';

export const Card = (props) => {

    const {imgUrl = '/static/tom-hanks-in-forrest-gump-1.jpeg', size = 'medium'} = props;
    
    const [imgSrc, setImgSrc] = useState(imgUrl);
    const classMap = {
        large: styles.lgItem,
        medium: styles.mdItem,
        small: styles.smItem, 
    }

    const handleOnError = () => {
        setImgSrc('/static/No_Cover.jpg');
    }

    return (
        <div className={styles.container}>
            <motion.div className={cls(styles.imgMotionWrapper, classMap[size])}  whileHover={{ scale: 1.2}}>
                <Image src={imgSrc} alt="image" layout="fill" className={styles.cardImg} onError={handleOnError}/>
            </motion.div>
        </div>
    )
}