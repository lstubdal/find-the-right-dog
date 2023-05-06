import React from "react";
import * as filterSpecification  from "../filterFunctions"
import { useSelector } from "react-redux";
import Header from "../components/header/header";
import Link from "next/link";
import stylesResults from "@component/styles/Results.module.css";
import styles from "@component/styles/AllBreeds.module.css"

export default function Results() { 
    const allBreeds = useSelector((state) => state.fetchedData.data); // access all dogbreeds froms store
    let answers = useSelector((state) => state.quiz.answers) 
    let filteredResult = [] 
    
    // handle error for pre-rendered page without input from user (netlify deployment)
    if (answers.length === 0) {
        return <div className={stylesResults.error}>
                    <Header />
                    <p>Ups, you haven&apos;t taken the dogbreed selector yet.</p>
                    <p>Click to find your perfect breed!</p>

                    <Link key="all-breeds" href="/findBreed" className={stylesResults.button}>
                        <button className={stylesResults.buttonLink} aria-label="go to breedselector">Find breed</button>
                    </Link>
                </div>

    } else {

        // filter by size
        const size = filterSpecification.bySize(answers[0].answer)
        filteredResult = allBreeds.filter(dog => dog.max_weight_male >= size[0] && dog.max_weight_male <= size[1]);

        //filter by energy
        if (filteredResult.length === 0){
            restoreArray()
        }
        filteredResult = filteredResult.filter(dog => dog.energy === answers[1].answer);

        // filter by good with children
        if (filteredResult.length === 0){
            restoreArray()
        }
        const goodWithChildren = filterSpecification.by(answers[2].answer);
        filteredResult = filteredResult.filter(dog => dog.good_with_children >= goodWithChildren[0] && dog.good_with_children <= goodWithChildren[1]);
    
        // filter by good with other dogs 
        if (filteredResult.length === 0){
            restoreArray()
        }
        const goodWithOtherDogs = filterSpecification.by(answers[3].answer);
        filteredResult = filteredResult.filter(dog => dog.good_with_other_dogs >= goodWithOtherDogs[0] && dog.good_with_other_dogs <= goodWithOtherDogs[1]);

        // filter by good with strangers
        if (filteredResult.length === 0){
            restoreArray()
        }
        const goodWithStrangers = filterSpecification.by(answers[4].answer);
        filteredResult = filteredResult.filter(dog => dog.good_with_strangers >= goodWithStrangers[0] && dog.good_with_strangers <= goodWithStrangers[1]);
    
        // filter by playfulness
        if (filteredResult.length === 0){
            restoreArray()
        }
        const playfulness = filterSpecification.by(answers[5].answer);
        filteredResult = filteredResult.filter(dog => dog.playfulness >= playfulness[0] && dog.playfulness <= playfulness[1]);

        // filter by barking
        if (filteredResult.length === 0){
            restoreArray()
        }
        const barking = filterSpecification.by(answers[6].answer);
        filteredResult = filteredResult.filter(dog => dog.barking >= barking[0] && dog.barking <= barking[1]);

        // filter by trainability
        if (filteredResult.length === 0){
            restoreArray()
        }
        const trainability = filterSpecification.by(answers[7].answer);
        filteredResult = filteredResult.filter(dog => dog.trainability >= trainability[0] && dog.trainability <= trainability[1]);

        // filter by grooming
        if (filteredResult.length === 0){
            restoreArray()
        }  
        const grooming = filterSpecification.by(answers[8].answer);
        filteredResult = filteredResult.filter(dog => dog.grooming >= grooming[0] && dog.grooming <= grooming[1]);

        // filter by shedding
        if (filteredResult.length === 0){
            restoreArray()
        }
        const shedding = filterSpecification.by(answers[9].answer);
        filteredResult = filteredResult.filter(dog => dog.shedding >= shedding[0] && dog.shedding <= shedding[1]);
    }

    /******* if more time: proper error handeling if no dogs found for the result during filter process ********/
    // final solution: find dogbreeds that are close to user input -/+ 1

    /**** TEMPORARLY SOLUTION TO AVOID CRASHING *****/
    function restoreArray() {
        filteredResult = allBreeds;
    }
    
    const title = <h2 className={stylesResults.results__header}>THE PERFECT DOGBREED FOR YOU IS...</h2>
    const description = <p className={stylesResults.results__description}>This is result based on what will fit your expectations and lifestyle.</p>

    const dogResults = filteredResult.map(dog => (
        <Link key={dog.name} href={`/allBreeds/${dog.name}`} className={styles.allBreeds__gridItem}>
            <img src={`${dog.image_link}`}  alt={`${dog.name}`}/> 
            <h3>{dog.name}</h3>
        </Link>
    ))

    return (
        <div className={stylesResults.results}>
            <Header />
            {title}
            {description}
            <section className={stylesResults.results__container}>{dogResults}</section>
        </div>
    );
}

