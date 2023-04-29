import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    index: 0,
    questions: [
        { // size
            id: 0,
            question: 'What size do you prefer?',
            option1: 'Small',
            option2: 'Medium',
            option3: 'Large',
        },
        { // energy
            id: 1,
            question: 'How much activity will your dog get?',
            option1: 'Bare minimum (leash walks everyday)',
            option2: 'Longer walks once or a few time a week',
            option3: 'Long walks/jogs almost or up to everyday',
        },
        { // good with children
            id: 2,
            question: 'Will the dog be living with children?',
            option1: 'No, not planning either',
            option2: 'Do not have children yet',
            option3: 'Yes, with children',
        },
    ],

    answers: [
        {
            input: '',
        }
    ]
}

export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {

        updateAnswer: (state, index, answer) => {
            return state.answers[index].input = answer;
        },

        increaseIndex(state) {
            if (state.index === state.questions.length -1) {
                state.index = state.questions.length-1;
            } else {
                state.index++;
                console.log(state.index)
                console.log('length', state.questions.length)
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
