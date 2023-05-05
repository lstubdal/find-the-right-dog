import React from "react";
import styles from "@component/styles/Frontpage.module.css";
import Link from "next/link";
import Header from "../components/header/header";

export default function Frontpage() {
  return (
    <div className={styles.frontpage} style={{ backgroundImage: "url(/images/background-frontpage.png)" }}>
      <Header />
      <section className={styles.frontpage__content}>
        <h1 className={styles.frontpage__title}>Find the Best Dog <br/> Breed for You!</h1>
        
          <Link key="all-breeds" href="/findBreed" className={styles.frontpage__link}>
            <button className={styles.frontpage__linkButton} aria-label="go to breedselector">Let"s go</button>
          </Link>
      </section>
    </div>
  );
}






