import { useState } from 'react'
import Header from './components/header/Header.jsx'
import Card from './components/card/Card.jsx'
import './App.css'

function App() {

  return (
    <>
    <Header/>
    <div className="card-container">
      <Card video='video1'
            title="韋禮安如果可以 Gura AI Cover"
            subtitle="This is one of my favorite gura AI cover. Everytime I hear it, it makes me feel fuzzy inside :)."
            date="Upload Date: 08/07/2024"/>
      <Card video='video2'
            title="Gura 稻香 Ai Cover"
            subtitle="This song is pretty nice"
            date="Upload Date: 08/07/2024"/>
      <Card video='video1'
            title="韋禮安如果可以 Gura AI Cover"
            subtitle="This is one of my favorite gura AI cover. Everytime I hear it, it makes me feel fuzzy inside :)."
            date="Upload Date: 08/07/2024"/>
      <Card video='video1'
            title="韋禮安如果可以 Gura AI Cover"
            subtitle="This is one of my favorite gura AI cover. Everytime I hear it, it makes me feel fuzzy inside :)."
            date="Upload Date: 08/07/2024"/>
    </div>
    </>
  );
}

export default App
