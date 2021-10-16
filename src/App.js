// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = React.useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_2667.jpg");

  const updateImage = () => {
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
    // setDogUrl("https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg");
  }

  return (
    <div>
      <header className="header">
        <h1>Dogアプリ</h1>
      </header>
      <main>
        <div className="mainContents">
          <p>犬の画像を表示するサイトです</p>
          <img src={dogUrl} className="dogImage"/>
          <button onClick={updateImage} >更新</button>
        </div>
      </main>
    </div>
  );
}
