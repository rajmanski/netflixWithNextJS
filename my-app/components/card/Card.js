import Image from 'next/image';
import styles from './Card.module.css';

export const Card = (props) => {

    const {imgUrl, size} = props;
    
    const classMap = {
        'large': styles.lgItem,
        'medium': styles.mgItem,
        'small': styles.smItem, 
    }

    return (
        <div className={styles.container}>
            Card
            <div className={classMap[size]}>
                <Image src={imgUrl} alt="image" layout='fill' className={styles.cardImg}/>
            </div>
        </div>
    )
}