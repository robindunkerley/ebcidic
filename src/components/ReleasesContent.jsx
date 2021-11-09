import React, {useState, useRef, useLayoutEffect} from 'react'
import useFitText from "use-fit-text";
import { Carousel } from 'react-responsive-carousel';
import { IconButton } from '@mui/material';
import { Icon } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Icons from './Icons';
import {useWindowSize} from '@react-hook/window-size';

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
        artwork: Suture,
        title: 'Suture',
        description: "Four dark heavy weight hitting tracks.",
        bandcampURL: 'https://ebcidic.bandcamp.com/album/suture',
        youtubeURL: false
    },
    {
        index: 3,
        artwork: PressureComplex,
        title: 'Pressure Complex',
        description: "A 40 minute live modular techno set, recorded during July 2020, that captures his mood during these unusual times and fuses these with his latest aural ideas into a powerful & cohesive performance.",
        bandcampURL: 'https://ebcidic.bandcamp.com/album/pressure-complex',
        youtubeURL: 'https://www.youtube.com/watch?v=HE8lYPqlP14&t=879s'
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

const ReleasesContent = () => {
    const openURL = (url) => {
        window.open(url, '_blank' )
    }
    const topContainerHeight = '61%'
    const titleContainerHeight = '20%';
    const artworkContainerHeight = '80%';
    const bottomContainerHeight = '39%';
    const textContainerHeight = "50%";
    const iconContainerHeight = "50%";
    const { fontSize, ref } = useFitText();
    return (
        <Layout title="Releases">
            <Carousel autoPlay={false} interval='9999999'>
            {release.map(ary => {
            return <div className="container" style={{height: '100%'}}>
                            <div className="top-container" style={{height: topContainerHeight}}>
                                <div className='title-container' style={{height: titleContainerHeight, display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}}>
                                    {ary.title}
                                </div>
                            <div className='artworkContainer' style={{height: artworkContainerHeight, display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid red'}}>
                                <img style={{height: artworkContainerHeight, width: artworkContainerHeight, objectFit: 'contain'}}src={ary.artwork}/>
                            </div>
                        </div>
                        <div className="bottom-container" style={{height: bottomContainerHeight}}>
                            <div ref={ref} className="text-container" style={{fontSize, height: textContainerHeight, width: '70%', margin: '0 auto', lineHeight: 1, fontWeight: 200}}>
                                {ary.description}
                            </div>
                            <div className="icon-container" style={{height: iconContainerHeight}}>
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

export default ReleasesContent
