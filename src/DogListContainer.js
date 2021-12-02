// DO NOT DELETE
import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import { BreedsSelect } from './BreedsSelect';

export const DogListContainer = () => {
    const [breeds, setBreeds] = useState([]);
    const [selectBreed, setSelectBreed] = useState('');
    const [images, setImage] = useState(['']);

    const handleChange = (e) => setSelectBreed(e.target.value)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(response => {
                // console.log(response);
                return response.json();
            })
            .then(data => {
                if (data.status == "success") {
                    setBreeds(Object.keys(data.message));
                    // console.log('breeds');
                    // console.log(Object.keys(data.message));
                }
            }).catch(err => {
                console.log(err);
            });
    }, []);

    function view() {
        fetch('https://dog.ceo/api/breed/' + selectBreed + '/images/random/5')
            .then(response => {
                // console.log(response);
                return response.json();
            })
            .then(data => {
                if (data.status == "success") {
                    const imgUrl = data.message;
                    setImage(imgUrl);
                    // setBreeds(Object.keys(data.message));

                }
            }).catch(err => {
                console.log(err);
            });
    }

    const listImage = images.map((i) => 
        <div key={i}>
            <img key={i} src={i} className='image' />
        </div>
    )



    return (
        // <p>breeds</p>
        <div>
            <BreedsSelect 
                breeds={breeds} 
                value={selectBreed}
                change={handleChange}
            />
            <button className='button' onClick={view}>表示</button>
            {listImage}
        </div>
    )
}
