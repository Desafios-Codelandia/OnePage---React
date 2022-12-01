import React from "react"
import { Hero } from "./components/heroSection/heroSection"
import { CardsSection } from "./components/cardsSection/cardsSection"
import { FormSection } from "./components/formSection/formSection"


export default function App() {

  return (
    <div className="App">
        <div className="">
            <Hero/>
            <CardsSection/>
            <FormSection/>
        </div>
    </div>
  )
}


