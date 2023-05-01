import Header from '../../components/header/header';
import React from 'react';
import { useRouter } from 'next/router';
import styles from '@component/styles/SpecificBreed.module.css';

import Height from '@component/components/dogInformation/height';
import Lifespan from '@component/components/dogInformation/lifespan';
import Weight from '@component/components/dogInformation/weight';

const SpecificBreed = ({ specificBreed })  => {

    // avoid website to render data before api fetch is complete
    const router = useRouter() // access router hook
    if (router.isFallback) {
        return <div className='loading'><p>LOADING...</p></div>
    }

    return (
        <div className={styles.specificBreed}>
           <Header />
            <div className={styles.dog}>
                <img className={styles.dog__img} src={`${specificBreed[0].image_link}`} alt={`$specificBreed[0].name`} />
                <h3 className={styles.dog__name}>{specificBreed[0].name}</h3>

                <section className={styles.info}>
                    <div className={styles.info__details}>
                        <div className={styles.info__detailsItem}>
                            <Lifespan />
                            <p>Lifespan</p>
                        </div>
                        <p>{specificBreed[0].min_life_expectancy} - {specificBreed[0].max_life_expectancy} years</p>
                    </div>

                    <div className={styles.info__details}>
                        <div className={styles.info__detailsItem}>
                            <Height />
                            <p>Height</p>
                        </div>
                        <p>F: {specificBreed[0].min_height_female} in</p>
                        <p>M: {specificBreed[0].max_height_male} in</p>
                    </div>

                    <div className={styles.info__details}>
                        <div className={styles.info__detailsItem}>
                            <Weight />
                            <p>Weight</p>
                        </div>
                        <p>F: {specificBreed[0].min_weight_female}kg - {specificBreed[0].max_weight_female}kg</p>
                        <p>M: {specificBreed[0].min_weight_male}kg - {specificBreed[0].max_weight_male}kg</p>
                    </div>
                </section>

                <p className={styles.dog__description}>description (bred for also) from another api</p>
                
                <p className={styles.info}>More information about {specificBreed[0].name}, shown on a scale where 0 is the lowest and 5 is the highest</p>
                <section className={styles.info}>
                    <div className={styles.info__detailsItem}>
                        <h4>PERSONALITY TRAITS</h4>
                        <p>Energy: {specificBreed[0].energy}</p>
                        <p>Playfullness: {specificBreed[0].playfulness}</p>
                        <p>Trainability: {specificBreed[0].trainability}</p>
                        <p>Protectiveness: {specificBreed[0].protectiveness}</p>
                    </div>
                    <div className={styles.info__detailsItem}>
                        <h4>BEHAVOUIR</h4>
                        <p>Good with children: {specificBreed[0].good_with_children}</p>
                        <p>Good with other dogs: {specificBreed[0].good_with_other_dogs}</p>
                        <p>Good with strangers: {specificBreed[0].strangers}</p>
                    </div>
                    <div className={styles.info__detailsItem}>
                        <h4>GROOMING</h4>
                        <p>Grooming: {specificBreed[0].grooming}</p>
                        <p>Shedding: {specificBreed[0].shedding}</p>
                        <p>Coat length: {specificBreed[0].coat_length}</p>
                        <p>Drooling: {specificBreed[0].drooling}</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default SpecificBreed;

export async function getStaticPaths() {
    const url = 'https://gist.githubusercontent.com/lstubdal/7c7161c4779b0fc49ffe81414f4c8854/raw/5d1ae39d9bbb6591cb9abb71e3dd290ec13c651f/dogbreeds.json';
    const response = await fetch(url);
    const allBreeds = await response.json()

    const paths = allBreeds.map((dog) => ({
        params: {
            specificBreed: dog.name
        }
    }))

    return { paths, fallback: true } // whats the difference
}

export async function getStaticProps({ params }) {
    console.log('params', params)
    const url = `https://api.api-ninjas.com/v1/dogs?name=${params.specificBreed}`
    const response = await fetch(url, {
        headers: {
            // put in .ENV file!
            "x-api-key" : "ObaGZREF0xBS2FWkE2ecKTUNk79EdhGvN8ENB5cZ"
        }
    });
    const specificBreed = await response.json()

    return {
        props: { 
            specificBreed
        }
    }
}
