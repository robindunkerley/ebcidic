import React from 'react'
import Layout from './Layout'
import Icons from './Icons';
import EbcidicPic from '../assets/artist_photos/EbcidicTateModern.jpg'
import useFitText from "use-fit-text";


const bioText = "Ebcidic is the artist name of Techno & experimental/drone producer and live performer Phil Bilsby based in Brighton, UK. During 2018/19, with both his ‘Charming Hades’ & ‘Mosaic' industrial ambient drone albums, and more recently with his ’Suture EP’ & ‘Pressure Complex’ releases in 2020 sees Ebcidic continue to delve deeper into the darker & harder side of techno through his extended live sets marrying claustrophobic industrial textures & soundscapes underpinned by tough unrelenting rhythms & percussion."



const contentStyle={
    height: '90%',
    width: '100%',
    display: 'flex',
}

const bioPicStyle = {
    backgroundImage: `url(${EbcidicPic})`,
    width: '50%', 
    backgroundSize: "cover",
    margin: '2em',
    borderRadius: '10px',
}


const Ebcidic = () => {
    const { fontSize, ref } = useFitText({
        minFontSize: 20
    });

    return (
        <Layout title='Ebcidic'>

            <div className="content" style={contentStyle}>
                <div style={bioPicStyle}></div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '50%', height: '100%'}}>
                    <div ref={ref} style={{fontSize, height: '60%', width: '90%', fontWeight: 200, textAlign: 'left', border: '2px solid rgba(255, 0, 0, 0);'}}>
                    Ebcidic is the artist name of Techno & experimental/drone producer and live performer Phil Bilsby based in Brighton, UK. <br /> <br />During 2018/19, with both his ‘Charming Hades’ & ‘Mosaic' industrial ambient drone albums, and more recently with his ’Suture EP’ & ‘Pressure Complex’ releases in 2020 sees Ebcidic continue to delve deeper into the darker & harder side of techno. <br /> <br />His extended live sets marry claustrophobic industrial textures & soundscapes underpinned by tough unrelenting rhythms & percussion.
                    </div>
                </div>
            </div>
            <Icons />


            

        </Layout>
    )
}

export default Ebcidic
