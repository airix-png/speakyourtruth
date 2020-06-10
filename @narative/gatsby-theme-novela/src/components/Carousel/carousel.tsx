import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from '@emotion/styled';

import Video from '@components/Video/video'






class SimpleSlider extends React.Component {

  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  } 
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipetoslide:true,
    };


    return (
      <Slider ref={slider => (this.slider = slider)} {...settings}>
        <div>
          <Video
        videoSrcURL="https://www.youtube.com/embed/rtTIx9vG4CM" 
        videoTitle="No Justice, No Peace by New Pixel Films"
      />
      <p className="newpixel">'No Justice, No Peace' - <a href="http://instagram.com/newpixelfilms" target="_blank">New Pixel Films</a></p><br/>
        </div>
        <div>
        <a href="https://speakyourtruth.shop" target="_blank">
                <img alt="SpeakYourTruth Shirt" src="sytbanner.png" target="_blank" width="100%"></img></a>
                <p className="rozette"> <a href="https://speakyourtruth.shop" target="_blank">Buy Here</a></p><br/>

        </div>
      
        <div>
        <a href="https://speakyourtruth.me/to-you" target="_blank">
                <img alt="SpeakYourTruth" src="sytprintheader.png" target="_blank" width="100%"></img></a>
                
                <p className="rozette">Design + Illustration - <a href="http://instagram.com/rozettewhiteside" target="_blank">Rozette Whiteside </a> + <a href="http://instagram.com/g.j.acuna" target="_blank">G.J. Acuna </a></p><br/>

        </div>
        <div>
        <a href="https://speakyourtruth.shop" target="_blank">
                <img alt="SpeakYourTruth" src="pngxyonko.png" target="_blank" width="100%"></img></a>
                
                <p className="rozette"><a href="http://instagram.com/passionnurturesgrowth" target="_blank">Passion Nurtures Growth </a> x <a href="http://instagram.com/yonkosteez" target="_blank">YONKO Productions </a></p><br/>

        </div>
        
      </Slider>
    );
  }
}

export default SimpleSlider;
