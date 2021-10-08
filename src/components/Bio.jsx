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

const wrapperStyle = {
    height: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
}

const bioContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
}

const biopicContainerStyle = {
    minHeight: "25vh",
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
    margin: '5% auto',
    width: '25vh',
    borderRadius: '2%',
}

const biopicStyle = {
    height: '100%',
    width: '100%',
    borderRadius: '2%'
}

const bioTextStyle = {
    border: '1px solid white',
    height: '100px',
    fontWeight: '300',
    marginBlockStart: 0,
    marginBlockEnd: 0
}

const Bio = () => {
    const { fontSize, ref } = useFitText();

    return (
        <Layout title='Ebcidic'>
            <div style={wrapperStyle} className="content-wrapper">
                <div style={bioContainerStyle} className="bio-container">
                    <div style={biopicContainerStyle} className='biopic-container'>
                        <img style={biopicStyle} src={Ebcidic} alt='Ebcidic' />
                    </div>
                    <div className='description-container' ref={ref} style={{fontSize, fontWeight: '200', lineHeight: 1, margin: '0 auto', width: '90%', minHeight: '30%', maxHeight: '50%'}}>
                        {bioText}
                    </div>
                </div>
            </div>       
                <Icons />                   
        </Layout>
    )
}

export default Bio
