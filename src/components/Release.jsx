import React, {useState, useRef} from 'react'
import useFitText from "use-fit-text";
import { Carousel } from 'react-responsive-carousel';
import { Icon, IconButton } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import BandCampIcon from '../assets/icons/bandcampIcon.png'

//IMPORTED CSS
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../CSS/overrides.css"

//IMPORTED COMPONENTS

import Layout from "./Layout";

//IMPORTED IMAGES
import CharmingHades from '../assets/release_artwork/CharmingHades.jpg'
import Mosaic from '../assets/release_artwork/Mosaic.jpg'
import PressureComplex from '../assets/release_artwork/PressureComplex.jpg'
import Suture from '../assets/release_artwork/Suture.jpg'
import VestigeOfBefore from '../assets/release_artwork/VestigeOfBefore.jpg'

const release = [
    {
        index: 0,
        artwork: CharmingHades,
        title: 'Charming Hades',
        description: "Explores the broad possibilities allowed by the extreme limitation forced by composing & performing solely on a single instrument viz. the Soma Laboratory Lyra-8 organismic synthesiser.",
        bandcampURL: 'https://ebcidic.bandcamp.com/album/charming-hades',
        youtubeURL: 'https://youtu.be/FmOF62Ezw04'
    },
    {   
        index: 1,
        artwork: Mosaic,
        title: 'Mosaic',
        description: "A by-product of other intentions, this album was never meant to be, never planned until it demanded to be - an exploration in process-phase music.",
        bandcampURL: 'https://ebcidic.bandcamp.com/album/charming-hades',
        youtubeURL: 'https://youtu.be/FmOF62Ezw04'
    },
    {
        index: 2,
        artwork: PressureComplex,
        title: 'Pressure Complex',
        description: "A 40 minute live modular techno set, recorded during July 2020, that captures his mood during these unusual times and fuses these with his latest aural ideas into a powerful & cohesive performance.",
        bandcampURL: 'https://ebcidic.bandcamp.com/album/charming-hades',
        youtubeURL: 'https://youtu.be/FmOF62Ezw04'
    },
    {
        index: 3,
        artwork: Suture,
        title: 'Suture',
        description: "Four dark heavy weight hitting tracks.",
        bandcampURL: 'https://ebcidic.bandcamp.com/album/charming-hades',
        youtubeURL: 'https://youtu.be/FmOF62Ezw04'
    },
    {
        index: 4,
        artwork: VestigeOfBefore,
        title: 'Vestige Of Before',
        description: "A meandering mixtape of ideas & jams recorded over the last couple of years that didn't naturally fall into some of my other releases but have now found a home in this latest release.",
        bandcampURL: 'https://ebcidic.bandcamp.com/album/charming-hades',
        youtubeURL: 'https://youtu.be/FmOF62Ezw04'
    }
]

const releaseContentStyle = {
    height: '65%',
}


const spacerStyle = {
    padding: '5% 0'
}

const artworkContainerStyle = {
    minHeight: '25vh',
    marginTop: '5%',
    marginBottom: '5%',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
    margin: '0 auto',
    width: '25vh',
    maxWidth: '250px',
    borderRadius: '2%',
}

const artworkStyle = {
    height: '100%',
    width: '100%',
    borderRadius: '2%'
}

const titleContainerStyle = {
    margin: '0 auto',
    width: '100%',
}

const descriptionTextStyle = {
    lineHeight: '1',
    minHeight: '40px',
    fontWeight: '300',
    marginBlockStart: 0,
    marginBlockEnd: 0
}

const iconContainerStyle = {
    position: 'relative',
    bottom: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 auto',
    width: '28%',
    marginBottom: '5%'
}

const carouselProps = () => ({
    showIndicators: false
})




const Releases = (props) => {
    const { fontSize, ref } = useFitText();


    return (
        <Layout title={'Releases'}>
            <Carousel   className="carousel-wrapper"
                        showThumbs={false}
                        {...carouselProps()}
                        >
                {release.map(ary => {

                        return  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%'}}>
                                <div style={releaseContentStyle} className='release-content-container'>
                                            <div style={titleContainerStyle} className='title-container'>
                                                <span style={{fontWeight: '400'}} className='release-title'>{ary.title}</span>
                                            </div>
                                            <div style={spacerStyle} className="spacer">
                                                <div style={artworkContainerStyle} className='artwork-container'>
                                                    <img style={artworkStyle} src={ary.artwork} alt={ary.title} />
                                                </div>
                                            </div>
                                            <div ref={ref} style={{fontSize, 
                                                                    margin: '0 auto',
                                                                    width: '90%',
                                                                    maxWidth: '750px',
                                                                    maxHeight: '90px',
                                                                    }} 
                                                                    className='description-container'>
                                                <p className='description-text' style={descriptionTextStyle}>{ary.description}</p>
                                            </div>
                                </div>
                        
    
                                        <div style={iconContainerStyle} className="icon-container">
                                            <Icon component={YouTubeIcon}/>
                                            <a href={ary.bandcampURL}><img style={{height:'32px', width: '38px'}} src={BandCampIcon} alt="bandcamp-icon" /></a>
                                        </div>
                                    
                                </div>
                                    
                                
    
                })}

            </Carousel>
        </Layout>
    )
}

Releases.defaultProps = {
    artwork: CharmingHades,
    title: 'Release Title',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, inventore amet? Est possimus, ducimus, atque recusandae at id quod aut debitis nostrum non hic quia optio soluta voluptatibus in vel perferendis aperiam quibusdam velit. Dolores, adipisci a nam vel eum itaque, qui sed libero velit, eligendi officia omnis amet nobis'
}

export default Releases
