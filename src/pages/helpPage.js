import Header from "../components/header/header";
import styles from "@component/styles/HelpPage.module.css"

export default function HelpPage() {
    return(
        <div className={styles.helpPage}>
            <Header />
            <h2 className={styles.helpPage__title}>What is this page?</h2>

            <section className={styles.helpPage__content}>
                <img src="/images/dog_and_owner.png" alt="dog and owner" className={styles.helpPage__contentItem} />
                <p className={styles.helpPage__contentParagraph}>Answer a few questions to see what type of dog breeds that might suit Answer a few questions to see what type of dog breeds that might suit Answer a few questions to see what type of dog breeds that might suit Answer a few questions to see what type of dog breeds that might suit Answer a few questions to see what type of dog breeds that might suit </p>
            </section>
        </div>
    )
}