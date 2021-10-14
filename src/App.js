// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = React.useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_2667.jpg");
  return (
    <div>
      <header>
        <h1>Dogアプリ</h1>
      </header>
      <main>
        <div>
          <p>犬の画像を表示するサイトです</p>
          <img src={dogUrl} />
        </div>
      </main>
    </div>
  )
}
