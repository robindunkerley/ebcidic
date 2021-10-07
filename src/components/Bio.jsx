import React from 'react'
import useFitText from "use-fit-text";
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
    maxWidth: '180px',
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

const iconContainerStyleBio = {
    position: 'relative',
    bottom: 0,
    marginTop: '3%',
    display: 'flex',
    justifyContent: 'center',
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
                                                fontWeight: '200',
                                                lineHeight: 1,
                                                margin: '0 auto',
                                                width: '90%',
                                                minHeight: '40%',
                                                maxHeight: '50%'
                                                }} 
                                                className='description-container'>
                        
                                {bioText}
    
                        </div>
                    </div>
            </div>       
                        <div style={iconContainerStyleBio} className="icon-container">
                            <Icon component={YouTubeIcon}/>
                            <iframe title="soundcloud" allowtransparency="true" scrolling="no" frameborder="no" src="https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2Febcidic&color=white_transparent&size=32" style={{width: '32px', height: '32px'}}></iframe>
                            <a href={URLs.bandcampURL}><img style={{height:'32px', width: '32px', paddingTop: '20%'}} src={BandCampIcon} alt="bandcamp-icon" /></a>
                        </div>
                    
            
                               
        </Layout>
    )
}

export default Bio
