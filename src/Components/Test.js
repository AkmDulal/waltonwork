import React from 'react'
import { useEffect, useRef, useState } from 'react'
// import styles from '../styles/Home.module.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
function Test() {
    const imageViewer = useRef(null)
    const imageScene = useRef(null)
    gsap.registerPlugin(ScrollTrigger)
    let frame_count = 9
    let offset_value = 100

    const currentFrame = index => (
        `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(index + 1).toString().padStart(4, '0')}.jpg`
      );

    gsap.to(imageViewer.current, {

        
        // backgroundPosition: (-offset_value * frame_count * 2) + "px 50%",
        // ease: "steps(" + frame_count + ")", // use a stepped ease for the sprite sheet
        scrollTrigger: {
            trigger: imageScene.current,
            start: "top top",
            end: "+=" + (frame_count * offset_value),
            pin: true,
            scrub: true
        }
    })
    return (
        <div>Test</div>
    )
}

export default Test