import React from 'react'
import Layout from './Layout'
import useFitText from "use-fit-text";
import { Carousel } from 'react-responsive-carousel';

//IMPORTED CSS
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const videos = [
    {
        title: "Charming Hades",
        source: "https://www.youtube.com/embed/FmOF62Ezw04",
        srcdoc: "<style>*{padding:0;margin:0;overflow:hidden}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/FmOF62Ezw04?autoplay=1><img src=https://img.youtube.com/vi/FmOF62Ezw04/hqdefault.jpg alt='Ebcidic - Erosion'><span>▶</span></a>",
        description: "Charming Hades' is the latest studio album by electronic musician & live performer Phil Bilsby under the alias Ebcidic, released October 2018 on Undulation Records."

    },
    {   title: "Erosion",
        source: "https://www.youtube.com/embed/uGZTNGXTK5U",
        srcdoc: "<style>*{padding:0;margin:0;overflow:hidden}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/uGZTNGXTK5U?autoplay=1><img src=https://img.youtube.com/vi/uGZTNGXTK5U/hqdefault.jpg alt='Ebcidic - Erosion'><span>▶</span></a>"
    },
    {
        title: "Mosaic",
        source: 'https://www.youtube.com/embed/7pkXaAI1DV0',
        srcdoc: "<style>*{padding:0;margin:0;overflow:hidden}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/7pkXaAI1DV0?autoplay=1><img src=https://img.youtube.com/vi/7pkXaAI1DV0/hqdefault.jpg alt='Ebcidic - Mosaic'><span>▶</span></a>"
    },
    {
        title: "Dymaxion Projection 1 & 2",
        source: "https://www.youtube.com/embed/VWlL83rWHrw",
        srcdoc: "<style>*{padding:0;margin:0;overflow:hidden}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/VWlL83rWHrw?autoplay=1><img src=https://img.youtube.com/vi/VWlL83rWHrw/hqdefault.jpg alt='Ebcidic - Dymaxion Project 1 & 2'><span>▶</span></a>"
    },
    {
        title: 'Pressure Complex (live)',
        source: "https://www.youtube.com/embed/HE8lYPqlP14",
        srcdoc: "<style>*{padding:0;margin:0;overflow:hidden}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/HE8lYPqlP14?autoplay=1><img src=https://img.youtube.com/vi/HE8lYPqlP14/hqdefault.jpg alt='Ebcidic - Pressure Complex (live)'><span>▶</span></a>"
    },
    {
        title: "Vestige of Before",
        source: "https://www.youtube.com/embed/Jb1p9jL80C4",
        srcdoc: "<style>*{padding:0;margin:0;overflow:hidden}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/Jb1p9jL80C4?autoplay=1><img src=https://img.youtube.com/vi/Jb1p9jL80C4/hqdefault.jpg alt='Ebcidic - Vestige of Before'><span>▶</span></a>"

    }
]

const videoContentContainerStyle = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'grey'
}

const videoDescriptionContainerStyle = {
    lineHeight: '1',
    minHeight: '40px',
    fontWeight: '200',
    color: 'grey',
    position:'absolute',
    bottom: 0,
    right: 0,
    left: 0
}

const descriptionTextStyle = {
    height: '20%',
    fontWeight: '200',
    color: 'grey',
}


const videoContainerStyle ={
    border: '2px solid yellow',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
}

const contentStyle = {
    border: '2px solid red',
    height: '80%'
}

const iframeStyle ={
    border: '2px solid green'
}

const VideoReleases = () => {
    const { fontSize, ref } = useFitText({
        minFontSize: 10,
        maxFontSize: 40
    });

    return (
        <Layout title="Video Releases">
            <Carousel showThumbs={false}>
            
            {videos.map(ary => {
            return      <div className="video-releases-content-container" style={videoContentContainerStyle}>
                            <div style={contentStyle} className="content">
                                <div style={videoContainerStyle} className="video-container">
                                    <div style={{height: '10%'}} className="video-title">{ary.title}</div>
                                    <iframe style={iframeStyle} width="100%" height="60%" src={ary.source} srcdoc={ary.srcdoc} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    <div ref={ref} style={{fontSize,    border: '2px solid white',
                                                                        margin: '0 auto',
                                                                        height: '50%',
                                                                        width: '90%',
                                                                        fontWeight: '200'
                                                                        }} 
                                                                        className='description-container'>
                                                    {ary.description}
                                                </div>
                                </div>
                            </div>
                        </div>
            })}
                 
            
            </Carousel>
        </Layout>
    )
}

export default VideoReleases
