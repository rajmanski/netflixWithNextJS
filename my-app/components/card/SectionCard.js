import { Card } from "./Card"
import styles from './SectionCard.module.css';

export const SectionCard = (props) => {

    const {title} = props;

    return (
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.cardWrapper}>
                <Card imgUrl='/static/tom-hanks-in-forrest-gump-1.jpeg' size="large"/>
                <Card imgUrl='/static/tom-hanks-in-forrest-gump-1.jpeg' size="large"/>
                <Card imgUrl='/static/tom-hanks-in-forrest-gump-1.jpeg' size="large"/>
                <Card imgUrl='/static/tom-hanks-in-forrest-gump-1.jpeg' size="large"/>
                <Card imgUrl='/static/tom-hanks-in-forrest-gump-1.jpeg' size="large"/>
                <Card imgUrl='/static/tom-hanks-in-forrest-gump-1.jpeg' size="large"/>
                <Card imgUrl='/static/tom-hanks-in-forrest-gump-1.jpeg' size="large"/>
                <Card imgUrl='/static/tom-hanks-in-forrest-gump-1.jpeg' size="large"/>
                <Card imgUrl='/static/tom-hanks-in-forrest-gump-1.jpeg' size="large"/>
                <Card imgUrl='/static/tom-hanks-in-forrest-gump-1.jpeg' size="large"/>
            </div>
        </section>
    )
}