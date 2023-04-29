import React, { use } from "react";
import { useSelector, useDispatch } from 'react-redux';
import styles from '@component/styles/FindBreed.module.css';
import { decreaseIndex, increaseIndex } from "@component/slices/quizSlice";
import { useState } from 'react';

export default function FindBreed() {

    // access slice from redux 
    const index = useSelector((state) => state.quiz.index); 
    const questions = useSelector((state) => state.quiz.questions); 

    // soure: chatGPT
    // make sure user clicks one option, also no more than one
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    function checkInputFields() {
        // if no options is selected
        if (!isChecked1 && !isChecked2 && !isChecked3) {
            console.log('error message triggered')
            setErrorMessage("Please select one option!")
            return false
        } else {
            // reset input values again
            setIsChecked1(false);
            setIsChecked2(false);
            setIsChecked3(false);
            setErrorMessage(null)
            return true
        }
        // if two or more is selected
        
    }

    // make reducers accessbible to current component
    const dispatch = useDispatch();

    return(
        <div className={styles.findBreed}>
            <h2>DOG BREED SELECTOR</h2>
            <p>Answer a few questions about your expections of your future four legged friend</p>

            <section className={styles.quiz}>
                <p>Question {index + 1}/10</p>
                <h3>{questions[index].question}</h3>

                <div>
                    <input type="checkbox" name="low" checked={isChecked1} onChange={event => setIsChecked1(event.target.checked)}/>
                    <label htmlFor="low">{questions[index].option1}</label>

                    <input type="checkbox" name="medium"checked={isChecked2} onChange={event => setIsChecked2(event.target.checked)}/>
                    <label htmlFor="medium">{questions[index].option2}</label>

                    <input type="checkbox" name="high" checked={isChecked3} onChange={event => setIsChecked3(event.target.checked)}/>
                    <label htmlFor="high">{questions[index].option3}</label>
                </div>

                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

                <div>
                    <button onClick={() => dispatch(decreaseIndex())}>back</button>
                    <button onClick={() => checkInputFields() === false ? '' : dispatch(increaseIndex())}>next</button>
                </div>

            </section>
        </div>
    )
}

/* 

Layout for questions?
Slice for answers 

OR index, index ++

last question => href to result page? fetch with results

    0-1 => low
    2-3 => medium
    4-5 => high
*/