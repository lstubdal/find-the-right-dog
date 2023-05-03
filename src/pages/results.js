import React from "react";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/header/header';

export default function Results() {
    const allBreeds = useSelector((state) => state.fetchedData.data); // access all dogbreeds froms store
    const answers = useSelector((state) => state.quiz.answers)        // access answers from quiz saved in store

    console.log('answers' , answers.length);
    console.log('dogs', allBreeds.length); // handle if answer = 0


    answers.forEach(answer => {
        console.log(answer)
    })

    
    

    return (
        <div>
            <Header />


        </div>
    )
}