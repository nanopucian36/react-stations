// DO NOT DELETE
import React from 'react'
import { useState } from "react";
import { useEffect } from "react";

export function DogListContainer() {
    const [breeds, setBreeds] = useState('bulldog');
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
                    setBreeds(data.message);
                    console.log('breeds');
                    console.log(breeds);
                }
            }).catch(err => {
                console.log(err);
            });
    }, []);
    return (
    //     // <span className='item'>
    //     //     <img src={url} />
    //     //     <button className='btn' onClick={handleClick}>更新</button>
    //     // </span>
        // <div>text</div>
        <p>breeds</p>
    )
}