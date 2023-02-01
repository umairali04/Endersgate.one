import { Flex } from '@chakra-ui/react'
import React from 'react'
import Aos from "aos"
import "aos/dist/aos.css"

const Roadmap = () => {

  return (
    <Flex pb={10} bg="roadmap" w="full" >
        <div className="timeline">
          <div data-aos="fade-right" style={{marginTop: "5rem"}} className="container left">

            <div className="content">
              <h2>GAME DEMO RELAUNCH</h2>
              <p>
                Enders gate Aplha play test #2 graphics improvements and multiplayer server stability.
              </p>
              <h2>NFT CONTRACT AUDIT</h2>
              <p>
                Upgrade to the old Enders Gate NFT smart contract + audit.
              </p>
            </div>
          </div>
          <div data-aos="fade-left" className="container right">
            <div className="content">
              <h2>NFT PACK OFFERING</h2>
              <p>
                Players and collectors will be given access to obtain NFT card packs containing 5 Enders Gate NFTs.
              </p>
              <h2>MARETPLACE LAUNCH</h2>
              <p>
                Players and collectors will be able to list their cards on the marketplace.
              </p>
            </div>
          </div>
          <div data-aos="fade-right" className="container left">

            <div className="content">
              <h2>NATIVE TOKEN LAUNCH</h2>
              <p>
                Fair launch of the Enders Gate token & Audit.
              </p>
              <h2>PLAY TO EARN TEST</h2>
              <p>
                Live testing of the play to earn for the native token + Audit.
              </p>
              <h2>START MARKETING PUSH</h2>
              <p>Global / Targeted marketing campaigns.</p>
            </div>
          </div>
          <div data-aos="fade-left" className="container right">
            <div className="content">
              <h2>MOBILE GAME PORT</h2>
              <p>
                Porting the game over to mobile with full functionality.
              </p>
              <h2>2ND NFT PACK OFFERING</h2>
              <p>
                Players and collectors will be given access to obtain NFT card packs containing 5 Enders Gate NFTs.
              </p>
              <h2>ENDERS GATE NFT COMICS</h2>
              <p>
                Original story written by the team and community behind Enders Gate full of lore.
              </p>
            </div>
          </div>
        </div>
    </Flex>
  )
}

export default Roadmap