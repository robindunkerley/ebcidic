import React, {useState, useRef} from 'react'
import useFitText from "use-fit-text";
import { Carousel } from 'react-responsive-carousel';
import { IconButton } from '@mui/material';
import { Icon } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Icons from './Icons';

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
import SoundCloudIcon from '../assets/icons/soundcloudIcon.png'
import BandCamp from '../assets/icons/bandcamp.png'

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
        bandcampURL: 'https://ebcidic.bandcamp.com/album/mosaic',
        youtubeURL: 'https://www.youtube.com/watch?v=7pkXaAI1DV0&'
    },
    {
        index: 2,
        artwork: PressureComplex,
        title: 'Pressure Complex',
        description: "A 40 minute live modular techno set, recorded during July 2020, that captures his mood during these unusual times and fuses these with his latest aural ideas into a powerful & cohesive performance.",
        bandcampURL: 'https://ebcidic.bandcamp.com/album/pressure-complex',
        youtubeURL: 'https://www.youtube.com/watch?v=HE8lYPqlP14&t=879s'
    },
    {
        index: 3,
        artwork: Suture,
        title: 'Suture',
        description: "Four dark heavy weight hitting tracks.",
        bandcampURL: 'https://ebcidic.bandcamp.com/album/suture',
        youtubeURL: false
    },
    {
        index: 4,
        artwork: VestigeOfBefore,
        title: 'Vestige Of Before',
        description: "A meandering mixtape of ideas & jams recorded over the last couple of years that didn't naturally fall into some of my other releases but have now found a home in this latest release.",
        bandcampURL: 'https://ebcidic.bandcamp.com/album/vestige-of-before',
        youtubeURL: 'https://youtu.be/Jb1p9jL80C4'
    }
]

const releaseContentStyle = {
    height: '70%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: '0 auto'
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


const iconBarStyle = {
    margin: '0 auto', 
    height: '100%', 
    width: '50%', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center'}

const carouselProps = () => ({
    showIndicators: false,
})




const Releases = (props) => {
    const { fontSize, ref } = useFitText();
    const openURL = (url) => {
        window.open(url, '_blank' )
    }


    return (
        <Layout title={'Releases'}>
            <Carousel   className="carousel-wrapper"
                        showThumbs={false}
                        {...carouselProps()}
                        >
                {release.map(ary => {

                        return  <div className='release-slide-parent-container' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: '100%'}}>
                                    <div style={releaseContentStyle} className='release-content-container'>
                                        <div className="release-content" style={{height: '100%'}}>
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
                                    </div>
                                        <div style={{ height: '10%'}}>
                                            <div style={iconBarStyle}>
                                                <IconButton style={ary.youtubeURL ? {visibility: 'visible'} : {display: 'none'}} color="inherit" onClick={() => {openURL(ary.youtubeURL)}}>
                                                    <YouTubeIcon fontSize="large" />
                                                </IconButton>
                                                <IconButton style={ary.bandcampURL ? {height: '45px', width: '45px'} : {display: 'none'}} onClick={() => {openURL(ary.bandcampURL)}}>
                                                    <img src={BandCamp} alt="" />
                                                </IconButton>
                                            </div>
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
