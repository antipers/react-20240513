import React from 'react'
import ReactDOM from 'react-dom/client'
import { restaurants } from "./constants/mock";
import { Restaurants } from './components/restaurants/component';
import { Footer } from './components/footer/component';
import { Header } from './components/header/component';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header header={"I'm header"}/>
    <div>
      {restaurants.map((restaurant)=><Restaurants restaurants={restaurant}/>)}
    </div>
    <Footer footer={"I'm footer"}/>
  </React.StrictMode>
)
