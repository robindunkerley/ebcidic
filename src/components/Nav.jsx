import React from 'react'
import { IconButton } from '@mui/material';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

const navStyle ={
    fontFamily: 'poppins',
    border: '1px solid white',
    height: '10%',
    display: 'flex',
    color: 'white',
    margin: '2px',
    boxShadow: 'rgb(255 255 255 / 20%) 0px 0px 15px, rgb(255 255 255 / 15%) 0px 0px 3px 1px',
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
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    paddingRight: '5%'
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
                <span style={{marginLeft: '20%', fontSize: '1rem'}}>Ebcidic</span>
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
