import React from "react"
import Hero from "../components/Hero"
import FeaturedNews from "../components/FeaturedNews"
import ElementalConflict from "../components/ElementalConflict"
import Community from "../components/Community"
import Deck from "../components/Deck"
import NFT from "../components/NFT"
import Roadmap from "../components/Roadmap"
import Partners from "../components/Partners"
import Footer from "../components/Footer"

const LandingPage = () => {
  return (
    <>
      <Hero/>
      <FeaturedNews/>
      <ElementalConflict/>
      <Community/>
      <Deck/>
      <NFT/>
      <Roadmap/>
      <Partners/>
      <Footer/>
    </>
  )
}

export default LandingPage
