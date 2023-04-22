import Header from '../../components/header/header';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

/* import Height from '../dogInformation/height';
import Lifespan from '../dogInformation/lifespan';
import Weight from '../dogInformation/weight' */

 const SpecificBreed = ({ specificBreed })  => {

    // avoid website to render data before api fetch is complete
    const router = useRouter() // access router hook
    if (router.isFallback) {
        return <div className='loading'><p>LOADING...</p></div>
    }

    return (
        <div className='specificBreed'>
            <Header />
            <div className='dog'>
                <img className="dog__img" src={`${specificBreed[0].image_link}`} alt={`$specificBreed[0].name`} />
                <h3 className='dog__name'>{specificBreed[0].name}</h3>

               {/*  <section className="info">
                    <div className='info__details'>
                        <div className='info__details-detail'>
                            <Lifespan />
                            <p>Lifespan</p>
                        </div>
                        <p>{specificBreed[0].min_life_expectancy} - {specificBreed[0].max_life_expectancy} years</p>
                    </div>
                    <div className='info__details'>
                        <div className='info__details-detail'>
                            <Height />
                            <p>Height</p>
                        </div>
                        <p>F: {specificBreed[0].min_height_female} in</p>
                        <p>M: {specificBreed[0].max_height_male} in</p>
                    </div>
                    <div className='info__details'>
                        <div className='info__details-detail'>
                            <Weight />
                            <p>Weight</p>
                        </div>
                        <p>F: {specificBreed[0].min_weight_female}kg - {specificBreed[0].max_weight_female}kg</p>
                        <p>M: {specificBreed[0].min_weight_male}kg - {specificBreed[0].max_weight_male}kg</p>
                    </div>
                </section> */}

                <p className='dog__description'>description (bred for also) from another api</p>
                
                <p className='info'>More information about {specificBreed[0].name}, shown on a scale where 0 is the lowest and 5 is the highest</p>
                <section className='info'>
                    <div className='info__details'>
                        <h4>PERSONALITY TRAITS</h4>
                        <p>Energy: {specificBreed[0].energy}</p>
                        <p>Playfullness: {specificBreed[0].playfulness}</p>
                        <p>Trainability: {specificBreed[0].trainability}</p>
                        <p>Protectiveness: {specificBreed[0].protectiveness}</p>
                    </div>
                    <div className='info__details'>
                        <h4>BEHAVOUIR</h4>
                        <p>Good with children: {specificBreed[0].good_with_children}</p>
                        <p>Good with other dogs: {specificBreed[0].good_with_other_dogs}</p>
                        <p>Good with strangers: {specificBreed[0].strangers}</p>
                    </div>
                    <div className='info__details'>
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
    const url = 'https://gist.githubusercontent.com/lstubdal/cb98091b7b0083a9c31f4133cbbde2ca/raw/3ae4234e50588bf196d8bc433aedf7167b7190a9/gistfile1.txt';
    const response = await fetch(url);
    const allBreeds = await response.json()

    const paths = allBreeds.map((dog) => ({
        params: {
            specificBreed: dog.name
        }
    }))

    return {paths, fallback: false}
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

/*     const [dogBreed, setDogBreed] = useState(null);
    const [loading, setLoading ] = useState(true)

    useEffect(() => {
        // access the last param of url for specific fetching
        // source inspiration: https://stackoverflow.com/questions/4758103/last-segment-of-url-with-javascript 
        const currentPath = window.location.pathname;
        const currentDogBreed = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    
        // url for information about dog user clicked on on 'all breeds page'
        const url = `https://api.api-ninjas.com/v1/dogs?name=${currentDogBreed}`

        // fetch with api key
        const fetchDogBreed = async () => {
            try {
                const response = await fetch(url, {
                    headers: {
                        // put in .ENV file!
                        "x-api-key" : "ObaGZREF0xBS2FWkE2ecKTUNk79EdhGvN8ENB5cZ"
                    }
                });

                const data  = await response.json()
                setDogBreed(data);
                setLoading(false); // make sure data is updated 
                console.log(data)
                
            } catch(error) {
                console.log('error specifiv dogBreed page', error)
            }
        }

        fetchDogBreed() 
    }, []) */

    
    
}
