import React from "react";
import styles from '@component/styles/Frontpage.module.css';
import Link from 'next/link'

export default function Frontpage() {
  return (
    <div className={styles.frontpage} style={{ backgroundImage: 'url(/images/background-frontpage.png)' }}>
     <section className={styles.frontpage__content}>
      <h1 className={styles.frontpage__title}>Find the Best Dog <br/> Breed for You!</h1>
      
        <Link key="all-breeds" href="/allBreeds" className={styles.frontpage__link}>
          <button className={styles.frontpage__linkButton}>Let's go</button>
        </Link>
     </section>
    </div>
  );
}






