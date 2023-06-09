import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import styles from "@component/styles/AllBreeds.module.css";
import Header from "../components/header/header";

export default function AllBreeds() {
  const allBreeds = useSelector((state) => state.fetchedData.data) // access all breeds from store
  const isLoading = useSelector((state) => state.isLoading);

  if (isLoading) {
    // Render a loading indicator
    return <div>Loading...</div>;
  }

  if (!allBreeds) {
    // Render a placeholder component
    return <div>No data available</div>;
  }

  // Render the component that uses the data
  return (
    <div className={styles.allBreeds}>
      <Header />
      <h2>ALL BREEDS</h2>
      <main className={styles.allBreeds__grid}>

        {allBreeds.map(dog => (
          <Link key={dog.name} href={`/allBreeds/${dog.name}`} className={styles.allBreeds__gridItem}>
            <img src={`${dog.image_link}`}  alt={`${dog.name}`}/> 
            <h3>{dog.name}</h3>
          </Link>
        ))}
      </main>
    </div>
  );
}
