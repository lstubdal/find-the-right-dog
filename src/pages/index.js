import React from "react";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAllBreeds } from "@component/slices/dogBreedsSlice";
import styles from '@component/styles/Frontpage.module.css';
import Link from 'next/link';
import Header from '../components/header/header';
import dogbreedNames from "../../dogapi/dogbreedNames";

export default function Frontpage() {
  const dispatch = useDispatch();
  const [dogBreeds, setDogBreeds] = useState([]); 

  useEffect(() => {
    
    // fetch dogbreeds from json file in github gist
    const url = 'https://gist.githubusercontent.com/lstubdal/7c7161c4779b0fc49ffe81414f4c8854/raw/5d1ae39d9bbb6591cb9abb71e3dd290ec13c651f/dogbreeds.json';
    const fetchData = async () =>  {

      try {
        const response = await fetch(url)
        const data = await response.json() // parse data to json format    
        setDogBreeds(data) // update state to 'dogbreed' variable
        dispatch(addAllBreeds(data)) // add all breeds to store
       
      } catch(error) {
        console.log('error', error)
      }    
    }
    
     fetchData()
  }, []); 



   /*  const all = useSelector((state => state.dogBreeds.allBreeds))
    console.log('all from indesx', all)
 */


  return (
    <div className={styles.frontpage} style={{ backgroundImage: 'url(/images/background-frontpage.png)' }}>
      <Header />
      <section className={styles.frontpage__content}>
        <h1 className={styles.frontpage__title}>Find the Best Dog <br/> Breed for You!</h1>
        
          <Link key="all-breeds" href="/findBreed" className={styles.frontpage__link}>
            <button className={styles.frontpage__linkButton}>Let's go</button>
          </Link>
      </section>
    </div>
  );
}






