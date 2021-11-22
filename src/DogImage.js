// DO NOT DELETE
import * as React from 'react'
import { useState } from 'react';

export function Dogimage(props) {
    const [url, setDogUrl] = useState(props.url);
    const handleClick = () => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(data => {
                const status = data.status;
                if (status == "success") {
                    const dogUrl = data.message;
                    setDogUrl(dogUrl);
                }
            }).catch(err => {
                console.log(err);
            });
    }

    return (
        <span className='item'>
            <img src={url} />
            <button className='btn' onClick={handleClick}>更新</button>
        </span>
    )
}
