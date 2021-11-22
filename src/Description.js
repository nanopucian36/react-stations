// DO NOT DELETE
import * as React from 'react'
import { Dogimage } from './DogImage.js';

export function Description(props) {
    return (
        <main>
            <div className="mainContents">
                <div className="leftColumn">
                    <p>{props.desc}</p>
                </div>
                <div className="rightColumn">
                    <Dogimage url="https://images.dog.ceo/breeds/spaniel-brittany/n02101388_2667.jpg" />
                </div>
            </div>
        </main>
    )
}
