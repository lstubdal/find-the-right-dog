import React from "react";
import * as filterSpecification  from "../filterFunctions"
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/header/header';
import Link from 'next/link';
import stylesResults from '@component/styles/Results.module.css';
import styles from '@component/styles/AllBreeds.module.css'


export default function Results() {
    const [errorMessage, setErrorMessage] = useState(null)

    const allBreeds = useSelector((state) => state.fetchedData.data); // access all dogbreeds froms store
    const answers = useSelector((state) => state.quiz.answers)        // access answers from quiz saved in store
    let filteredResult = []
    
    // filter by size
    const size = filterSpecification.bySize(answers[0].answer)
    filteredResult = allBreeds.filter(dog => dog.max_weight_male >= size[0] && dog.max_weight_male <= size[1]);
    console.log("by size: ", filteredResult.length)

    //filter by energy
    filteredResult = filteredResult.filter(dog => dog.energy === answers[1].answer);
    console.log("by energy: ", filteredResult.length)


    // filter by good with children
    const goodWithChildren = filterSpecification.by(answers[2].answer);
    filteredResult = filteredResult.filter(dog => dog.good_with_children >= goodWithChildren[0] && dog.good_with_children <= goodWithChildren[1]);
    console.log("by gwc: ", filteredResult.length)

    // filter by good with other dogs 
    const goodWithOtherDogs = filterSpecification.by(answers[3].answer);
    filteredResult = filteredResult.filter(dog => dog.good_with_other_dogs >= goodWithOtherDogs[0] && dog.good_with_other_dogs <= goodWithOtherDogs[1]);
    console.log("by gwod: ", filteredResult.length)

    // filter by good with strangers
    const goodWithStrangers = filterSpecification.by(answers[4].answer);
    filteredResult = filteredResult.filter(dog => dog.good_with_strangers >= goodWithStrangers[0] && dog.good_with_strangers <= goodWithStrangers[1]);
    console.log("by gws: ", filteredResult.length)

    // filter by playfulness
    const playfulness = filterSpecification.by(answers[5].answer);
    filteredResult = filteredResult.filter(dog => dog.playfulness >= playfulness[0] && dog.playfulness <= playfulness[1]);
    console.log("by playfulness: ", filteredResult.length)

    // filter by barking
    const barking = filterSpecification.by(answers[5].answer);
    filteredResult = filteredResult.filter(dog => dog.barking >= barking[0] && dog.barking <= barking[1]);
    console.log("by barking: ", filteredResult.length)

    // filter by trainability
    const trainability = filterSpecification.by(answers[5].answer);
    filteredResult = filteredResult.filter(dog => dog.trainability >= trainability[0] && dog.trainability <= trainability[1]);
    console.log("by trainability: ", filteredResult.length)

    // filter by grooming
    const grooming = filterSpecification.byGrooming(answers[5].answer);
    filteredResult = filteredResult.filter(dog => dog.grooming >= grooming[0] && dog.grooming <= grooming[1]);
    console.log("by grooming: ", filteredResult.length)

    // filter by shedding
    const shedding = filterSpecification.byshedding(answers[5].answer);
    filteredResult = filteredResult.filter(dog => dog.shedding >= shedding[0] && dog.shedding <= shedding[1]);
    console.log("by shedding: ", filteredResult.length)

    /*
    if (filteredResult.length === 0) {
        setErrorMessage('NO DOG FOR U ')
    } */

 
    return (
        <div>
            <Header />
            <div className={stylesResults.results}>
                {errorMessage}

                {filteredResult.length === 1 ? 
                    <div>
                        <h2 className={stylesResults.results__header}>THE PERFECT DOGBREED FOR YOU IS...</h2>
                        <p className={stylesResults.results__description}>Based on this quiz the results there are multiple dogbreeds that will fit your expectations and lifestyle.</p>
                        <p className={stylesResults.results__description}>Click on THE dog to read more about it!</p>
                    </div>
                    
                    : 

                    <div>
                        <h2 className={stylesResults.results__header}>THE RIGHT BREED FOR YOU IS...</h2>
                        <p className={stylesResults.results__description}>Based on this quiz the results there are multiple dogbreeds that will fit your expectations and lifestyle.</p>
                        <p className={stylesResults.results__description}>Click on a dog to read more about it!</p>
                    </div>
                    
                }

                <section className={stylesResults.results__container}>
                    {filteredResult.map(dog => (
                        <Link key={dog.name} href={`/allBreeds/${dog.name}`} className={styles.allBreeds__gridItem}>
                            <img src={`${dog.image_link}`}  alt={`${dog.name}`}/> 
                            <h3>{dog.name}</h3>
                        </Link>
                    ))}
                </section>
            </div>
        </div>
    )
}

