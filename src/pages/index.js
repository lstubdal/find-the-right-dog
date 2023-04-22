import Header from '../components/header/header'
import styles from '@component/styles/Frontpage.module.css'

export default function Frontpage() {
  return (
    <div className={styles.frontpage} style={{ backgroundImage: 'url(/images/background-frontpage.png)' }}>
     <Header />
     <section className={styles.frontpage__content}>
      <h1 className={styles.frontpage__title}>Find the Best Dog <br/> Breed for You!</h1>
      
        <div className={styles.frontpage__link}>
          <button className={styles.frontpage__linkButton}>Let's go</button>
        </div>
     </section>
    </div>
  );
}






