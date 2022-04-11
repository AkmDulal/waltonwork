
import { useRef, useEffect } from "react";
import './App.css';
import { Controller, Scene } from "react-scrollmagic";
import SequenceOne from "./Components/SequenceOne";
import SequenceTwo from "./Components/SequenceTwo";
import SequenceThree from "./Components/SequenceThree";

import LogoTop from "./headerimages/toplogo.png"
import Logo from "./headerimages/TAMARIND.png"


// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// import { Container, Row, Col } from "react-bootstrap";



console.clear()

function App() {
  const ref = useRef();
  // let text = useRef(null);

  // useEffect(() => {
  //   gsap.to(text, {
  //     y: "-50",
  //     opacity: 1,
  //     scrollTrigger: {
  //       trigger: text,
  //       // markers: true,
  //       start: "top-=400 center",
  //       end: "top-=400 top",
  //       scrub: 1.6
  //     }
  //   });

  // })



  return (
    <div className="App">
      <div className="hedaer__area">
        <div className="container">
          <div className="row">
            <div className="col-lg-1">
                <img src={LogoTop} alt="" />
            </div>
            <div className="col-lg-11">
              <ul>
                <li> Laptop </li>
                <li> Desktop </li>
                <li> All In One </li>
                <li> Monitor </li>
                <li> Keyboard </li>
                <li> Mouse </li>
                <li> Pendrive </li>
                <li> Headphone </li>
                <li> Accessories </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hedaer__area_bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <img src={Logo} alt="" />
              </div>
              <div className="col-lg-9">
                <ul>
                  <li> Overview </li>
                  <li> Tech Specs </li>
                  <li> Picture Gallery </li>
                  <li> Buy Now </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="screen_one">
        <Controller>
          <Scene duration="200%" triggerHook="onLeave" pin>
            {progress => (
              <div style={{ height: "100vh", position: "relative" }}>
                <div className="slider__contn">
                  <h3> Explore The World</h3>
                  <p>  With its 180° hinge, the EX38 Pro can be laid flat on the table to share content with friends and colleagues. Its unique, durable hinge design has been subjected to a grueling 20,000 cycles in open-and-close tests. </p>
                </div>
                <SequenceOne ref={ref} progress={progress} />
              </div>
            )}
          </Scene>
        </Controller>
      </div>
      <div className="screen_one screen_two">
        <Controller>
          <Scene duration="200%" triggerHook="onLeave" pin>
            {progress => (
              <div style={{ height: "100vh", position: "relative" }}>
                <SequenceTwo ref={ref} progress={progress} />
              </div>
            )}
          </Scene>
        </Controller>
      </div>
      <div className="screen_one screen_two">
        <Controller>
          <Scene duration="200%" triggerHook="onLeave" pin>
            {progress => (
              <div style={{ height: "100vh", position: "relative" }}>
                <SequenceThree ref={ref} progress={progress} />
              </div>
            )}
          </Scene>
        </Controller>
      </div>

    </div>
  );
}

export default App;
