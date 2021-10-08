import React from 'react'
import { IconButton } from '@mui/material';
import { Icon } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import BandCampIcon from '../assets/icons/bandcampIcon.png'

const iconContainerStyle = {
    position: 'relative',
    bottom: 0,
    marginTop: '3%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '0 auto',
    width: '70%',
    height: '10%'
}

const urls = {
    bandcampURL: "https://ebcidic.bandcamp.com/",
    soundcloudURL: "https://soundcloud.com/ebcidic",
    youtubeURL: "https://www.youtube.com/c/ebcidic"
}


const Icons = (url) => {
    const openPage = () => {
        window.open(url, '_blank')
    }
    return (
        <div style={iconContainerStyle} className="icon-container">
            <IconButton color='inherit' onClick={() => openPage(urls.youtubeURL)}>
             <YouTubeIcon/>
            </IconButton>
            <iframe title="soundcloud" allowtransparency="true" scrolling="no" frameborder="no" src="https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2Febcidic&color=white_transparent&size=32" style={{width: '32px', height: '32px', position: 'relative', bottom: 0}}></iframe>
            <a href={urls.bandcampURL}><img style={{height:'32px', width: '32px', paddingTop: '20%'}} src={BandCampIcon} alt="bandcamp-icon" /></a>
        </div>
    )
}

export default Icons
