// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = React.useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_2667.jpg");
  
  // handle = () => {
  //   console.log("clicked!");
  // }
  // this.onClickButton

  const onClickButton = () => {
    setDogUrl("https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg");
  }

  return (
    <div>
      <header>
        <h1>Dogアプリ</h1>
      </header>
      <main>
        <div>
          <p>犬の画像を表示するサイトです</p>
          <img src={dogUrl} />
          <button onClick={onClickButton} >更新</button>
        </div>
      </main>
    </div>
  );
}
