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
    

    function returnSize(input) {
        let sizeRange = []
        switch(input) {
            case 1: {
                return sizeRange = [0, 15];
            }
            case 2: {
                return sizeRange = [16, 30];
            }
            case 3: {
                return sizeRange = [31, 50];
            }
            case 4: {
                return sizeRange = [51, 109];
            }
            case 5: {
                return sizeRange = [110, 200];
            }
        }
    }

    getCurrentDay() {
        let day = 0;
        switch(new Date().getDay()){
            case 0: {
                return day = 0;
            }
            case 1: {
                return day = 1;
            }
            case 2: {
                return day = 2;
            }
            case 3: {
                return day = 3;
            }
            case 4: {
                return day = 4;
            } 
            case 5: {
                return day = 5;
            }
            case 6: {
                return day = 6;
            }
        }
    }

    
    

    return (
        <div>
            <Header />


        </div>
    )
}