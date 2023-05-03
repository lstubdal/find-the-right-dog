import React from "react";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/header/header';

export default function ResultsFindBreed() {
    const allBreeds = useSelector((state) => state.fetchedData.data);
    
    

    return (
        <div>
            <Header />


        </div>
    )
}