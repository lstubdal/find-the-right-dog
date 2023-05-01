import { createSlice } from "@reduxjs/toolkit";
import Router from 'next/router';

const initialState = {
    index: 0,
    questions: [
        { // size
            id: 'size',
            question: 'What size do you prefer?',
            options: [
                {option: 'small'},
                {option: 'medium'},
                {option: 'large'}
            ]
        },
        { // energy
            id: 'energy',
            question: 'How much activity will your dog get?',
            options: [
                {option: 'Bare minimum (leash walks everyday)'},
                {option: 'Longer walks once or a few time a week'},
                {option: 'Long walks/jogs almost or up to everyday'},
            ]
        },
        { // good with children
            id: 'good_with_children',
            question: 'Will the dog be living with children?',
            options: [
                {option: 'No, not planning either'},
                {option: 'Do not have children yet'},
                {option: 'Yes, with children'},
            ]
        },
    ],

    answers: []
}

export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {

        updateAnswer: (state, action) => {
            // create object of current answer
            const currentAnswer = {
                id: action.payload.id,
                answer: action.payload.answer
            } 

            // add the first answer
            if (state.answers.length === 0) {
                state.answers.push(currentAnswer);
            } else {

                 // handle if user goes back and changes answer
                const answerExists = state.answers.some(answer => answer.id === action.payload.id);
                if (answerExists) {
                    state.answers[state.index].answer = action.payload.answer;
                } else {
                    state.answers.push(currentAnswer);
                }
            }
        },

        increaseIndex(state) {
            if (state.index === state.questions.length -1) {
                // go to result page at the end of quiz
                Router.push('/resultsFindBreed') 
            } else {
                state.index++;
            }
        },

        decreaseIndex(state) {
            if (state.index > 0) {
                state.index--;
            } else {
                state.index = 0;
            }
        }
    }
})

export const { updateAnswer, increaseIndex, decreaseIndex } = quizSlice.actions; // Action creator for the reducer
export default quizSlice.reducer;
