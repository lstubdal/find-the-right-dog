import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    questions: [
        {   
            id: 0,
            questions: 'question A',
            option1: 1,
            option2: 2,
            option3: 3,
            option4: 4,
        }
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
        }
    }
})

export const { getQuestions } = quizSlice.actions; // Action creator for the reducer

export default quizSlice.reducer;
