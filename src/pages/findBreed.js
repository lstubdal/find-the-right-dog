import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { decreaseIndex, increaseIndex, updateAnswer } from "@component/slices/quizSlice";
import { useState } from 'react';
import styles from '@component/styles/FindBreed.module.css';
import Header from '../components/header/header';

export default function FindBreed() {
     // make reducers accessbible to current component
     const dispatch = useDispatch();

    // access slice from redux 
    const index = useSelector((state) => state.quiz.index); 
    const questions = useSelector((state) => state.quiz.questions); 

    const checkboxes = [
        { id: 1, isChecked: false },
        { id: 2, isChecked: false },
        { id: 3, isChecked: false },
        { id: 4, isChecked: false },
        { id: 5, isChecked: false }
    ]

    // update value after users input
    // soure: chatGPT
    const [checkboxValues, setCheckboxValues] = useState(checkboxes)

    function changeCheckboxValue(id) {
        const updatedCheckboxValues = checkboxValues.map((checkbox) =>
            checkbox.id === id ? { 
                ...checkbox, isChecked: !checkbox.isChecked 
            } : checkbox
        );
        setCheckboxValues(updatedCheckboxValues) // update changes on checkbox
    }

    // make sure user clicks one option, also no more than one
    const [errorMessage, setErrorMessage] = useState(null);

    function checkInputFields() {
        // handle if no option selected
        let counter = 0;
        checkboxValues.map((checkbox) => {
            if (!checkbox.isChecked) {counter++;}
        })

        if (counter === 3) {
            setErrorMessage("Please select one option")
            return false

        } else {
            // update current answer to redux then 
            checkboxValues.map((checkbox) => {
                if (checkbox.isChecked) {
                    dispatch(updateAnswer({
                        id: questions[index].id,
                        answer: checkbox.id

                    }))
                    // reset value for next question
                    checkbox.isChecked = false 
                }
            })

            setErrorMessage(null);
            return true
        }
        // if two or more is selected
    } 

    return(
        <div className={styles.findBreed}>
            <Header />
            <h2>DOG BREED SELECTOR</h2>
            <p className={styles.findBreed__description}>Answer a few questions about your expections of your future four legged friend</p>

            <section className={styles.quiz}>
                <p>Question {index + 1}/10</p>
                <h3>{questions[index].question}</h3>

            
                <div className={styles.quiz__questions}>{checkboxValues.map((checkbox, i) => (
                    <label key={checkbox.id}>
                        <input
                        type="checkbox"
                        checked={checkbox.isChecked}
                        onChange={() => changeCheckboxValue(checkbox.id)}
                        />
                        {questions[index].options[i].option}
                    </label>
                    ))}
                    
                </div>

                {errorMessage && <p style={{ color: 'darkred' }}>{errorMessage}</p>}

                <div>
                    <button className={styles.quiz__buttonBack} onClick={() => dispatch(decreaseIndex())} aria-label="go back to previous question">Back</button>
                    <button className={styles.quiz__button} onClick={() => checkInputFields() === false ? '' : dispatch(increaseIndex())} aria-label="next question">Next</button>
                </div>

            </section>
        </div>
    )
}
