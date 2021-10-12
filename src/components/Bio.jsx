import React from 'react'
import useFitText from "use-fit-text";
import { Icon, IconButton } from '@mui/material';

//IMPORTED IMAGES
import Ebcidic from '../assets/artist_photos/EbcidicTateModern.jpg'
import YouTubeIcon from '@mui/icons-material/YouTube';
import BandCampIcon from '../assets/icons/bandcampIcon.png'


import Layout from './Layout'
import Icons from './Icons';

const URLs = {
    bandcampURL: "https://ebcidic.bandcamp.com/",
    soundcloudURL: "https://soundcloud.com/ebcidic",
    youtubeURL: "https://www.youtube.com/c/ebcidic"

}

const bioText = "Ebcidic is the artist name of Techno & experimental/drone producer and live performer Phil Bilsby based in Brighton, UK. During 2018/19, with both his ‘Charming Hades’ & ‘Mosaic' industrial ambient drone albums, and more recently with his ’Suture EP’ & ‘Pressure Complex’ releases in 2020 sees Ebcidic continue to delve deeper into the darker & harder side of techno through his extended live sets marrying claustrophobic industrial textures & soundscapes underpinned by tough unrelenting rhythms & percussion."


const Bio = () => {
    const topContainerHeight = '51%';
    const bottomContainerHeight = '49%';
    const textContainerHeight = '80%';
    const iconContainerHeight = bottomContainerHeight - textContainerHeight;
    const { fontSize, ref } = useFitText();


    return (
        <Layout title='Ebcidic'>
            <div className="container" style={{height: '100%'}}>
                <div className='top-container' style={{height: topContainerHeight, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <img style={{height: '80%', width: '80%', objectFit: 'cover'}}src={Ebcidic} alt="" />
                </div>
                <div className='bottom-container' style={{ height: bottomContainerHeight}}>
                    <div ref={ref} style={{fontSize, height: textContainerHeight, width: '80%', margin: '0 auto'}}>
                        {bioText}
                    </div>
                    <div style={{height: iconContainerHeight, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Icons/>
                    </div>
                </div>
            </div>
            
        </Layout>
    )
}

export default Bio
