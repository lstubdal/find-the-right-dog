import React from "react";
import * as filter  from "../filterFunctions"
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/header/header';

export default function Results() {
    const allBreeds = useSelector((state) => state.fetchedData.data); // access all dogbreeds froms store
    const answers = useSelector((state) => state.quiz.answers)        // access answers from quiz saved in store
    let currentFilteredResult = []
    
    // filter by size
    const currentSize = filter.bySize(answers[0].answer)
    currentFilteredResult = allBreeds.filter(dog => dog.max_weight_male >= currentSize[0] && dog.max_weight_male <= currentSize[1]);
    console.log("by size: ", currentFilteredResult.length)

    //filter by energy


   


 
    return (
        <div>
            <Header />


        </div>
    )
}

