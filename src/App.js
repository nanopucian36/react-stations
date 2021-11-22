// DO NOT DELETE

import * as React from 'react'
import './App.css'
import { Header } from './Header';
import { Description } from './Description';
import { DogListContainer } from './DogListContainer';

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  return (
    <div>
      <DogListContainer />
      <Header title='Dogアプリ' />
      <Description desc='犬の画像を表示するサイトです' />
    </div>
  )
}
