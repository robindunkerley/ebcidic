import ReactPlayer from 'react-player';

export const YoutubeSlide = ({ url, isSelected }: { url: string; isSelected?: boolean }) => (
    <ReactPlayer height='100%' width="100%" controls={true} url={url} playing={isSelected} />
);