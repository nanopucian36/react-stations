// DO NOT DELETE
import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import { BreedsSelect } from './BreedsSelect';

export const DogListContainer = () => {
    const [breeds, setBreeds] = useState([]);
    const [selectBreed, setSelectBreed] = useState('');
    const handleChange = (e) => setSelectBreed(e.target.value)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(data => {
                const status = data.status;
                if (status == "success") {
                    // const breeds = data.message;
                    setBreeds(Object.keys(data.message));
                    console.log('breeds');
                    console.log(Object.keys(data.message));
                }
            }).catch(err => {
                console.log(err);
            });
    }, []);

    return (
        // <p>breeds</p>
        <div>
            <BreedsSelect 
                breeds={breeds} 
                value={selectBreed}
                change={handleChange}
            />
        </div>
    )
}