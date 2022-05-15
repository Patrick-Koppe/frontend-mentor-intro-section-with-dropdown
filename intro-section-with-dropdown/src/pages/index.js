import * as React from "react"
import Button from "../components/Button"
import MobileMenu from "../components/MobileMenu"

import "./main.scss"


// markup
const IndexPage = () => {
  return (
    <main id="outer-container">
      <title>Intro Section with dropdown</title>
      <header>
      </header>
      <MobileMenu right pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-content">
        <h1 className="mb-12">
        Make <br/>remote work
        </h1>
        <p className="my-12">
          Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
        </p>
        <Button text="Learn more" />

        <p className="my-12">Bilder Section hier ;-)</p>
      </div>
    </main>
  )
}

export default IndexPage
