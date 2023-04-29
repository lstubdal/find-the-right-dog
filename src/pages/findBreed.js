import React from "react";
import { useSelector, useDispatch } from 'react-redux';

export default function FindBreed() {
    const index = useSelector((state) => state.quiz.index);
    const questions = useSelector((state) => state.quiz.questions ) // access questions for user from redux
    
    console.log('questions', questions)
    console.log(index);


    return(
        <div>
            <h2>DOG BREED SELECTOR</h2>
            <p>Answer a few questions about your expections of your future four legged friend</p>

            <section>
            {questions.map((question) => (
                <h3 key={question.id}>{question.question}</h3>
            ))}
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