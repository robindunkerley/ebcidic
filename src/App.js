import { useKeenSlider } from 'keen-slider/react';
import React, {useState} from 'react';

//IMPORTED CSS
import './App.css';
import './components/carousel.css'
import 'keen-slider/keen-slider.min.css'

//IMPORTED COMPONENTS
import Nav from './components/Nav';
import Layout from './components/Layout';
import Bio from './components/Bio';
import Release from './components/Release';

const pageStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: "100vh", 
  width: '100vw'
}

const slideStyle = {
  backgroundColor: 'black',
  width: '80vw',
  height: '80vh',
  margin: '0 auto'
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
    spacing: 30,
    vertical: true,
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  })

  //SLIDER FUNCTIONS

  function ArrowLeft(props) {
    const disabled = props.disabled ? " arrow--disabled" : ""
    return (
      <svg
        onClick={props.onClick}
        className={"arrow arrow--left" + disabled}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      </svg>
    )
  }
  
  function ArrowRight(props) {
    const disabled = props.disabled ? " arrow--disabled" : ""
    return (
      <svg
        onClick={props.onClick}
        className={"arrow arrow--right" + disabled}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      </svg>
    )
  }

  return (
    <div className="App" style={pageStyle}>
      <div style={slideStyle} className="base-slide">
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
          <Bio />
          </div>
          <div style={keenSlideStyle} className="keen-slider__slide">
          <Release />
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