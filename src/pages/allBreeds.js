import React from "react";
import { useEffect, useState } from 'react';
import Header from '../components/header/header';
import styles from '@component/styles/AllBreeds.module.css'

export default function AllBreeds() {
 
  const [dogBreeds, setDogBreeds] = useState([]); 

  useEffect(() => {
    
    // fetch dogbreeds from json file in github gist
    const url = 'https://gist.githubusercontent.com/lstubdal/cb98091b7b0083a9c31f4133cbbde2ca/raw/3ae4234e50588bf196d8bc433aedf7167b7190a9/gistfile1.txt';
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
      <Header />
  
      <h2>ALL BREEDS</h2>
      <main className={styles.allBreeds__grid}>

        {dogBreeds.map(dog => (
          <div className={styles.allBreeds__gridItem} key={dog.name}>
            <img src={`${dog.image_link}`}  alt={`${dog.name}`}/> 
            <h3>{dog.name}</h3>
          </div>
        ))}
      </main>
    </div>
  );
}
