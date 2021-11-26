import React from 'react';
import ReactPlayer from 'react-player';
import { YoutubeSlide } from './YouTubeSlide';
import { Carousel } from 'react-responsive-carousel';
import Layout from './Layout';

const carouselStyle = {
    height: '100%',
    padding: '4px'
}

export const YouTubeReleases = () => {
    const customRenderItem = (item, props) => <item.type {...item.props} {...props} />;

    return (
        <Layout title="Video Releases">
            <div style={carouselStyle} className="content-container">
                <Carousel renderItem={customRenderItem}>
                    <YoutubeSlide key="youtube-1" url="https://www.youtube.com/embed/FmOF62Ezw04" />
                    <YoutubeSlide key="youtube-2" url="https://www.youtube.com/embed/uGZTNGXTK5U" />
                    <YoutubeSlide key="youtube-3" url="https://www.youtube.com/embed/7pkXaAI1DV0" />
                    <YoutubeSlide key="youtube-4" url="https://www.youtube.com/embed/VWlL83rWHrw" />
                    <YoutubeSlide key="youtube-5" url="https://www.youtube.com/embed/HE8lYPqlP14" />
                    <YoutubeSlide key="youtube-6" url="https://www.youtube.com/embed/Jb1p9jL80C4" />
                </Carousel>
            </div>
        </Layout>
    );
};
