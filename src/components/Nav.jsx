import React from 'react'
import { Icon } from '@material-ui/core';
import { IconButton } from '@mui/material';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

const navStyle ={
    fontFamily: 'poppins',
    border: '1px solid white',
    height: '10%',
    display: 'flex',
    color: 'white'
}

const navLeftStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '50%'
}

const navRightStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '50%'
}

const iconContainerStyle = {
    padding: '0 2rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
}

const iconButtonProps = () => ({
    color: 'inherit'
})



const Nav = () => {
    
    const openYouTube = () => {
        window.open('https://www.youtube.com/c/ebcidic', '_blank' )
    }

    const openFaceBook = () => {
        window.open('https://www.facebook.com/Ebcidic/', '_blank' )
    }

    const openInstaGram = () => {
        window.open('https://www.instagram.com/ebcidic/', '_blank' )
    }

    return (
        <div style={navStyle}>
            <div style={navLeftStyle} className="nav-left">
                <span style={{marginLeft: '20%'}}>Ebcidic</span>
            </div>
            <div style={navRightStyle} className="nav-right">
                <div style={iconContainerStyle} className='icon-container'>
                    <IconButton {...iconButtonProps()} onClick={openYouTube}>
                        <YouTubeIcon/>
                    </IconButton>
                    <IconButton {...iconButtonProps()} onClick={openFaceBook}>
                        <FacebookIcon/>
                    </IconButton>
                    <IconButton {...iconButtonProps()} onClick={openInstaGram}>
                        <InstagramIcon/>
                    </IconButton>
                </div>
            </div>

        </div>
    )
}

export default Nav
