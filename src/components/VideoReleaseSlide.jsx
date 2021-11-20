import React from 'react'
import Layout from './Layout'
import useFitText from "use-fit-text";
import { Carousel } from 'react-responsive-carousel';

const videos = [
    {
        title: "Charming Hades",
        source: "https://www.youtube.com/embed/FmOF62Ezw04",
        srcdoc: "<style>*{padding:0;margin:0;overflow:hidden}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/FmOF62Ezw04?autoplay=1><img src=https://img.youtube.com/vi/FmOF62Ezw04/hqdefault.jpg alt='Ebcidic - Erosion'><span>▶</span></a>",
        description: "Charming Hades' is the latest studio album by electronic musician & live performer Phil Bilsby under the alias Ebcidic, released October 2018 on Undulation Records."

    },
    {   title: "Erosion",
        source: "https://www.youtube.com/embed/uGZTNGXTK5U",
        srcdoc: "<style>*{padding:0;margin:0;overflow:hidden}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/uGZTNGXTK5U?autoplay=1><img src=https://img.youtube.com/vi/uGZTNGXTK5U/hqdefault.jpg alt='Ebcidic - Erosion'><span>▶</span></a>",
        description: "Composed using the Orthogonal Devices ER301 Sound Computer with stereo processing via the Ciat-lonbarde Cocoquantus 2 & OTO Boum with delay & reverb from Verbos Electronics multi delay and Tiptop Audio Z-DSP respectively."
    },
    {
        title: "Mosaic",
        source: 'https://www.youtube.com/embed/7pkXaAI1DV0',
        srcdoc: "<style>*{padding:0;margin:0;overflow:hidden}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/7pkXaAI1DV0?autoplay=1><img src=https://img.youtube.com/vi/7pkXaAI1DV0/hqdefault.jpg alt='Ebcidic - Mosaic'><span>▶</span></a>",
        description: "A by-product of other intentions, this album was never meant to be, never planned until it demanded to be - an exploration in process-phase music, 'Mosaic' is the latest industrial ambient drone album from Ebcidic released July 2019 on Undulation Records."
        
    },
    {
        title: "Dymaxion Projection 1 & 2",
        source: "https://www.youtube.com/embed/VWlL83rWHrw",
        srcdoc: "<style>*{padding:0;margin:0;overflow:hidden}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/VWlL83rWHrw?autoplay=1><img src=https://img.youtube.com/vi/VWlL83rWHrw/hqdefault.jpg alt='Ebcidic - Dymaxion Project 1 & 2'><span>▶</span></a>",
        description: "Dymaxion Projection 1 & 2' from the vinyl release ‘Material 7.2 UKAEA Vs Ebcidic’ as part of the  ‘Material 7.x Series’ curated by The Raw Materialists on the 1st November 2019."
    },
    {
        title: 'Pressure Complex (live)',
        source: "https://www.youtube.com/embed/HE8lYPqlP14",
        srcdoc: "<style>*{padding:0;margin:0;overflow:hidden}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/HE8lYPqlP14?autoplay=1><img src=https://img.youtube.com/vi/HE8lYPqlP14/hqdefault.jpg alt='Ebcidic - Pressure Complex (live)'><span>▶</span></a>",
        description: " live techno! Recorded in July 2020, during the same recording session as my new album 'Pressure Complex', and was originally screened as part of the Modular Meets 2020 online event in August 2020."
    },
    {
        title: "Vestige of Before",
        source: "https://www.youtube.com/embed/Jb1p9jL80C4",
        srcdoc: "<style>*{padding:0;margin:0;overflow:hidden}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/Jb1p9jL80C4?autoplay=1><img src=https://img.youtube.com/vi/Jb1p9jL80C4/hqdefault.jpg alt='Ebcidic - Vestige of Before'><span>▶</span></a>",
        description: "A meandering mixtape of ideas & jams recorded over the last couple of years that didn't naturally fall into some of my other releases but have now found a home in this latest release. This release is very much inspired by the fabulous DDS mixtapes"
    }
]


const VideoReleaseSlide = () => {
    const topContainerHeight = '80%';
    const titleContainerHeight = '10%';
    const iframeContainerHeight = '90%';
    const bottomContainerHeight = '20%';
    const textContainerHeight = '80%'
    const { fontSize, ref } = useFitText();


    
    return (
        <Layout title="Video Releases">
            <Carousel autoPlay={false} showStatus={false} interval='9999999'>
            {videos.map(ary => {
    return  <div style={{height: '100%', padding: '1rem'}} className="content-container">
                <div className="top-container" style={{height: topContainerHeight}}>
                    <div style={{height: titleContainerHeight, width: '100%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center'}}className="title-container">
                        {ary.title}
                    </div>
                    <div style={{height: iframeContainerHeight, maxWidth: '500px', margin: '0 auto'}}className="iframe-container">
                    <iframe width="100%" height="100%" src={ary.source} srcdoc={ary.srcdoc} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="bottomContainer" style={{height: bottomContainerHeight}}>
                    <div ref={ref} style={{fontSize, height: textContainerHeight, width: textContainerHeight, margin: '0 auto', lineHeight: 1, fontWeight: 200}}className="text-container">
                        {ary.description}
                    </div>
                    <div style={{height: '20%', width: '100%'}}></div>
                </div>   
            </div>
            })}
            </Carousel>
        </Layout>
    )
}

export default VideoReleaseSlide
