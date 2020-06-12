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
      autoplay: true, 
      autoplaySpeed:4000,


    };


    return (
      <Slider ref={slider => (this.slider = slider)} {...settings}>
        <div>
        <a href="https://speakyourtruth.shop" target="_blank">
                <img alt="SpeakYourTruth Shirt" src="SYT-Web-Banner.jpeg" target="_blank" width="100%"></img></a>

        </div>
      
        <div>
        <a href="https://speakyourtruth.me/to-you" target="_blank">
                <img alt="SpeakYourTruth" src="sytprintheader.png" target="_blank" width="100%"></img></a>
                
                <p>Design + Illustration </p>
                <br/><p className="rozette"> <a href="http://instagram.com/rozettewhiteside" target="_blank">Rozette Whiteside </a> + <a href="http://instagram.com/g.j.acuna" target="_blank">G.J. Acuna </a></p><br/>

        </div>
        <div>
        <a href="https://speakyourtruth.shop" target="_blank">
                <img alt="SpeakYourTruth" src="SYT-Web-Banner-2.jpeg" target="_blank" width="100%"></img></a>
                
                <p className="rozette"><a href="http://instagram.com/passionnurturesgrowth" target="_blank">Passion Nurtures Growth </a> x <a href="http://instagram.com/yonkosteez" target="_blank">YONKO Productions </a></p><br/>

        </div>
        <div>
          <Video
        videoSrcURL="https://www.youtube.com/embed/rtTIx9vG4CM" 
        videoTitle="No Justice, No Peace by New Pixel Films"
      />
      <p className="newpixel">'No Justice, No Peace' - <a href="http://instagram.com/newpixelfilms" target="_blank">New Pixel Films</a></p><br/>
        </div>
        
      </Slider>
    );
  }
}

export default SimpleSlider;
