import { Card } from "./Card"
import styles from './SectionCard.module.css';

export const SectionCard = (props) => {

    const {title, videos, size} = props;

    return (
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.cardWrapper}>
                {videos.map((video, id) => (
                    <Card id={id} imgUrl={video.imgUrl} size={size}/>
                ))}
                
            </div>
        </section>
    )
}