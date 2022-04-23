import * as React from "react"
import Button from "../components/Button"
import FlyoutMenu from "../components/FlyoutMenu"
import "./main.scss"


// markup
const IndexPage = () => {
  return (
    <main>
      <title>Intro Section with dropdown</title>
      <header>
        <FlyoutMenu menuTitle="mobiles Menu" />
        <div>
        <p className="mt-12"><a href="">Normales Menü</a></p> 
        </div>
      
      </header>
      <h1 className="mb-12">
      Make <br/>remote work
      </h1>
      <p className="my-12">
        Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
      </p>
      <Button text="Learn more" />

      <p className="my-12">Bilder Section hier ;-)</p>
    </main>
  )
}

export default IndexPage
