import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import styles from '@component/styles/FindBreed.module.css';

export default function FindBreed() {

    // access slice from redux 
    const index = useSelector((state) => state.quiz.index); 
    const questions = useSelector((state) => state.quiz.questions); 

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
                    <input type="checkbox" name="low" />
                    <label for="low">{questions[index].option1}</label>

                    <input type="checkbox" name="medium" />
                    <label for="medium">{questions[index].option2}</label>

                    <input type="checkbox" name="high" />
                    <label for="high">{questions[index].option3}</label>
                </div>

                <div>
                    <button>back</button>
                    <button>next</button>
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