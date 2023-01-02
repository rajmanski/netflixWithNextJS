import Image from 'next/image';
import styles from './Card.module.css';

export const Card = (props) => {

    const {imgUrl, size} = props;

    return (
        <Image src={imgUrl} alt="image" width='300' height='300'/>
    )
}