import React from 'react'
import useFitText from "use-fit-text";
import { Carousel } from 'react-responsive-carousel';
import { Icon, IconButton } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import BandCampIcon from '../assets/icons/bandcampIcon.png'

//IMPORTED IMAGES
import Ebcidic from '../assets/artist_photos/EbcidicTateModern.jpg'


import Layout from './Layout'

const URLs = {
    bandcampURL: "https://ebcidic.bandcamp.com/",
    soundcloudURL: "https://soundcloud.com/ebcidic",
    youtubeURL: "https://www.youtube.com/c/ebcidic"

}

const bioText = "Ebcidic is the artist name of Techno & experimental/drone producer and live performer Phil Bilsby based in Brighton, UK. During 2018/19, with both his ‘Charming Hades’ & ‘Mosaic' industrial ambient drone albums, and more recently with his ’Suture EP’ & ‘Pressure Complex’ releases in 2020 sees Ebcidic continue to delve deeper into the darker & harder side of techno through his extended live sets marrying claustrophobic industrial textures & soundscapes underpinned by tough unrelenting rhythms & percussion."

const wrapperStyle = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
}

const bioContainerStyle = {
    height: '95%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
}

const biopicContainerStyle = {
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
    margin: '5% auto',
    width: '80%',
    maxWidth: '150px',
    borderRadius: '2%',
}

const biopicStyle = {
    height: '100%',
    width: '100%',
    borderRadius: '2%'
}

const titleContainerStyle = {
    margin: '0 auto',
    width: '80%',
}

const bioTextStyle = {
    lineHeight: '1',
    minHeight: '40px',
    fontWeight: '300',
    marginBlockStart: 0,
    marginBlockEnd: 0
}

const iconContainerStyleBio = {
    marginTop: '3%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '0 auto',
    width: '40%',
    height: '10%'
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
                        <div ref={ref} style={{fontSize, 
                                                margin: '0 auto',
                                                width: '80%',
                                                maxWidth: '750px',
                                                maxHeight: '100px',
                                                }} 
                                                className='description-container'>
                            <p className='description-text' style={bioTextStyle}>
                                {bioText}
                            </p>
                        </div>
                        <div style={iconContainerStyleBio} className="icon-container">
                            <Icon component={YouTubeIcon}/>
                            <iframe title="soundcloud" allowtransparency="true" scrolling="no" frameborder="no" src="https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2Febcidic&color=white_transparent&size=32" style={{width: '32px', height: '32px'}}></iframe>
                            <a href={URLs.bandcampURL}><img style={{height:'32px', width: '32px', paddingTop: '20%'}} src={BandCampIcon} alt="bandcamp-icon" /></a>
                        </div>
                    </div>
            </div>
                               
        </Layout>
    )
}

export default Bio
