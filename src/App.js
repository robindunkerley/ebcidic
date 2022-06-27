import { useKeenSlider } from 'keen-slider/react';
import React, {useState} from 'react';
import { useMediaQuery } from 'react-responsive';

//IMPORTED CSS
import './App.css';
import './components/carousel.css'
import 'keen-slider/keen-slider.min.css'

//IMPORTED COMPONENTS
import Nav from './components/Nav';
import Ebcidic from './components/Ebcidic'
import Bio from './components/Bio';
import ReleasesContent from './components/ReleasesContent';
import { YouTubeReleases } from './components/YouTubeReleases';

const pageStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: "100vh", 
  width: '100vw'
}

const slideStyleDesktop = {
  backgroundColor: 'black',
  width: '85vw',
  height: '80vh',
  margin: '0 auto',
  overflow: 'hidden',
  boxShadow: 'rgb(255 255 255 / 20%) 0px 0px 15px, rgb(255 255 255 / 15%) 0px 0px 3px 1px',
  borderRadius: '5px'
}

const slideStyleMobile = {
  position: 'absolute',
  right: '0px',
  left: '0px',
  bottom: '20px',
  backgroundColor: 'black',
  width: '85vw',
  height: '80vh',
  margin: '0 auto',
  overflow: 'hidden',
  boxShadow: 'rgb(255 255 255 / 20%) 0px 0px 15px, rgb(255 255 255 / 15%) 0px 0px 3px 1px',
  borderRadius: '5px'
}

const spacer = {
  height: '2%'
}

const dotsContainer = {
  display: 'inline-block',
  float: 'left',
  height: '15%',
  width: '5%',
}

const dotsStyle = {
  height: '100%',
  width: '20%',
  display: 'flex',
  margin: '0 auto',
  flexDirection: 'column',
  justifyContent: 'space-around'
}

const sliderStyle = {
  marginLeft: '10%',
  height: '90%',
}

const keenSlideStyle = {
  height: '80%'
}

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, slider] = useKeenSlider({
    centered: true,
    slidesPerView: 1,
    spacing: 0,
    vertical: true,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  })
  const isDesktop = useMediaQuery({
    query: '(min-width: 700px)'
  })


  

  return (
    <div className="App" style={pageStyle}>
      <div style={ isDesktop? (slideStyleDesktop) : (slideStyleMobile)} className="base-slide">
        <Nav />
        <div style={spacer} className='spacer'></div>

        <div style={dotsContainer} className="dots">
        {slider && (
        <div style={dotsStyle}className="dots">
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              />
            )
          })}
        </div>
      )}

        </div>
        <div style={sliderStyle} className="keen-slider" ref={sliderRef}>
          <div style={keenSlideStyle} className="keen-slider__slide">
            {isDesktop ? (
              <Ebcidic />
            ):(
              <Bio />
            )}         
          </div>
          <div style={keenSlideStyle} className="keen-slider__slide">
            <ReleasesContent />
          </div>
          <div style={keenSlideStyle} className="keen-slider__slide">
            <YouTubeReleases />
          </div>

        </div>
        {/* {slider && (
          <>
            <ArrowLeft
              onClick={(e) => e.stopPropagation() || slider.prev()}
              disabled={currentSlide === 0}
            />
            <ArrowRight
              onClick={(e) => e.stopPropagation() || slider.next()}
              disabled={currentSlide === slider.details().size - 1}
            />
          </>
        )} */}
      </div>
    </div>
  );
}

export default App;