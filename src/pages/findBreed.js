import React, { use } from "react";
import { useSelector, useDispatch } from 'react-redux';
import styles from '@component/styles/FindBreed.module.css';
import { decreaseIndex, increaseIndex, updateAnswer } from "@component/slices/quizSlice";
import { useState } from 'react';

export default function FindBreed() {
     // make reducers accessbible to current component
     const dispatch = useDispatch();

    // access slice from redux 
    const index = useSelector((state) => state.quiz.index); 
    const questions = useSelector((state) => state.quiz.questions); 

    const checkboxes = [
        { id: '0-1', isChecked: false },
        { id: '2-3', isChecked: false },
        { id: '4-5', isChecked: false }
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
        // if no options is selected
        let counter = 0;
        checkboxValues.map((checkbox) => {
            if (!checkbox.isChecked) {counter++;}
        })

        if (counter === 3) {
            setErrorMessage("Please select one option!")
            return false

        } else {
            console.log('all good')
            
            // update current answer to redux then 
            checkboxValues.map((checkbox) => {
                if (checkbox.isChecked) {
                    dispatch(updateAnswer(checkbox.id))
                }
                //checkbox.isChecked = false // reset values
            })

            //setCheckboxValues(resetCheckboxes)
            setErrorMessage(null);
            return true
        }

       /*  } else {
            // reset input values again
            setIsChecked1(false);
            setIsChecked2(false);
            setIsChecked3(false);
            setErrorMessage(null)
            //dispatch(updateAnswer('test answer'))
            return true
        } */

        // if two or more is selected
        
    } 

    return(
        <div className={styles.findBreed}>
            <h2>DOG BREED SELECTOR</h2>
            <p>Answer a few questions about your expections of your future four legged friend</p>

            <section className={styles.quiz}>
                <p>Question {index + 1}/10</p>
                <h3>{questions[index].question}</h3>

            
                {checkboxValues.map((checkbox, i) => (
                <label key={checkbox.id}>
                    <input
                    type="checkbox"
                    checked={checkbox.isChecked}
                    /* onChange={event => checkboxValues[i].isChecked = event.target.checked} */
                    onChange={() => changeCheckboxValue(checkbox.id)}
                    />
                    {questions[index].options[i].option}
                </label>
                ))}

                {/* <div>
                    <input type="checkbox" name="low" checked={checkboxValues[0].isChecked} onChange={checkboxValues[0].isChecked = true} />
                    <label htmlFor="low">{questions[index].option1}</label>
                    

                    <input type="checkbox" name="medium" checked={checkboxValues[1].isChecked} />
                    <label htmlFor="medium">{questions[index].option2}</label>

                    <input type="checkbox" name="high" checked={checkboxValues[2].isChecked} />
                    <label htmlFor="high">{questions[index].option3}</label>
                </div> */}

                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

                <div>
                    <button onClick={() => dispatch(decreaseIndex())}>back</button>
                    {/* <button onClick={() => checkInputFields()}>next</button> */}
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