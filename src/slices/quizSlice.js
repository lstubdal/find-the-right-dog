import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    index: 0,
    questions: [
        {   
            id: 0,
            question: 'question A',
            option1: 1,
            option2: 2,
            option3: 3,
            option4: 4,
        },
        {   
            id: 1,
            question: 'question B',
            option1: 1,
            option2: 2,
            option3: 3,
            option4: 4,
        },
        {   
            id: 2,
            question: 'question C',
            option1: 1,
            option2: 2,
            option3: 3,
            option4: 4,
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
            state.index++;
        },

        decreaseIndex(state) {
            if (state.index >= 0) {
                state.index--;
            }
        }
    }
})

export const { updateAnswer, increaseIndex, decreaseIndex } = quizSlice.actions; // Action creator for the reducer
export default quizSlice.reducer;
