import React from "react";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '@component/styles/AllBreeds.module.css';

export default function AllBreeds() {

  const [dogBreeds, setDogBreeds] = useState([]); 

  useEffect(() => {
    
    // fetch dogbreeds from json file in github gist
    const url = 'https://gist.githubusercontent.com/lstubdal/7c7161c4779b0fc49ffe81414f4c8854/raw/5d1ae39d9bbb6591cb9abb71e3dd290ec13c651f/dogbreeds.json';
    const fetchData = async () =>  {
  
      try {
        const response = await fetch(url)
        const data = await response.json() // parse data to json format    
        setDogBreeds(data) // update state to 'dogbreed' variable
       
      } catch(error) {
        console.log('error', error)
      }    
    }
    fetchData()
  }, []); // Empty array means to only run once on mount.
  
  return (
    <div className={styles.allBreeds}>
      <h2>ALL BREEDS</h2>
      <main className={styles.allBreeds__grid}>

        {dogBreeds.map(dog => (
          <Link key={dog.name} href={`/allBreeds/${dog.name}`} className={styles.allBreeds__gridItem}>
            <img src={`${dog.image_link}`}  alt={`${dog.name}`}/> 
            <h3>{dog.name}</h3>
          </Link>
        ))}
      </main>
    </div>
  );
}
