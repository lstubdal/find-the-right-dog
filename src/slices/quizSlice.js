import { createSlice } from "@reduxjs/toolkit";
import Router from 'next/router';

const initialState = {
    index: 0,
    questions: [
        { // size
            id: 'size',
            question: 'What size do you prefer your dog to be?',
            options: [
                {option: 'Not important'},
                {option: 'A small sized dog (15-30 LBS)'},
                {option: 'A medium sized dog (30-50 LBS)'},
                {option: 'A large sized dog (50-110 LBS)'},
                {option: 'A extra large sized dog (110 LBS and over)'}
            ]
        },
        { // energy
            id: 'energy',
            question: 'How much activity will your dog get?',
            options: [
                {option: 'Bare minimum (leash walks everyday)'},
                {option: 'Long walks every now and then'},
                {option: 'Long walks once a week'},
                {option: 'Long walks 2-4 a week'},
                {option: 'Long walks/jogs almost or up to everyday'},
            ]
        },
        { // good_with_children
            id: 'good_with_children',
            question: 'Will the dog be living with children?',
            options: [
                {option: 'No, not planning either'},
                {option: 'Do not have children yet'},
                {option: 'Yes, with children over 12'},
                {option: 'Yes, with children under and over 12'},
                {option: 'Yes, with children under 12'},
            ]
        },
        { // good_with_other_dogs
            id: 'good_with_other_dogs',
            question: 'Is it important that the dog is friendly with other dogs',
            options: [
                {option: 'Not that important'},
                {option: 'Matters a little'},
                {option: 'It matters'},
                {option: 'Yes, important'},
                {option: 'Yes, very important'}
            ]
        },
        { //good_with_strangers
            id: 'good_with_strangers',
            question: 'Is it important that the dog is friendly with strangers?',
            options: [
                {option: 'Not that important'},
                {option: 'Matters a little'},
                {option: 'It matters'},
                {option: 'Yes, important'},
                {option: 'Yes, very important'}
                
            ]
        },
        { // playfulness
            id: 'playfulness',
            question: 'How much will your dog be able to play with you?',
            options: [
                {option: 'Not much at all'},
                {option: 'Every now and then'},
                {option: 'Once or twice a week'},
                {option: 'Three or four times a week'},
                {option: 'Up to everyday'},
                
            ]
        },
        { // barking
            id: 'barking',
            question: 'Do you mind if your dog is barking?',
            options: [
                {option: 'Not at all'},
                {option: 'Every now and then is okay'},
                {option: 'I am okay with a little'},
                {option: 'I prefer minimal barking'},
                {option: 'As little barking as possible'},
            ]
        },
        { // trainability
            id: 'trainability',
            question: 'How trainable do you want your dog to be',
            options: [
                {option: 'May be stubborn'},
                {option: 'Less easy trainable'},
                {option: 'I prefer trainabile'},
                {option: 'Easily trainable'},
                {option: 'Highly trainabile'},
            ]
        },
        { // grooming
            id: 'grooming',
            question: 'How much time will you have for grooming?',
            options: [
                {option: 'I will take it to the saloon'},
                {option: 'Daily grooming'},
                {option: 'Three or four times a week'},
                {option: 'Once or twice a week'},
                {option: 'Every now and then'},
            ]
        },
        { // shedding
            id: 'shedding',
            question: 'How much shedding are you okay with?',
            options: [
                {option: 'A lot of shedding is okay'},
                {option: 'Shedding is okay'},
                {option: 'Some shedding is okay'},
                {option: 'Minimal shedding'},
                {option: 'As little as dogly possible'},
            ]
        }
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
                Router.push('/results') 
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
