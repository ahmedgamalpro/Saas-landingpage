import React from 'react'
import Image from 'next/image';
import { HeroImage , Bain ,Dell , Discord , Ncr , Pacific ,Rakuten, Zend } from '../../image/index'
import './hero.css'
const Hero = () => {
  return (
    <>
        <section className='hero'>
          <div className="container">
            <div className="hero-top">
                <div className="hero-text">
                    <span className="first-p">
                      <p>FIND</p>
                    </span>
                    <span  className="second-p">
                      <p>YOUR INNER</p>
                    </span>
                    <span className="third-p">
                      <p>FLOW</p>
                    </span>
                    <button className="btn hero-btn">View app</button>
                </div>
                <Image src={HeroImage} className='hero-img'></Image>
            </div>
          </div>
          <div className="hero-logos">
            <p>Trusted by the world's best companies</p>
            <div className="logos">
              <Image src={Dell}></Image>
              <Image src={Bain}></Image>
              <Image src={Zend}></Image>
              <Image src={Rakuten}></Image>
              <Image src={Pacific}></Image>
              <Image src={Discord}></Image>
              <Image src={Ncr}></Image>
            </div>
          </div>
        </section>
    </>
  )
}

export default Hero